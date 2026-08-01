import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blockPages, blocks, residentialPlan, highVolumeBlockSlugs } from "@/lib/ft2";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export function generateStaticParams() {
  return highVolumeBlockSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = blockPages[slug];
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/blocks/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.heroImage, alt: `${blocks.find((b) => b.slug === slug)?.name}` }],
    },
  };
}

export default async function BlockDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = blockPages[slug];
  const block = blocks.find((b) => b.slug === slug);
  if (!page || !block) notFound();

  const related = blocks.filter((b) => b.highlight && b.slug !== slug).slice(0, 2);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
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
          { name: "Blocks & Sectors", url: `${site.url}/blocks` },
          { name: block.name, url: `${site.url}/blocks/${slug}` },
        ])}
      />
      <PageHeader
        title={block.name}
        subtitle={page.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blocks & Sectors", href: "/blocks" },
          { label: block.name },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
              <Image
                src={page.heroImage}
                alt={`${block.name} — Faisal Town Phase 2`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </Reveal>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold/15 px-3.5 py-1.5 text-sm font-semibold text-gold-dark">
                {block.tag}
              </span>
              <span className="rounded-full bg-navy/5 px-3.5 py-1.5 text-sm font-medium text-navy">
                {block.type}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Icon name="chart" width={15} height={15} /> {block.plotSizes}
              </span>
            </div>

            {/* Overview */}
            <Reveal className="mt-8">
              <h2 className="text-2xl font-semibold text-navy">Overview</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-muted">
                {page.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Payment plan */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">{block.name} Payment Plan</h2>
              <p className="mt-2 leading-relaxed text-muted">{page.planStructure}</p>
              {page.usesStandardGrid && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="px-5 py-3.5 font-semibold">Plot Size</th>
                        <th className="px-5 py-3.5 font-semibold">Total Price*</th>
                        <th className="px-5 py-3.5 font-semibold">Down Payment</th>
                        <th className="px-5 py-3.5 font-semibold">Quarterly ×16</th>
                      </tr>
                    </thead>
                    <tbody>
                      {residentialPlan.map((row, i) => (
                        <tr key={row.size} className={i % 2 ? "bg-cream/50" : "bg-white"}>
                          <td className="px-5 py-3.5 font-semibold text-navy">{row.size}</td>
                          <td className="px-5 py-3.5 text-gold-dark">{row.total}</td>
                          <td className="px-5 py-3.5 text-muted">{row.down}</td>
                          <td className="px-5 py-3.5 text-muted">{row.quarterly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <p className="mt-3 text-xs text-muted">
                *Indicative society-wide residential rates for reference. {page.extraPlanNote}{" "}
                Confirm the current block-specific rate list before booking.
              </p>
            </Reveal>

            {/* Location */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Location &amp; Accessibility</h2>
              <ul className="mt-4 space-y-3">
                {page.locationPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="pin" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-navy/90">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Why invest */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Why Invest in {block.name}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {page.whyInvest.map((w) => (
                  <div key={w} className="flex items-start gap-3 rounded-xl border border-black/5 bg-cream p-4">
                    <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-sm text-navy/90">{w}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Features */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Features</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {block.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-navy"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {f}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">{block.name} — FAQs</h2>
              <div className="mt-4 space-y-3">
                {page.faqs.map((f) => (
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
              <h3 className="text-lg font-semibold text-navy">Enquire About {block.name}</h3>
              <p className="mt-1.5 text-sm text-muted">
                Get the latest {block.name} availability, rates and booking plan — free of charge.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>

            {/* Related blocks */}
            <div className="mt-6 rounded-2xl border border-black/5 bg-cream p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Other Popular Blocks</h3>
              <div className="mt-4 space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blocks/${r.slug}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 transition-colors hover:border-gold/40"
                  >
                    <div>
                      <div className="font-semibold text-navy">{r.name}</div>
                      <div className="text-xs text-muted">{r.tag}</div>
                    </div>
                    <Icon name="arrow" width={16} height={16} className="text-gold-dark" />
                  </Link>
                ))}
                <Link
                  href="/blocks"
                  className="block rounded-xl border border-navy/15 p-3 text-center text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  View all 14 blocks
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
