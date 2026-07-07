import Link from "next/link";
import { posts } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function BlogPreview() {
  const latest = posts.slice(0, 3);
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Insights & News"
            title="Learn Before You Invest"
            subtitle="Expert guides, market updates and buyer tips from the Jumpify Marketing team."
          />
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Read the Blog <Icon name="arrow" width={16} height={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
