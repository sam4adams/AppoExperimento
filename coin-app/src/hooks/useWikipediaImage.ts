import { useState, useEffect } from 'react'

const cache = new Map<string, string | null>()

async function fetchCoinImage(coinName: string): Promise<string | null> {
  // 1. Wikipedia article thumbnail — editorially curated, usually a clean obverse photo
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(coinName)}`
    )
    const data = await res.json() as {
      thumbnail?: { source: string; width: number; height: number }
    }
    // Accept if it exists and is not a landscape composite (width > height = two coins side by side)
    const t = data?.thumbnail
    if (t?.source && t.height >= t.width * 0.8) return t.source
  } catch { /* fall through */ }

  // 2. Commons search — prefer .jpg photos, exclude illustrations/drawings/SVGs
  try {
    const params = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: `${coinName} obverse`,
      srnamespace: '6',
      srlimit: '10',
      format: 'json',
      origin: '*',
    })
    const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`)
    const data = await res.json() as { query?: { search?: Array<{ title: string }> } }
    const results = data.query?.search ?? []

    const isPhoto = (title: string) => {
      const t = title.toLowerCase()
      return !t.includes('.svg') && !t.includes('drawing') &&
             !t.includes('illustration') && !t.includes('sketch') &&
             !t.includes('engraving') && !t.includes('reverse')
    }
    const photos = results.filter(r => isPhoto(r.title))
    const best =
      photos.find(r => r.title.toLowerCase().includes('obverse') && r.title.toLowerCase().endsWith('.jpg')) ??
      photos.find(r => r.title.toLowerCase().includes('obverse')) ??
      photos[0]

    if (best) {
      const filename = best.title.replace('File:', '').replace(/ /g, '_')
      return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=400`
    }
  } catch { /* fall through */ }

  return null
}

export function useWikipediaImage(title: string | undefined) {
  const cached = title ? cache.get(title) : undefined
  const [imageUrl, setImageUrl] = useState<string | null>(cached ?? null)
  const [loading, setLoading] = useState(!!title && cached === undefined)

  useEffect(() => {
    if (!title || cache.has(title)) return
    setLoading(true)
    fetchCoinImage(title)
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
