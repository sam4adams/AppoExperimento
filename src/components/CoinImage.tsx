import { useWikipediaImage } from '../hooks/useWikipediaImage'
import CoinSvg from './CoinSvg'
import type { Denomination } from '../types'

const RING: Record<Denomination['metalColor'], string> = {
  gold:    'ring-yellow-500',
  silver:  'ring-slate-300',
  copper:  'ring-orange-500',
  nickel:  'ring-slate-400',
  bronze:  'ring-orange-700',
  bimetal: 'ring-yellow-400',
}

// Background fills any white/light areas in coin photos with a matching metal tone
const BG: Record<Denomination['metalColor'], string> = {
  gold:    '#7a5c10',
  silver:  '#7a8a9a',
  copper:  '#7a3a10',
  nickel:  '#5a6370',
  bronze:  '#6a4015',
  bimetal: '#7a6a10',
}

interface Props {
  wikipediaTitle: string | undefined
  denomination: Denomination
  size?: number
  className?: string
}

export default function CoinImage({ wikipediaTitle, denomination, size = 100, className = '' }: Props) {
  const { imageUrl, loading } = useWikipediaImage(wikipediaTitle)
  const ring = RING[denomination.metalColor]
  const bg   = BG[denomination.metalColor]

  if (loading) {
    return (
      <div
        className={`rounded-full animate-pulse flex-shrink-0 ${className}`}
        style={{ width: size, height: size, backgroundColor: bg }}
      />
    )
  }

  if (imageUrl) {
    return (
      <div
        className={`rounded-full overflow-hidden ring-2 ${ring} flex-shrink-0 shadow-lg ${className}`}
        style={{ width: size, height: size, backgroundColor: bg }}
      >
        <img
          src={imageUrl}
          alt={denomination.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    )
  }

  return <CoinSvg denomination={denomination} size={size} />
}
