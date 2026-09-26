export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3 shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 50"
        fill="none"
        className="h-9 w-auto"
        aria-label="Northline Properties"
      >
        <g transform="translate(4, 5)">
          <circle
            cx="20"
            cy="20"
            r="19"
            stroke={light ? "#F8F7F4" : "#1B2A32"}
            strokeWidth="1.25"
            opacity="0.5"
          />
          <circle cx="20" cy="20" r="13" stroke="#C2A683" strokeWidth="0.8" opacity="0.7" />
          <path d="M20 4 L23 18 L20 16 L17 18 Z" fill={light ? "#F8F7F4" : "#1B2A32"} />
          <path
            d="M20 36 L20 24"
            stroke={light ? "#F8F7F4" : "#1B2A32"}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M6 20 L14 20"
            stroke={light ? "#F8F7F4" : "#1B2A32"}
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M26 20 L34 20"
            stroke={light ? "#F8F7F4" : "#1B2A32"}
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="1.5" fill="#C2A683" />
        </g>
        <text
          x="56"
          y="24"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="19"
          fontWeight="600"
          letterSpacing="0.12em"
          fill={light ? "#F8F7F4" : "#1B2A32"}
        >
          NORTHLINE
        </text>
        <text
          x="57"
          y="38"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="8"
          letterSpacing="0.32em"
          fill={light ? "#C2A683" : "#6B7280"}
        >
          PROPERTIES · GALICIA
        </text>
      </svg>
      <span className="hidden sm:flex flex-col leading-none">
        <span
          className={`font-display text-[22px] tracking-tight ${light ? "text-linen" : "text-atlantic"}`}
        >
          Northline
        </span>
        <span className="label-caps mt-1 text-dune-deep">Galicia Estate</span>
      </span>
    </span>
  );
}
