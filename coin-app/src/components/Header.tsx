import { useNavigate, useLocation } from 'react-router-dom'

interface Props {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  const canGoBack = location.pathname !== '/'

  return (
    <header className="sticky top-0 z-10 bg-navy-700 shadow-lg safe-top">
      <div className="flex items-center gap-3 px-4 py-3 max-w-2xl mx-auto">
        {canGoBack && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 active:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className="w-5 h-5 text-white">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div className="flex-1 min-w-0">
          <h1 className="text-white font-bold text-lg leading-tight truncate">{title}</h1>
          {subtitle && (
            <p className="text-white/60 text-sm truncate">{subtitle}</p>
          )}
        </div>
        {/* Coin icon */}
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center">
          <span className="text-navy-900 font-bold text-sm">$</span>
        </div>
      </div>
    </header>
  )
}
