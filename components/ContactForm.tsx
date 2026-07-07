"use client";

import { useState } from "react";
import { projects, site } from "@/lib/site";
import { Icon } from "./Icons";

const propertyTypes = ["Residential Plot", "Commercial Plot", "Constructed House", "File / Investment"];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = String(data.get("name")    || "");
    const phone   = String(data.get("phone")   || "");
    const city    = String(data.get("city")    || "");
    const project = String(data.get("project") || "");
    const type    = String(data.get("type")    || "");
    const message = String(data.get("message") || "");

    // 1. Send via API (email) — fire-and-forget; don't block WhatsApp on failure.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city, project, type, message }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Unknown error" }));
        setErrorMsg(error || "Email delivery failed — your WhatsApp message was still sent.");
      }
    } catch {
      // Network error — still open WhatsApp below.
      setErrorMsg("Could not reach the email server — your WhatsApp message was still sent.");
    }

    // 2. Always open WhatsApp with pre-filled message (works without a backend).
    const text = [
      `New enquiry from the website:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      city    && `City: ${city}`,
      project && `Project: ${project}`,
      type    && `Property Type: ${type}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

    setState("success");
    form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20 disabled:opacity-60";

  const isLoading = state === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} disabled={isLoading} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+92 3XX XXXXXXX"
            className={inputClass}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="city">
            City
          </label>
          <input id="city" name="city" placeholder="e.g. Islamabad" className={inputClass} disabled={isLoading} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="project">
            Interested Project
          </label>
          <select id="project" name="project" className={inputClass} defaultValue="" disabled={isLoading}>
            <option value="" disabled>
              Select a project
            </option>
            {projects.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="type">
          Property Type
        </label>
        <select id="type" name="type" className={inputClass} defaultValue="" disabled={isLoading}>
          <option value="" disabled>
            Select property type
          </option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your investment goals…"
          className={inputClass}
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send Enquiry <Icon name="arrow" width={17} height={17} />
          </>
        )}
      </button>

      {state === "success" && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          <Icon name="check" width={16} height={16} />
          Thank you! Your WhatsApp is opening — we&apos;ll reply shortly.
          {errorMsg && <span className="ml-1 text-amber-700">({errorMsg})</span>}
        </p>
      )}

      {state === "error" && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <Icon name="close" width={16} height={16} />
          {errorMsg || "Something went wrong. Please try again or contact us via WhatsApp."}
        </p>
      )}

      <p className="text-center text-xs text-muted">
        By submitting you agree to be contacted by {site.name}. We never share your data.
      </p>
    </form>
  );
}
