import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getSeries, getSeriesPrice } from '../services/numista'
import { countries } from '../data/countries'
import { denominations } from '../data/denominations'
import type { Series, SeriesPrice, GradePrice } from '../types'

const GRADE_GROUPS: { label: string; description: string; grades: string[] }[] = [
  { label: 'Poor–Fair', description: 'Heavily worn, barely identifiable', grades: ['P-1', 'FR-2', 'AG-3'] },
  { label: 'Good', description: 'Major design visible, lettering worn', grades: ['G-4', 'G-6'] },
  { label: 'Very Good', description: 'Design clear, some detail', grades: ['VG-8', 'VG-10'] },
  { label: 'Fine', description: 'Moderate even wear, all major features sharp', grades: ['F-12', 'F-15'] },
  { label: 'Very Fine', description: 'Light to moderate wear on high points', grades: ['VF-20', 'VF-25', 'VF-30', 'VF-35'] },
  { label: 'Extremely Fine', description: 'Slight wear on highest points only', grades: ['EF-40', 'EF-45'] },
  { label: 'About Uncirculated', description: 'Traces of wear, nearly full luster', grades: ['AU-50', 'AU-55', 'AU-58'] },
  { label: 'Mint State', description: 'No wear; varies by marks and luster', grades: ['MS-60', 'MS-61', 'MS-62', 'MS-63', 'MS-64', 'MS-65', 'MS-66', 'MS-67', 'MS-68'] },
  { label: 'Proof', description: 'Specially struck for collectors', grades: ['PR-60', 'PR-63', 'PR-65', 'PR-67', 'PR-68', 'PR-70'] },
]

function formatPrice(price: number | null): string {
  if (price === null) return '—'
  if (price < 1) return `${(price * 100).toFixed(0)}¢`
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`
  if (price >= 1000) return `$${(price / 1000).toFixed(1)}k`
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
}

function GradeRow({ gp }: { gp: GradePrice }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-white/80 font-mono text-sm w-16">{gp.grade}</span>
      <span className={`font-semibold text-sm ${gp.price === null ? 'text-white/30' : 'text-gold-400'}`}>
        {formatPrice(gp.price)}
      </span>
    </div>
  )
}

export default function PriceList() {
  const { countryId, denominationId, seriesId } = useParams<{
    countryId: string; denominationId: string; seriesId: string
  }>()
  const [series, setSeries] = useState<Series | null>(null)
  const [prices, setPrices] = useState<SeriesPrice | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const country = countries.find(c => c.id === countryId)
  const denom = denominations.find(d => d.id === denominationId)

  useEffect(() => {
    if (!denominationId || !seriesId) return
    Promise.all([getSeries(denominationId), getSeriesPrice(seriesId)]).then(([seriesList, p]) => {
      setSeries(seriesList.find(s => s.id === seriesId) ?? null)
      setPrices(p)
      setLoading(false)
    })
  }, [denominationId, seriesId])

  const priceByGrade = new Map(prices?.grades.map(gp => [gp.grade, gp]) ?? [])

  // Only show grade groups that have at least one matching price entry
  const activeGroups = GRADE_GROUPS.filter(group =>
    group.grades.some(g => priceByGrade.has(g as GradePrice['grade']))
  )

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <Header
        title={series?.name ?? 'Loading…'}
        subtitle={[country?.flag, country?.name, denom?.name].filter(Boolean).join(' · ')}
      />

      <main className="flex-1 px-4 pb-8 pt-4 max-w-2xl mx-auto w-full space-y-4">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Series details card */}
            {series && (
              <div className="bg-navy-800 rounded-2xl p-4 border border-white/5 space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">{series.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <Detail label="Years" value={`${series.yearStart}–${series.yearEnd ?? 'present'}`} />
                  <Detail label="Designer" value={series.designer} />
                  <Detail label="Composition" value={series.composition} />
                  <Detail label="Weight / Diameter" value={`${series.weight} · ${series.diameter}`} />
                </div>
                <div className="pt-1 border-t border-white/10 space-y-1">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Obverse</p>
                  <p className="text-white/70 text-sm">{series.obverseHint}</p>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider mt-1">Reverse</p>
                  <p className="text-white/70 text-sm">{series.reverseHint}</p>
                </div>
              </div>
            )}

            {/* Price table */}
            {prices ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-white font-semibold">Price Guide by Grade</h2>
                  <span className="text-white/30 text-xs">Updated {prices.lastUpdated}</span>
                </div>

                {activeGroups.map(group => {
                  const groupPrices = group.grades
                    .map(g => priceByGrade.get(g as GradePrice['grade']))
                    .filter((gp): gp is GradePrice => gp !== undefined)
                  const isOpen = activeGroup === group.label

                  return (
                    <div key={group.label} className="bg-navy-800 rounded-2xl border border-white/5 overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                        onClick={() => setActiveGroup(isOpen ? null : group.label)}
                      >
                        <div>
                          <span className="text-white font-medium text-sm">{group.label}</span>
                          <span className="text-white/40 text-xs ml-2">{group.description}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-400 font-semibold text-sm">
                            {formatPrice(groupPrices[0]?.price ?? null)}
                            {groupPrices.length > 1 && ` – ${formatPrice(groupPrices[groupPrices.length - 1]?.price ?? null)}`}
                          </span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            className={`w-4 h-4 text-white/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-3 border-t border-white/5">
                          {groupPrices.map(gp => <GradeRow key={gp.grade} gp={gp} />)}
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Notable dates */}
                {prices.notable.length > 0 && (
                  <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-4">
                    <h3 className="text-amber-400 font-semibold text-sm mb-2">⭐ Key Dates & Varieties</h3>
                    <ul className="space-y-1">
                      {prices.notable.map((note, i) => (
                        <li key={i} className="text-amber-200/70 text-sm">• {note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-center text-white/20 text-xs pb-2">
                  Source: {prices.source} · Prices are retail estimates and may vary.
                </p>
              </div>
            ) : (
              <div className="bg-navy-800 rounded-2xl p-6 text-center">
                <p className="text-white/40">No price data available for this series yet.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{label}</p>
      <p className="text-white/80 text-sm mt-0.5">{value}</p>
    </div>
  )
}
