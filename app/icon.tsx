import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generates the site favicon at /icon — a navy tile with gold "jump" chevrons.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0a1f44,#12305f)",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <path d="M5 15l7-7 7 7" stroke="#e0c476" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20l7-7 7 7" stroke="#c9a24b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
