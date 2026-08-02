import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

// Contact form API route.
// Destinations (all optional — if env var is absent the step is silently skipped):
//   1. Resend email  →  RESEND_API_KEY + CONTACT_TO_EMAIL
//   2. Google Sheets →  GOOGLE_SHEET_WEBHOOK_URL or GOOGLE_SHEETS_WEBHOOK_URL
//                        (Apps Script Web App URL — either spelling works)
// WhatsApp is handled client-side in ContactForm.tsx.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city, project, type, message } = body as Record<string, string>;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const apiKey   = process.env.RESEND_API_KEY;
    const toEmail  = process.env.CONTACT_TO_EMAIL ?? site.email;
    // Accept both spellings so it works regardless of how the env var was named.
    const sheetUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ?? process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // Build a clean plain-text body for the email notification.
    const lines = [
      `New enquiry received from ${site.name} website`,
      ``,
      `Name    : ${name}`,
      `Phone   : ${phone}`,
      city    ? `City    : ${city}` : null,
      project ? `Project : ${project}` : null,
      type    ? `Type    : ${type}` : null,
      message ? `Message : ${message}` : null,
      ``,
      `Submitted at: ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    // ── 1. Resend email ────────────────────────────────────────────────────────
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${site.name} Website <onboarding@resend.dev>`,
          to: [toEmail],
          subject: `New Enquiry — ${name} (${project || "General"})`,
          text: lines,
          html: `<pre style="font-family:sans-serif;line-height:1.6">${lines.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        // Don't fail the whole request — sheet logging may still work.
      }
    } else {
      console.info("Contact form submission (no RESEND_API_KEY configured):\n", lines);
    }

    // ── 2. Google Sheets webhook (GET + query params — avoids redirect body loss) ──
    let sheetLogged = false;
    if (sheetUrl) {
      const params = new URLSearchParams({
        name,
        phone,
        city:      city    || "",
        project:   project || "",
        type:      type    || "",
        message:   message || "",
        source:    "Website Form",
        timestamp: new Date().toISOString(),
      });
      try {
        // MUST await: on serverless (Vercel) an un-awaited fetch is dropped when
        // the function returns, so the row never reaches the sheet. Apps Script
        // redirects (302) to script.googleusercontent.com, so follow redirects.
        const sheetRes = await fetch(`${sheetUrl}?${params.toString()}`, {
          method: "GET",
          redirect: "follow",
        });
        sheetLogged = sheetRes.ok;
        if (!sheetRes.ok) {
          console.error("Sheet webhook non-OK:", sheetRes.status, await sheetRes.text().catch(() => ""));
        }
      } catch (err) {
        console.error("Sheet webhook error:", err);
      }
    } else {
      console.warn(
        "GOOGLE_SHEET(S)_WEBHOOK_URL is not set — lead was NOT logged to the Google Sheet. " +
          "Set it in your environment (e.g. Vercel → Settings → Environment Variables)."
      );
    }

    return NextResponse.json({ ok: true, sheetLogged });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
