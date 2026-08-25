import type { Metadata } from "next";
import Link from "next/link";
import { ft2, ft2Faqs, installmentPlan } from "@/lib/ft2";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { PaymentPlan } from "@/components/sections/PaymentPlan";
import { ContactSection } from "@/components/sections/ContactSection";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Faisal Town Phase 2 Payment Plan 2026 — Official Rates & Installments",
  description:
    "The official Faisal Town Phase 2 payment plan 2026: full-payment prices with a 20% discount (Model Block) and the 36-month installment plan with down payments and monthly amounts for 5 Marla to 2 Kanal plots. Updated developer rates — confirm availability on WhatsApp.",
  alternates: { canonical: "/payment-plan" },
  openGraph: {
    title: "Faisal Town Phase 2 Payment Plan 2026 — Official Rates & Installments",
    description:
      "Full-payment prices with a 20% discount and the 36-month installment plan for every plot size. Official developer rates, updated for 2026.",
  },
};

// FAQ subset focused on payment/pricing intent (the queries this page targets).
const paymentFaqQuestions = new Set([
  "What is the payment plan and down payment?",
  "What is the price of a 5 Marla and 10 Marla plot?",
  "Which is the best block to invest in?",
  "What is the difference between a file and a plot?",
  "Can overseas Pakistanis invest safely from abroad?",
]);
const paymentFaqs = ft2Faqs.filter((f) => paymentFaqQuestions.has(f.q));

export default function PaymentPlanPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Faisal Town Phase 2 — Residential Plots (Payment Plan 2026)",
    description:
      "Residential plots (5, 8, 10, 14 Marla, 1 & 2 Kanal) in Faisal Town Phase 2, Islamabad on full-payment or 36-month installment plans.",
    brand: { "@type": "Brand", name: "Faisal Town Phase 2" },
    category: "Real Estate",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: "2790000",
      highPrice: "19295000",
      offerCount: String(installmentPlan.length),
      availability: "https://schema.org/InStock",
      seller: { "@type": "RealEstateAgent", name: site.name },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paymentFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Payment Plan", url: `${site.url}/payment-plan` },
        ])}
      />
      <PageHeader
        title="Faisal Town Phase 2 Payment Plan 2026"
        subtitle={`Official developer rates, updated ${ft2.lastUpdated} — full payment with a 20% discount, or a down payment plus 36 easy monthly installments.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Payment Plan" }]}
      />

      {/* Instant answer + CTA strip — payment-plan searchers want numbers fast */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="text-sm text-navy/90 sm:text-base">
            <strong className="text-navy">5 Marla from {ft2.priceHook.fromPrice}</strong>{" "}
            <span className="text-muted">{ft2.priceHook.note}</span> · installments from{" "}
            <strong className="text-navy">PKR 60,000/month</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                `Hi ${site.name}, please send me the latest Faisal Town Phase 2 payment plan and availability.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-light"
            >
              <Icon name="whatsapp" width={16} height={16} /> Get Plan on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <Icon name="phone" width={15} height={15} /> Call for Rates
            </a>
          </div>
        </div>
      </section>

      {/* The official tables (same crawlable-HTML section used on the homepage) */}
      <PaymentPlan />

      {/* Commercial cross-link */}
      <section className="py-14">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
            <div>
              <h2 className="text-xl font-semibold text-navy">Looking for the commercial payment plan?</h2>
              <p className="mt-1 text-sm text-muted">
                Boulevard, Markaz &amp; Model Block commercial plots — 25% down with 3–4 year quarterly plans.
              </p>
            </div>
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-navy-900"
            >
              Commercial plots &amp; prices <Icon name="arrow" width={15} height={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Payment FAQs */}
      <section className="pb-16 sm:pb-20">
        <div className="container-x max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Payment Plan — FAQs</h2>
            <div className="mt-4 space-y-3">
              {paymentFaqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_16px_rgba(10,31,68,0.04)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                    {f.q}
                    <Icon
                      name="chevron"
                      width={20}
                      height={20}
                      className="shrink-0 text-gold-dark transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-navy/85">
            <strong>NOC status:</strong> Faisal Town Phase 2&apos;s NOC is currently under process — we present the
            verified status honestly before you book.{" "}
            <Link href="/#noc" className="font-semibold text-gold-dark hover:underline">
              Read more →
            </Link>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
