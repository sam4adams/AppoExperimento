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

interface Props {
  wikipediaTitle: string | undefined
  denomination: Denomination
  size?: number
  className?: string
}

export default function CoinImage({ wikipediaTitle, denomination, size = 100, className = '' }: Props) {
  const { imageUrl, loading } = useWikipediaImage(wikipediaTitle)
  const ring = RING[denomination.metalColor]

  if (loading) {
    return (
      <div
        className={`rounded-full bg-navy-800 animate-pulse flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }

  if (imageUrl) {
    return (
      <div
        className={`relative rounded-full overflow-hidden ring-2 ${ring} flex-shrink-0 shadow-xl ${className}`}
        style={{ width: size, height: size, backgroundColor: '#0a0f1a' }}
      >
        <img
          src={imageUrl}
          alt={denomination.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Gentle edge vignette to blend white-background photos into dark border */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ boxShadow: 'inset 0 0 10px 4px rgba(0, 0, 0, 0.45)' }}
        />
      </div>
    )
  }

  return <CoinSvg denomination={denomination} size={size} />
}
