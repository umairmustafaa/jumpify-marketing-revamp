"use client";

import { useEffect } from "react";
import { reportConversion, trackEvent } from "@/lib/gtag";

// Delegated, site-wide click tracking. Fires a Google Ads conversion whenever a
// visitor clicks any phone (tel:) or WhatsApp (wa.me) link — no need to wire up
// each button individually. Lead-form submits fire their own conversion inline.
export function ConversionTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        reportConversion("call");
        trackEvent("click_call", { link_url: href });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        reportConversion("whatsapp");
        trackEvent("click_whatsapp", { link_url: href });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
