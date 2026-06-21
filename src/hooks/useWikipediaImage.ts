import { useState, useEffect } from 'react'

const cache = new Map<string, string | null>()

export function useWikipediaImage(title: string | undefined) {
  const cached = title ? cache.get(title) : undefined
  const [imageUrl, setImageUrl] = useState<string | null>(cached ?? null)
  const [loading, setLoading] = useState(!!title && cached === undefined)

  useEffect(() => {
    if (!title || cache.has(title)) return
    setLoading(true)
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then(r => r.json())
      .then((data: { thumbnail?: { source: string } }) => {
        const url = data?.thumbnail?.source ?? null
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
