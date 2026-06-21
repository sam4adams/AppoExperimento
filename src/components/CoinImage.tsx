import { useWikipediaImage } from '../hooks/useWikipediaImage'
import CoinSvg from './CoinSvg'
import type { Denomination } from '../types'

const BORDER_COLOR: Record<Denomination['metalColor'], string> = {
  gold:    'ring-yellow-500',
  silver:  'ring-slate-300',
  copper:  'ring-orange-600',
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
  const ring = BORDER_COLOR[denomination.metalColor]

  if (loading) {
    return (
      <div
        className={`rounded-full bg-navy-700 animate-pulse flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }

  if (imageUrl) {
    return (
      <div
        className={`rounded-full overflow-hidden ring-2 ${ring} flex-shrink-0 shadow-lg ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src={imageUrl}
          alt={denomination.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return <CoinSvg denomination={denomination} size={size} />
}
