import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  commercialContent,
  sectorOCommercialPlan,
  generalCommercialPlan,
  commercialNotes,
  blocks,
  type CommercialRow,
} from "@/lib/ft2";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: commercialContent.metaTitle,
  description: commercialContent.metaDescription,
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: commercialContent.metaTitle,
    description: commercialContent.metaDescription,
    images: [{ url: commercialContent.heroImage, alt: "Faisal Town Phase 2 commercial plots" }],
  },
};

function PlanTable({ title, badge, rows }: { title: string; badge: string; rows: CommercialRow[] }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">{badge}</span>
      </div>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Category</th>
              <th className="px-5 py-4 font-semibold">Size</th>
              <th className="px-5 py-4 font-semibold">Indicative Price</th>
              <th className="px-5 py-4 font-semibold">Payment Plan</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.category} className={i % 2 ? "bg-cream/50" : "bg-white"}>
                <td className="px-5 py-4 font-semibold text-navy">{row.category}</td>
                <td className="px-5 py-4 text-muted">{row.size}</td>
                <td className="px-5 py-4 font-semibold text-gold-dark">{row.price}</td>
                <td className="px-5 py-4 text-muted">{row.planNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CommercialPage() {
  const commercialBlocks = blocks.filter((b) => b.type === "Commercial");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commercialContent.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Commercial Plots", url: `${site.url}/commercial` },
        ])}
      />
      <PageHeader
        title="Faisal Town Phase 2 Commercial Plots"
        subtitle={commercialContent.tagline}
        crumbs={[{ label: "Home", href: "/" }, { label: "Commercial Plots" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
              <Image
                src={commercialContent.heroImage}
                alt="Faisal Town Phase 2 commercial boulevard — aerial view"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </Reveal>

            {/* Overview */}
            <Reveal className="mt-8">
              <h2 className="text-2xl font-semibold text-navy">Overview</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-muted">
                {commercialContent.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Payment plans */}
            <Reveal className="mt-10 space-y-10">
              <h2 className="text-2xl font-semibold text-navy">Commercial Payment Plan 2026</h2>
              <PlanTable
                title="Model Block (Sector O) — Boulevard Commercial"
                badge="25% Down · 12 Quarterly"
                rows={sectorOCommercialPlan}
              />
              <PlanTable
                title="Society-Wide Commercial Catalogue"
                badge="25% Down · 16 Quarterly"
                rows={generalCommercialPlan}
              />
              <ul className="space-y-1.5">
                {commercialNotes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-xs text-muted">
                    <Icon name="check" width={13} height={13} className="mt-0.5 shrink-0 text-gold-dark" />
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Location */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Location &amp; Catchment</h2>
              <ul className="mt-4 space-y-3">
                {commercialContent.locationPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="pin" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-navy/90">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Why invest */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Why Invest in FT2 Commercial</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {commercialContent.whyInvest.map((w) => (
                  <div key={w} className="flex items-start gap-3 rounded-xl border border-black/5 bg-cream p-4">
                    <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-sm text-navy/90">{w}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Commercial block cards */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Commercial Zones at a Glance</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {commercialBlocks.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blocks#${b.slug}`}
                    className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_16px_rgba(10,31,68,0.04)] transition-colors hover:border-gold/40"
                  >
                    <div className="font-semibold text-navy">{b.name}</div>
                    <div className="mt-1 text-xs font-semibold text-gold-dark">{b.tag}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{b.plotSizes}</p>
                    <p className="mt-2 text-xs text-muted">{b.payment}</p>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Commercial Plots — FAQs</h2>
              <div className="mt-4 space-y-3">
                {commercialContent.faqs.map((f) => (
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

            {/* NOC note */}
            <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-navy/85">
              <strong>NOC status:</strong> Faisal Town Phase 2&apos;s NOC is currently under process. We present
              the verified society-wide status honestly.{" "}
              <Link href="/#noc" className="font-semibold text-gold-dark hover:underline">
                Read more →
              </Link>
            </p>
          </div>

          {/* Sticky enquiry */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(10,31,68,0.08)]">
              <h3 className="text-lg font-semibold text-navy">Enquire About Commercial Plots</h3>
              <p className="mt-1.5 text-sm text-muted">
                Get the current commercial rate sheet, live availability and position options — free of charge.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-cream p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Also Popular</h3>
              <div className="mt-4 space-y-3">
                <Link
                  href="/payment-plan"
                  className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 transition-colors hover:border-gold/40"
                >
                  <div>
                    <div className="font-semibold text-navy">Residential Payment Plan</div>
                    <div className="text-xs text-muted">Full payment &amp; 36-month installments</div>
                  </div>
                  <Icon name="arrow" width={16} height={16} className="text-gold-dark" />
                </Link>
                <Link
                  href="/blocks/sector-o-model-block"
                  className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 transition-colors hover:border-gold/40"
                >
                  <div>
                    <div className="font-semibold text-navy">Sector O — Model Block</div>
                    <div className="text-xs text-muted">Flagship · faster possession</div>
                  </div>
                  <Icon name="arrow" width={16} height={16} className="text-gold-dark" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
