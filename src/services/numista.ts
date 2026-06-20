/**
 * Numista API service.
 * Currently returns local mock data. When you have a Numista API key:
 *  1. Set VITE_NUMISTA_API_KEY in your .env file
 *  2. Flip USE_MOCK to false
 *  3. The functions below will hit https://api.numista.com/api/v3
 */

import { countries } from '../data/countries'
import { denominations } from '../data/denominations'
import { allSeries } from '../data/series'
import { seriesPrices } from '../data/prices'
import type { Country, Denomination, Series, SeriesPrice } from '../types'

const USE_MOCK = true
const API_KEY = import.meta.env.VITE_NUMISTA_API_KEY
const BASE_URL = 'https://api.numista.com/api/v3'

async function numistaGet<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  if (!API_KEY) throw new Error('VITE_NUMISTA_API_KEY not set')
  const url = new URL(`${BASE_URL}${path}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  const res = await fetch(url.toString(), {
    headers: { 'Numista-API-Key': API_KEY },
  })
  if (!res.ok) throw new Error(`Numista ${res.status}: ${res.statusText}`)
  return res.json() as Promise<T>
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getCountries(): Promise<Country[]> {
  if (USE_MOCK) return Promise.resolve(countries)
  // Real: would fetch issuer list from Numista and map to Country[]
  return numistaGet('/issuers')
}

export async function getDenominations(countryId: string): Promise<Denomination[]> {
  if (USE_MOCK) return Promise.resolve(denominations.filter(d => d.countryId === countryId))
  // Real: search types filtered by issuer, group by unit
  return numistaGet('/types', { issuer: countryId })
}

export async function getSeries(denominationId: string): Promise<Series[]> {
  if (USE_MOCK) return Promise.resolve(allSeries.filter(s => s.denominationId === denominationId))
  // Real: filter search results by denomination/unit, group into series by date range
  const denomParts = denominationId.split('-')
  return numistaGet('/types', { q: denomParts.join(' ') })
}

export async function getSeriesPrice(seriesId: string): Promise<SeriesPrice | null> {
  if (USE_MOCK) {
    return Promise.resolve(seriesPrices.find(p => p.seriesId === seriesId) ?? null)
  }
  // Real: fetch prices from Numista type prices endpoint
  const series = allSeries.find(s => s.id === seriesId)
  if (!series?.numistaCategoryId) return null
  return numistaGet(`/types/${series.numistaCategoryId}/prices`)
}
