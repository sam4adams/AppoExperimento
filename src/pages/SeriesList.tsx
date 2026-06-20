import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getDenominations, getSeries } from '../services/numista'
import { countries } from '../data/countries'
import type { Denomination, Series } from '../types'

export default function SeriesList() {
  const { countryId, denominationId } = useParams<{ countryId: string; denominationId: string }>()
  const navigate = useNavigate()
  const [denom, setDenom] = useState<Denomination | null>(null)
  const [seriesList, setSeriesList] = useState<Series[]>([])
  const [loading, setLoading] = useState(true)

  const country = countries.find(c => c.id === countryId)

  useEffect(() => {
    if (!countryId || !denominationId) return
    Promise.all([getDenominations(countryId), getSeries(denominationId)]).then(([denoms, s]) => {
      setDenom(denoms.find(d => d.id === denominationId) ?? null)
      setSeriesList(s)
      setLoading(false)
    })
  }, [countryId, denominationId])

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <Header
        title={denom ? `${denom.name} Series` : 'Loading…'}
        subtitle={country ? `${country.flag} ${country.name}` : undefined}
      />
      <main className="flex-1 px-4 pb-8 pt-4 max-w-2xl mx-auto w-full">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <ul className="space-y-3">
            {seriesList.map(series => (
              <li key={series.id}>
                <button
                  onClick={() => navigate(`/country/${countryId}/denomination/${denominationId}/series/${series.id}`)}
                  className="w-full flex gap-4 bg-navy-800 hover:bg-navy-700 active:bg-navy-600
                    rounded-2xl p-4 transition-colors border border-white/5 text-left"
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center
                    bg-gold-500/20 rounded-xl px-3 py-2 min-w-[72px]">
                    <span className="text-gold-400 font-bold text-sm">{series.yearStart}</span>
                    <span className="text-gold-400/60 text-xs">—</span>
                    <span className="text-gold-400 font-bold text-sm">
                      {series.yearEnd ?? 'now'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-white font-semibold text-base block">{series.name}</span>
                    <span className="text-white/50 text-sm mt-1 block line-clamp-2">{series.description}</span>
                    <div className="flex gap-3 mt-2 flex-wrap">
                      <Tag label={series.composition.split(',')[0]} />
                      <Tag label={series.diameter} />
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-5 h-5 text-white/30 flex-shrink-0 self-center">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{label}</span>
  )
}
