import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const sections = [
    {
      h: "Information We Collect",
      p: "When you submit an enquiry form or contact us, we may collect your name, phone number, email address, city and any details you choose to share about your investment interests.",
    },
    {
      h: "How We Use Your Information",
      p: "We use your information solely to respond to your enquiries, provide investment guidance, share project details and improve our services. We do not sell or rent your personal data to third parties.",
    },
    {
      h: "Communication",
      p: "By contacting us you consent to being reached by phone, WhatsApp or email regarding your enquiry. You may opt out of communications at any time by letting us know.",
    },
    {
      h: "Data Security",
      p: "We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    },
    {
      h: "Third-Party Links",
      p: "Our website may link to external sites (such as social media). We are not responsible for the privacy practices or content of those websites.",
    },
    {
      h: "Contact",
      p: `If you have any questions about this Privacy Policy, please contact us at ${site.email} or ${site.phone}.`,
    },
  ];

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: July 2026"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x max-w-3xl space-y-8">
          <p className="leading-relaxed text-muted">
            At {site.name}, your privacy matters to us. This policy explains what information we collect and how
            we use and protect it.
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold text-navy">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
