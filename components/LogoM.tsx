import React from "react"

// Clean, elegant organic 'M' logo: single ribbon-like lime gradient path
export default function LogoM({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="lime-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3E635" />
          <stop offset="1" stopColor="#65a30d" />
        </linearGradient>
      </defs>
      <path
        d="M10 54 Q18 8 32 40 Q46 60 54 10"
        stroke="url(#lime-gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
} 