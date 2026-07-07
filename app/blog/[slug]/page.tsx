import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { Icon } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ])}
      />
      <PageHeader
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="rounded-full bg-gold/15 px-3 py-1 font-semibold text-gold-dark">{post.category}</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" width={14} height={14} /> {post.readingTime}
            </span>
            <span>{formatDate(post.date)}</span>
          </div>

          <div className="prose-content mt-8 space-y-5 text-[1.05rem] leading-relaxed text-navy/85">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 rounded-2xl border border-black/5 bg-cream p-8 text-center">
            <h3 className="text-xl font-semibold text-navy">Ready to make your move?</h3>
            <p className="mt-2 text-muted">
              Speak with a Jumpify advisor for free, personalised investment guidance.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
            >
              Book Free Consultation <Icon name="arrow" width={16} height={16} />
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-cream py-20">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy">Related Articles</h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
