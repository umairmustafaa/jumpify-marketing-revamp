import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

// Social share card auto-attached to <meta property="og:image"> and twitter:image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(115deg,#061631 0%,#0a1f44 55%,#12305f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "linear-gradient(135deg,#0a1f44,#12305f)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
              <path d="M5 15l7-7 7 7" stroke="#e0c476" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 20l7-7 7 7" stroke="#c9a24b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>Jumpify</span>
            <span style={{ fontSize: 16, letterSpacing: 6, color: "rgba(255,255,255,0.65)" }}>MARKETING</span>
          </div>
        </div>

        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, marginTop: 56, display: "flex", flexDirection: "column" }}>
          <span>Invest in Property.</span>
          <span style={{ color: "#e0c476" }}>Build Lasting Wealth.</span>
        </div>

        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)", marginTop: 28, maxWidth: 900 }}>
          Secure, NOC-approved real estate investments in Faisal Town Phase 2 & across Pakistan and Dubai.
        </div>
      </div>
    ),
    { ...size }
  );
}
