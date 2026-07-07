import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

// Contact form API route — sends enquiries via Resend (https://resend.com).
// Set RESEND_API_KEY in .env.local and CONTACT_TO_EMAIL to the destination inbox.
// If RESEND_API_KEY is absent the handler gracefully skips sending and returns success
// so local development without credentials never throws.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city, project, type, message } = body as Record<string, string>;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;

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
          // Simple HTML version for nicer inbox display.
          html: `<pre style="font-family:sans-serif;line-height:1.6">${lines.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send email. Please try WhatsApp instead." }, { status: 502 });
      }
    } else {
      // No API key — log locally so the developer can see the submission.
      console.info("Contact form submission (no RESEND_API_KEY configured):\n", lines);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
