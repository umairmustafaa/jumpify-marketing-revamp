import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ft2, ft2Faqs, residentialPlan } from "@/lib/ft2";
import { JsonLd } from "@/components/JsonLd";
import { Ft2Hero } from "@/components/sections/Ft2Hero";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { Ft2Overview } from "@/components/sections/Ft2Overview";
import { PaymentPlan } from "@/components/sections/PaymentPlan";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { Blocks } from "@/components/sections/Blocks";
import { Amenities } from "@/components/sections/Amenities";
import { NocStatus } from "@/components/sections/NocStatus";
import { WhyInvest } from "@/components/sections/WhyInvest";
import { Ft2Gallery } from "@/components/sections/Ft2Gallery";
import { Ft2Testimonials } from "@/components/sections/Ft2Testimonials";
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Ft2Faq } from "@/components/sections/Ft2Faq";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Faisal Town Phase 2 — Payment Plan, Location, Prices & Booking 2026",
  description:
    "Faisal Town Phase 2 Islamabad — updated 2026 payment plan, plot prices, location map, NOC status & booking. 5 Marla from PKR 39.75 Lac on easy installments. Authorised sales partner — call for the latest rates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Faisal Town Phase 2 — Payment Plan, Location & Booking 2026",
    description:
      "Updated 2026 payment plan, prices, location & NOC status for Faisal Town Phase 2 Islamabad. Book on easy installments with honest guidance.",
  },
};

export default function HomePage() {
  // Product/Offer schema — makes plot prices eligible for rich results.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Faisal Town Phase 2 — Residential Plots",
    description:
      "Residential plots (5, 8, 10, 14 Marla, 1 & 2 Kanal) in Faisal Town Phase 2, Islamabad on an easy 4-year installment plan.",
    brand: { "@type": "Brand", name: "Faisal Town Phase 2" },
    category: "Real Estate",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: "3975000",
      highPrice: "12330000",
      offerCount: String(residentialPlan.length),
      availability: "https://schema.org/InStock",
      seller: { "@type": "RealEstateAgent", name: site.name },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ft2Faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: ft2.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    description: ft2.subheadline,
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={placeSchema} />

      <Ft2Hero />
      <QuickFacts />
      <Ft2Overview />
      <PaymentPlan />
      <LocationBlock />
      <Blocks />
      <Amenities />
      <NocStatus />
      <WhyInvest />
      <Ft2Gallery />
      <Ft2Testimonials />
      <UrgencyBanner />
      <BlogPreview />
      <Ft2Faq />
      <ContactSection />
    </>
  );
}
