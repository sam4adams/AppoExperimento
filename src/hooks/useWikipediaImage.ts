import { useState, useEffect } from 'react'

const cache = new Map<string, string | null>()

async function fetchObverseImage(coinName: string): Promise<string | null> {
  // Search Commons for "{coin} obverse", fetch up to 10 results and prefer
  // MS63 / MS-63 / uncirculated titles — higher-grade photos on dark backgrounds
  try {
    const params = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: `${coinName} obverse`,
      srnamespace: '6',   // File namespace only
      srlimit: '10',
      format: 'json',
      origin: '*',
    })
    const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`)
    const data = await res.json() as { query?: { search?: Array<{ title: string }> } }
    const results = data.query?.search ?? []

    const lower = (t: string) => t.toLowerCase()
    const ms63       = results.find(r => lower(r.title).includes('ms63') || lower(r.title).includes('ms-63'))
    const uncirc     = results.find(r => lower(r.title).includes('uncirculated'))
    const anyObverse = results.find(r => lower(r.title).includes('obverse'))
    const best = ms63 ?? uncirc ?? anyObverse ?? results[0]

    if (best) {
      const filename = best.title.replace('File:', '').replace(/ /g, '_')
      return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=400`
    }
  } catch { /* fall through */ }

  // Fall back to Wikipedia article thumbnail
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(coinName)}`
    )
    const data = await res.json() as { thumbnail?: { source: string } }
    return data?.thumbnail?.source ?? null
  } catch { return null }
}

export function useWikipediaImage(title: string | undefined) {
  const cached = title ? cache.get(title) : undefined
  const [imageUrl, setImageUrl] = useState<string | null>(cached ?? null)
  const [loading, setLoading] = useState(!!title && cached === undefined)

  useEffect(() => {
    if (!title || cache.has(title)) return
    setLoading(true)
    fetchObverseImage(title)
      .then(url => {
        cache.set(title, url)
        setImageUrl(url)
      })
      .catch(() => {
        cache.set(title, null)
        setImageUrl(null)
      })
      .finally(() => setLoading(false))
  }, [title])

  return { imageUrl, loading }
}
