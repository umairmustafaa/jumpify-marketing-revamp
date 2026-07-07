import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description: `Get in touch with ${site.name}. Call ${site.phone}, email ${site.email}, or visit our office in Rawalpindi. Free, no-obligation investment consultation.`,
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "Is Faisal Town Phase 2 NOC approved?",
    a: "Faisal Town Phase 2 is being developed under the relevant authority's framework with NOC processing in progress. We only market verified projects and share the latest documentation status with every client before booking.",
  },
  {
    q: "Can overseas Pakistanis invest through Jumpify Marketing?",
    a: "Absolutely. We run a dedicated overseas desk with a fully digital process — video walkthroughs, live availability, secure e-payments and remotely-executed transfer documentation. You can invest safely from Dubai or anywhere in the world.",
  },
  {
    q: "Do you charge a consultation fee?",
    a: "No. Consultations, area guidance and investment planning are completely free and come with no obligation to buy.",
  },
  {
    q: "What plot sizes are available?",
    a: "Depending on the project, we offer 5, 7 and 10 Marla as well as 1 and 2 Kanal residential plots, plus commercial options — on flexible installment plans.",
  },
];

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHeader
        title="Contact Jumpify Marketing"
        subtitle="We'd love to help you make a confident, well-informed investment. Reach out any time."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <ContactSection />

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to the questions investors ask us most."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 70}
                as="details"
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_16px_rgba(10,31,68,0.04)] open:shadow-[0_8px_28px_rgba(10,31,68,0.08)]"
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
