import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Payment Plan, Location & Booking`,
    description: `${project.name} in ${project.location}. ${project.blurb} Get the latest payment plan, availability and booking details from Jumpify Marketing.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${site.name}`,
      description: project.blurb,
      images: [{ url: project.heroImage, alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Projects", url: `${site.url}/projects` },
          { name: project.name, url: `${site.url}/projects/${project.slug}` },
        ])}
      />
      <JsonLd data={faqSchema} />
      <PageHeader
        title={project.name}
        subtitle={project.location}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <Reveal className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
              <Image
                src={project.heroImage}
                alt={`${project.name} — ${project.location}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </Reveal>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold/15 px-3.5 py-1.5 text-sm font-semibold text-gold-dark">
                {project.tag}
              </span>
              <span className="rounded-full bg-navy/5 px-3.5 py-1.5 text-sm font-medium text-navy">
                {project.status}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Icon name="building" width={15} height={15} /> {project.developer}
              </span>
            </div>

            <Reveal className="mt-8">
              <h2 className="text-2xl font-semibold text-navy">Project Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.overview}</p>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Project Gallery</h2>
              <p className="mt-2 text-sm text-muted">A look at the community, landmarks and lifestyle.</p>
              <div className="mt-4">
                <ProjectGallery images={project.gallery} name={project.name} />
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Key Highlights</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-xl border border-black/5 bg-cream p-4">
                    <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-sm text-navy/90">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Location & accessibility */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Location &amp; Accessibility</h2>
              <ul className="mt-4 space-y-3">
                {project.locationPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="pin" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span className="text-navy/90">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 overflow-hidden rounded-2xl border border-black/5">
                <div className="relative h-72 w-full bg-cream">
                  <iframe
                    title={`${project.name} location map`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&z=13&output=embed`}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-t border-black/5 bg-white px-4 py-3 text-sm font-semibold text-navy hover:text-gold-dark"
                >
                  <Icon name="pin" width={16} height={16} className="text-gold-dark" /> Open {project.name} in Google
                  Maps
                </a>
              </div>
            </Reveal>

            {/* Payment plan */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Payment Plan</h2>
              <p className="mt-2 text-sm text-muted">
                Indicative pricing on an easy installment plan. Contact us for the latest confirmed rates.
              </p>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Plot Size</th>
                      <th className="px-5 py-3.5 font-semibold">Total Price</th>
                      <th className="px-5 py-3.5 font-semibold">Down Payment</th>
                      <th className="px-5 py-3.5 font-semibold">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.paymentPlan.map((row, i) => (
                      <tr key={row.plot} className={i % 2 ? "bg-cream/60" : "bg-white"}>
                        <td className="px-5 py-3.5 font-semibold text-navy">{row.plot}</td>
                        <td className="px-5 py-3.5 text-muted">{row.total}</td>
                        <td className="px-5 py-3.5 text-muted">{row.down}</td>
                        <td className="px-5 py-3.5 text-muted">{row.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Amenities */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Amenities &amp; Facilities</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.amenities.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-navy"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {a}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Why invest */}
            <Reveal className="mt-10 rounded-2xl bg-navy p-8 text-white">
              <h2 className="text-2xl font-semibold">Why Invest in {project.name}?</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.whyInvest.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-gold-light" />
                    <span className="text-white/85">{w}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal className="mt-10">
              <h2 className="text-2xl font-semibold text-navy">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-3">
                {project.faqs.map((f) => (
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
          </div>

          {/* Sticky enquiry sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(10,31,68,0.08)]">
              <h3 className="text-lg font-semibold text-navy">Enquire About {project.name}</h3>
              <p className="mt-1.5 text-sm text-muted">
                Get the latest availability, pricing and a booking plan — free of charge.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Other projects */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy">Explore Other Projects</h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
          >
            View All Projects <Icon name="arrow" width={16} height={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
