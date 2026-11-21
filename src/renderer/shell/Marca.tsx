function RengDegradado({ id: rengId }: { id: string }): React.JSX.Element {
  return (
    <defs>
      <linearGradient id={rengId} gradientUnits="userSpaceOnUse" x1="4" y1="4" x2="44" y2="44">
        <stop offset="0" style={{ stopColor: 'var(--accent-2)' }} />
        <stop offset="1" style={{ stopColor: 'var(--accent)' }} />
      </linearGradient>
    </defs>
  )
}

function RengTrazo({ id: rengId }: { id: string }): React.JSX.Element {
  return (
    <>
      <g transform="rotate(-45 24 24)">
        <rect x="7" y="16.5" width="34" height="15" rx="7.5" fill="none" stroke={`url(#${rengId})`} strokeWidth="2.4" />
        <path d="M24 16.5 v15 h-9.5 a7.5 7.5 0 0 1 0 -15 Z" fill={`url(#${rengId})`} />
      </g>
      <path d="M4 40 h9 l3 -5 l4 9 l3 -6 h21" fill="none" stroke={`url(#${rengId})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

export function RengBrandMark(): React.JSX.Element {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <RengDegradado id="marca-chica" />
      <RengTrazo id="marca-chica" />
    </svg>
  )
}

export function RengMarcaGrande(): React.JSX.Element {
  return (
    <svg className="atom" viewBox="0 0 48 48" aria-hidden="true">
      <RengDegradado id="marca-grande" />
      <RengTrazo id="marca-grande" />
    </svg>
  )
}
