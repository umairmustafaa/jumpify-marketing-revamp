import { site } from "@/lib/site";

// Renders a <script type="application/ld+json"> block. Google reads this for
// rich results (business info, breadcrumbs, articles, FAQs).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: [site.phone, site.phone2],
  email: site.email,
  foundingDate: String(site.foundedYear),
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/icon`,
  priceRange: "$$",
  areaServed: site.cities.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "PK",
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.youtube,
  ],
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
