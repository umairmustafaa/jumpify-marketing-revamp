import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const paths: Record<string, React.ReactNode> = {
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l3-4 3 2 4-6" />
      </>
    ),
    building: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    headset: (
      <>
        <path d="M4 13v-1a8 8 0 0116 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="1" />
        <rect x="17" y="13" width="4" height="6" rx="1" />
        <path d="M19 19a4 4 0 01-4 3h-2" />
      </>
    ),
    trending: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </>
    ),
    check: <path d="M4 12l5 5L20 6" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    phone: (
      <path d="M5 4h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    star: (
      <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9z" />
    ),
    quote: (
      <path d="M9 7H5a2 2 0 00-2 2v3a2 2 0 002 2h2v3H4m13-10h-4a2 2 0 00-2 2v3a2 2 0 002 2h2v3h-3" />
    ),
    facebook: <path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a1 1 0 011-1z" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 17v-7" />
      </>
    ),
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="M10 9l5 3-5 3z" />
      </>
    ),
    whatsapp: (
      <path d="M3 21l1.6-4A8 8 0 1112 20a8 8 0 01-4-1l-4 2zm6-11c0 4 3 6 5 6M9 10c0-.6.4-1 1-1s1 1 1.5 2M15 16c.6 0 1-.4 1-1s-1-1-2-1.5" />
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    chevron: <path d="M6 9l6 6 6-6" />,
  };

  return (
    <svg {...base} width={20} height={20} aria-hidden {...props}>
      {paths[name] ?? null}
    </svg>
  );
}
