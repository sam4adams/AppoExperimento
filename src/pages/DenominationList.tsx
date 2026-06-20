import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import CoinSvg from '../components/CoinSvg'
import { getCountries, getDenominations } from '../services/numista'
import type { Country, Denomination } from '../types'

export default function DenominationList() {
  const { countryId } = useParams<{ countryId: string }>()
  const navigate = useNavigate()
  const [country, setCountry] = useState<Country | null>(null)
  const [denoms, setDenoms] = useState<Denomination[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!countryId) return
    Promise.all([getCountries(), getDenominations(countryId)]).then(([countries, d]) => {
      setCountry(countries.find(c => c.id === countryId) ?? null)
      setDenoms(d)
      setLoading(false)
    })
  }, [countryId])

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <Header
        title={country ? `${country.flag} ${country.name}` : 'Loading…'}
        subtitle="Choose a denomination"
      />
      <main className="flex-1 px-4 pb-8 pt-4 max-w-2xl mx-auto w-full">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {denoms.map(denom => (
              <button
                key={denom.id}
                onClick={() => navigate(`/country/${countryId}/denomination/${denom.id}`)}
                className="flex flex-col items-center gap-3 bg-navy-800 hover:bg-navy-700
                  active:bg-navy-600 rounded-2xl p-4 transition-colors border border-white/5"
              >
                <CoinSvg denomination={denom} size={100} />
                <div className="text-center">
                  <span className="text-white font-semibold text-sm block">{denom.name}</span>
                  <span className="text-white/50 text-xs mt-0.5 block">{denom.description.slice(0, 45)}…</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
