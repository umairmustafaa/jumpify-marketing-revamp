import type { Metadata } from "next";
import { posts, site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Real Estate Investment Insights",
  description:
    "Expert guides, market updates and buyer tips on real estate investment in Pakistan — from Faisal Town Phase 2 to overseas investing. By Jumpify Marketing.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <PageHeader
        title="Insights & Market News"
        subtitle="Everything you need to know before you invest — written by our real estate experts."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
