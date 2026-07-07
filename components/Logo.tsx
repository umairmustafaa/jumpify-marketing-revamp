import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "#ffffff" : "#0a1f44";
  const sub = variant === "light" ? "rgba(255,255,255,0.7)" : "#5b6472";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Jumpify Marketing home">
      <span className="grid place-items-center rounded-lg" style={{ width: 38, height: 38, background: "linear-gradient(135deg,#0a1f44,#12305f)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          {/* Upward "jump" chevrons */}
          <path d="M5 15l7-7 7 7" stroke="#e0c476" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20l7-7 7 7" stroke="#c9a24b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-semibold text-[1.05rem] tracking-tight" style={{ color: text, fontFamily: "var(--font-poppins)" }}>
          Jumpify
        </span>
        <span className="block text-[0.62rem] font-medium tracking-[0.22em] uppercase" style={{ color: sub }}>
          Marketing
        </span>
      </span>
    </Link>
  );
}
