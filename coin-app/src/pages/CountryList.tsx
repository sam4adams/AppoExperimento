import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getCountries } from '../services/numista'
import type { Country } from '../types'

export default function CountryList() {
  const navigate = useNavigate()
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getCountries().then(c => { setCountries(c); setLoading(false) })
  }, [])

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.currency.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <Header title="Coin Value Lookup" subtitle="Select a country to begin" />

      <div className="px-4 pt-4 pb-2 max-w-2xl mx-auto w-full">
        <input
          type="search"
          placeholder="Search countries…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl bg-navy-800 text-white placeholder-white/40 px-4 py-3
            border border-white/10 focus:outline-none focus:border-gold-500 text-base"
        />
      </div>

      <main className="flex-1 px-4 pb-8 max-w-2xl mx-auto w-full">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <ul className="space-y-2 mt-2">
            {filtered.map(country => (
              <li key={country.id}>
                <button
                  onClick={() => navigate(`/country/${country.id}`)}
                  className="w-full flex items-center gap-4 bg-navy-800 hover:bg-navy-700
                    active:bg-navy-600 rounded-2xl px-4 py-4 transition-colors text-left
                    border border-white/5"
                >
                  <span className="text-4xl leading-none">{country.flag}</span>
                  <div className="flex-1">
                    <span className="text-white font-semibold text-base block">{country.name}</span>
                    <span className="text-white/50 text-sm">{country.currency}</span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-5 h-5 text-white/30 flex-shrink-0">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="text-center text-white/40 py-12">No countries match "{search}"</li>
            )}
          </ul>
        )}
      </main>
    </div>
  )
}
