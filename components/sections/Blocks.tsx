import Link from "next/link";
import { featuredBlocks, blocks } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function Blocks() {
  return (
    <section id="blocks" className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Blocks & Sectors"
          title="Choose the Right Block for Your Goal"
          subtitle="From fast-possession Sector O to the overseas-focused Enclave and the CBD-boulevard N Block — each block suits a different investor."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredBlocks.map((b, i) => (
            <Reveal
              key={b.slug}
              delay={(i % 3) * 100}
              className="group flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_16px_rgba(10,31,68,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(10,31,68,0.10)]"
            >
              <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark">
                {b.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-navy">{b.name}</h3>
              <p className="mt-2.5 flex-1 leading-relaxed text-muted">{b.blurb}</p>
              <dl className="mt-5 space-y-2 border-t border-black/5 pt-4 text-sm">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-navy">Sizes:</dt>
                  <dd className="text-muted">{b.plotSizes}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-navy">Plan:</dt>
                  <dd className="text-muted">{b.payment}</dd>
                </div>
              </dl>
              <Link
                href={`/blocks/${b.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-dark"
              >
                View {b.name} details <Icon name="arrow" width={15} height={15} />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/blocks"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-600"
          >
            View All {blocks.length} Blocks & Sectors <Icon name="arrow" width={16} height={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
