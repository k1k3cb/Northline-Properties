type IconName =
  | "bed"
  | "bath"
  | "area"
  | "year"
  | "parking"
  | "energy"
  | "pool"
  | "wine"
  | "home"
  | "spa"
  | "shield"
  | "leaf"
  | "garage"
  | "bolt"
  | "pin"
  | "check"
  | "send"
  | "close"
  | "prev"
  | "next"
  | "expand"
  | "bookmark"
  | "share"
  | "download";

const PATHS: Record<IconName, React.ReactNode> = {
  bed: (
    <>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18h18" />
      <path d="M3 18v2M21 18v2" />
      <path d="M7 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M6 12V6a2 2 0 0 1 4 0" />
      <path d="M8 19l-1 2M16 19l1 2" />
    </>
  ),
  area: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M9 4v16M4 9h16" opacity="0.45" />
    </>
  ),
  year: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </>
  ),
  energy: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </>
  ),
  pool: (
    <>
      <path d="M2 16c2 0 2 1.5 4 1.5S8 16 10 16s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
      <path d="M2 20c2 0 2 1.5 4 1.5S8 20 10 20s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
      <path d="M8 12V6a2 2 0 0 1 4 0" />
      <path d="M4 12h16" />
    </>
  ),
  wine: (
    <>
      <path d="M8 2h8v6a4 4 0 0 1-8 0V2Z" />
      <path d="M12 12v8M8 22h8" />
    </>
  ),
  home: (
    <>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
    </>
  ),
  spa: (
    <>
      <path d="M12 21c-5 0-8-3-8-7 3 0 5 1 8 1s5-1 8-1c0 4-3 7-8 7Z" />
      <path d="M12 14V4M12 4c-2 2-2 5 0 7 2-2 2-5 0-7Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 13 4 20 4c0 8-4 15-13 15" />
      <path d="M5 19c3-5 7-9 12-11" />
    </>
  ),
  garage: (
    <>
      <path d="M3 17V9l9-6 9 6v8" />
      <path d="M5 17h14M7 17v-6h10v6" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  send: (
    <>
      <path d="M21 3 10 14" />
      <path d="M21 3 14 21l-4-7-7-4 18-7Z" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  prev: <path d="m14 6-6 6 6 6" />,
  next: <path d="m10 6 6 6-6 6" />,
  expand: (
    <>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </>
  ),
  bookmark: <path d="M7 3h10v18l-5-4-5 4V3Z" />,
  share: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17" cy="5.5" r="2.5" />
      <circle cx="17" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 6.6-4M8.2 13.2l6.6 4" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v3h16v-3" />
    </>
  ),
};

export default function Icon({
  name,
  className = "w-5 h-5",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export type { IconName };
