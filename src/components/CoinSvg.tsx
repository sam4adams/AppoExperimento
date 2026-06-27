import type { Denomination } from '../types'

const METAL_COLORS: Record<Denomination['metalColor'], { outer: string; inner: string; text: string }> = {
  gold:    { outer: '#B8860B', inner: '#FFD700', text: '#5C4000' },
  silver:  { outer: '#708090', inner: '#C0C0C0', text: '#2C3E50' },
  copper:  { outer: '#8B4513', inner: '#CD7F32', text: '#3B1A08' },
  nickel:  { outer: '#6B7280', inner: '#9CA3AF', text: '#1F2937' },
  bronze:  { outer: '#8B4513', inner: '#CD853F', text: '#3B1A08' },
  bimetal: { outer: '#B8860B', inner: '#C0C0C0', text: '#2C3E50' },
}

interface Props {
  denomination: Denomination
  size?: number
}

export default function CoinSvg({ denomination, size = 120 }: Props) {
  const { outer, inner, text } = METAL_COLORS[denomination.metalColor]
  const r = size / 2
  const rim = r * 0.92
  const face = r * 0.80
  const label = denomination.valueLabel

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={denomination.name}>
      {/* Drop shadow */}
      <defs>
        <radialGradient id={`grad-${denomination.id}`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="black" stopOpacity="0.15" />
        </radialGradient>
        <filter id={`shadow-${denomination.id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Outer rim */}
      <circle cx={r} cy={r} r={rim} fill={outer} filter={`url(#shadow-${denomination.id})`} />
      {/* Reeded edge hint */}
      <circle cx={r} cy={r} r={rim} fill="none" stroke={inner} strokeWidth="3" strokeDasharray="4 3" opacity="0.5" />
      {/* Face */}
      <circle cx={r} cy={r} r={face} fill={inner} />
      {/* Gloss overlay */}
      <circle cx={r} cy={r} r={face} fill={`url(#grad-${denomination.id})`} />
      {/* Value label */}
      <text
        x={r} y={r + 1}
        textAnchor="middle" dominantBaseline="middle"
        fill={text}
        fontSize={label.length > 3 ? size * 0.15 : size * 0.22}
        fontWeight="bold"
        fontFamily="-apple-system, sans-serif"
      >
        {label}
      </text>
      {/* Denomination name below label */}
      <text
        x={r} y={r + size * 0.25}
        textAnchor="middle" dominantBaseline="middle"
        fill={text}
        fontSize={size * 0.095}
        fontFamily="-apple-system, sans-serif"
        opacity="0.75"
      >
        {denomination.name}
      </text>
    </svg>
  )
}
