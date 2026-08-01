// ─────────────────────────────────────────────────────────────────────────
// Google Ads conversion tracking helpers.
//
// The Google Ads tag (AW-17999922348) is already loaded in app/layout.tsx.
// To make ads optimise toward LEADS you must create Conversion Actions in the
// Google Ads UI (Tools → Conversions → New → Website), then paste each action's
// "conversion label" below. Until you do, tracking calls are safely ignored.
//
// How to get a label: after creating a conversion action, Google shows a snippet
// like  gtag('event','conversion',{send_to:'AW-17999922348/AbC-D_efGh'}).
// The part after the slash (AbC-D_efGh) is the label — paste it below.
// ─────────────────────────────────────────────────────────────────────────

export const GADS_ID = "AW-17999922348";

// TODO: replace the empty strings with the labels from Google Ads.
export const CONVERSION_LABELS = {
  lead: "",       // Form submitted (primary lead)
  whatsapp: "",   // WhatsApp click
  call: "",       // Phone call click
} as const;

type Gtag = (command: string, action: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

// Fires a Google Ads conversion. No-ops safely if gtag isn't ready or the label
// hasn't been set yet, so it never breaks the page or throws.
export function reportConversion(
  type: keyof typeof CONVERSION_LABELS,
  value?: number
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const label = CONVERSION_LABELS[type];
  if (!label) return; // not configured yet
  window.gtag("event", "conversion", {
    send_to: `${GADS_ID}/${label}`,
    ...(value ? { value, currency: "PKR" } : {}),
  });
}

// Also push a generic GA4-style event (useful if you add GA4 later).
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
