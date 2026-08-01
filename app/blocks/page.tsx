import type { Metadata } from "next";
import Link from "next/link";
import { blocks, highVolumeBlockSlugs } from "@/lib/ft2";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Faisal Town Phase 2 Blocks & Sectors — Full Guide (2026)",
  description:
    "A complete guide to every block and sector in Faisal Town Phase 2 — Sector O Model Block, Overseas Enclave, N Block, Sector T, P, X, I, J, Q, R, Education City, Sports City & commercial plots. Sizes, payment plans, location & features.",
  alternates: { canonical: "/blocks" },
};

const typeStyle: Record<string, string> = {
  Residential: "bg-blue-50 text-blue-600 border-blue-100",
  Commercial: "bg-amber-50 text-amber-700 border-amber-100",
  "Mixed-Use": "bg-violet-50 text-violet-600 border-violet-100",
  "Specialty District": "bg-emerald-50 text-emerald-600 border-emerald-100",
};

export default function BlocksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blocks & Sectors", url: `${site.url}/blocks` },
        ])}
      />
      <PageHeader
        title="Faisal Town Phase 2 Blocks & Sectors"
        subtitle="A complete, honest guide to every block, sector and district — plot sizes, payment plans, location and features."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blocks & Sectors" }]}
      />

      {/* Jump nav */}
      <section className="border-b border-black/5 bg-cream">
        <div className="container-x flex flex-wrap gap-2 py-5">
          {blocks.map((b) => (
            <a
              key={b.slug}
              href={`#${b.slug}`}
              className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold-dark"
            >
              {b.name}
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x space-y-8">
          {blocks.map((b) => (
            <Reveal
              key={b.slug}
              id={b.slug}
              className="scroll-mt-24 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_16px_rgba(10,31,68,0.05)] sm:p-9"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold text-navy">{b.name}</h2>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${typeStyle[b.type]}`}>
                  {b.type}
                </span>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">
                  {b.tag}
                </span>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{b.blurb}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Detail icon="chart" label="Plot Sizes" value={b.plotSizes} />
                <Detail icon="clock" label="Payment Plan" value={b.payment} />
                <Detail icon="pin" label="Location" value={b.location} />
                <Detail icon="star" label="Best For" value={b.bestFor} />
              </div>

              {b.priceNote && (
                <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-navy/85">
                  <Icon name="trending" width={16} height={16} className="mt-0.5 shrink-0 text-amber-600" />
                  {b.priceNote} <span className="text-muted">Confirm current rates before booking.</span>
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {b.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    <Icon name="check" width={13} height={13} className="text-gold-dark" /> {f}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-black/5 pt-5">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hi ${site.name}, I'm interested in ${b.name} in Faisal Town Phase 2. Please share the latest availability & rates.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-light"
                >
                  <Icon name="whatsapp" width={16} height={16} /> Enquire about {b.name}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <Icon name="phone" width={15} height={15} /> Call for rates
                </a>
                {highVolumeBlockSlugs.includes(b.slug) && (
                  <Link
                    href={`/blocks/${b.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-navy-900"
                  >
                    Full {b.name} guide <Icon name="arrow" width={15} height={15} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Honest NOC note */}
        <div className="container-x mt-10">
          <p className="mx-auto max-w-3xl rounded-xl border border-amber-200 bg-amber-50/60 p-5 text-center text-sm text-navy/85">
            <strong>Please note:</strong> Faisal Town Phase 2&apos;s NOC is currently <strong>under process</strong>
            {" "}(not yet fully approved). Some individual block listings elsewhere claim approval — we present the
            verified society-wide status. Always verify with the relevant authority before booking.{" "}
            <Link href="/#noc" className="font-semibold text-gold-dark hover:underline">
              Read the full NOC status →
            </Link>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function Detail({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cream text-gold-dark">
        <Icon name={icon} width={17} height={17} />
      </span>
      <div>
        <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-gold-dark">{label}</div>
        <div className="mt-0.5 text-sm leading-snug text-navy/90">{value}</div>
      </div>
    </div>
  );
}
