"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { residentialPlan } from "@/lib/ft2";
import { reportConversion, trackEvent } from "@/lib/gtag";
import { Icon } from "./Icons";

// Compact, high-conversion lead form for the hero / sticky CTAs.
// Posts to /api/contact (Google Sheet + optional email) AND opens WhatsApp.
export function LeadForm({
  heading = "Get the 2026 Payment Plan",
  sub = "Enter your details — we'll send the full plan & availability on WhatsApp.",
  cta = "Get Payment Plan",
  compact = false,
}: {
  heading?: string;
  sub?: string;
  cta?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const size = String(data.get("size") || "");
    if (!name || !phone) return;

    setStatus("loading");
    const payload = {
      name,
      phone,
      project: "Faisal Town Phase 2",
      type: size,
      message: `Requested the 2026 payment plan${size ? ` for ${size}` : ""}.`,
      source: "Website Lead Form",
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Even if the API fails, we still hand the lead to WhatsApp below.
    }

    // Open WhatsApp with a pre-filled message as a guaranteed second channel.
    const text = encodeURIComponent(
      `Hi ${site.name}, I'm interested in Faisal Town Phase 2${size ? ` (${size})` : ""}. My name is ${name}. Please send the latest payment plan & availability.`
    );
    // Fire the Google Ads lead conversion + analytics event.
    reportConversion("lead");
    trackEvent("generate_lead", { form: "hero_lead_form", plot_size: size || "unspecified" });

    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setStatus("done");
    form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20";

  if (status === "done") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="check" width={26} height={26} />
        </span>
        <h3 className="mt-3 text-lg font-semibold text-navy">Thank you!</h3>
        <p className="mt-1 text-sm text-muted">
          Your request is in and WhatsApp is opening. Our advisor will share the full payment plan shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-gold-dark hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {heading && (
        <div className="mb-1">
          <h3 className="text-lg font-semibold text-navy">{heading}</h3>
          {sub && <p className="mt-1 text-sm text-muted">{sub}</p>}
        </div>
      )}
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input name="name" required placeholder="Your name *" className={inputClass} aria-label="Your name" />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone / WhatsApp *"
          className={inputClass}
          aria-label="Phone or WhatsApp number"
        />
      </div>
      <select name="size" defaultValue="" className={inputClass} aria-label="Plot size of interest">
        <option value="">Plot size of interest (optional)</option>
        {residentialPlan.map((p) => (
          <option key={p.size} value={p.size}>
            {p.size}
          </option>
        ))}
        <option value="Commercial">Commercial plot</option>
        <option value="Not sure">Not sure yet</option>
      </select>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            {cta} <Icon name="arrow" width={17} height={17} />
          </>
        )}
      </button>
      <p className="text-center text-[0.7rem] text-muted">
        🔒 Your details are safe with us. No spam — just genuine investment guidance.
      </p>
    </form>
  );
}
