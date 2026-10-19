const paths = {
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L9 22a2.1 2.1 0 0 1-3-3L16.6 8.4M14.7 6.3a4 4 0 0 1 5-3l-2.5 2.5.5 2 2 .5L22 5.3a4 4 0 0 1-3 5" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  users: <><circle cx="10" cy="8" r="3" /><path d="M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M17 4a3 3 0 0 1 0 6M21 20v-1a4 4 0 0 0-3-3.9" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  laptop: <><rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 20h20" /></>,
  apple: <path d="M12 7c1-2 3-2 3-2 0 2-1 3-3 3M12 8c-3-1-6 1-6 5 0 4 2 8 4 8 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 4-4 4-8 0-4-3-6-6-5Z" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /><circle cx="12" cy="12" r="6.5" /></>,
  network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4M12 11l-6 6M12 11l6 6" /></>,
  camera: <path d="m3 8 12-3 2 6-12 3ZM17 9l4-1v5l-4 1M10 15l-1 5" />,
  whatsapp: <><path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6L3 21Z" /><path d="M9 8c0 4 3 7 7 7l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-2 .5Z" /></>,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="1" /><path d="M8 20h8M12 16v4" /></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  chevron: <path d="m9 6 6 6-6 6" />,
}

const fills = {
  facebook: <path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.4-1.7 1.8-1.7h1.5V4.2S15.5 4 14.3 4C11.8 4 10.3 5.5 10.3 8.3v2.5H7.5V14h2.8v8h3.2Z" />,
  tiktok: <path d="M16.6 2h-3.2v13.2a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.3a6 6 0 1 0 5.1 5.9V8.5a7.3 7.3 0 0 0 4.1 1.3V6.6a4.2 4.2 0 0 1-4.1-4.6Z" />,
  youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z" />,
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  const solid = fills[name]
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {solid || paths[name]}
    </svg>
  )
}
