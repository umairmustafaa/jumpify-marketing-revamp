import type { Metadata } from "next";
import Link from "next/link";
import { site, stats } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { VisionMission } from "@/components/sections/VisionMission";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us — Trusted Real Estate Consultancy",
  description: `Learn about ${site.name}, a real estate investment consultancy operating since ${site.foundedYear}, specialising in secure, NOC-approved property investments across Islamabad, Rawalpindi and Dubai.`,
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "shield", title: "Integrity First", text: "We only market verified, NOC-approved projects and give honest advice — even when it means saying no to a deal." },
  { icon: "chart", title: "Investor-Focused", text: "Every recommendation is built around your budget, timeline and target returns, not our commission." },
  { icon: "headset", title: "Lifelong Support", text: "Our relationship doesn't end at booking. We support transfers, resale and paperwork for years." },
  { icon: "globe", title: "Globally Accessible", text: "Overseas Pakistanis invest with us confidently through a fully digital, transparent process." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Jumpify Marketing"
        subtitle={`Helping investors build lasting wealth through smart, secure property decisions since ${site.foundedYear}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight text-navy">
              A Legacy of Trust in Pakistan&apos;s Property Market
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>
                Founded in {site.foundedYear}, {site.name} began with a simple belief: real estate investment
                should be safe, transparent and genuinely rewarding for the client. Too many investors had been
                burned by unverified societies and hidden charges — we set out to change that.
              </p>
              <p>
                Today we are proud to have guided over 5,000 investors and marketed more than 100,000 kanal of
                premium land across the twin cities and Dubai. Our specialisation in Faisal Town Phase 2 and the
                wider Zedem International portfolio gives our clients access to some of the most sought-after,
                high-growth opportunities in the country.
              </p>
              <p>
                Whether you are a first-time buyer or a seasoned overseas investor, our team treats your
                investment with the same care we would our own.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-black/5 bg-cream p-7 text-center">
                <div className="text-3xl font-bold text-navy">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-sm font-medium text-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <VisionMission />

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Every Deal"
            subtitle="These four commitments shape how we work with every investor, every day."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 4) * 90}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_16px_rgba(10,31,68,0.05)]"
              >
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-gold/15 p-3 text-gold-dark">
                  <Icon name={v.icon} width={24} height={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Developer trust */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-black/5 bg-white p-10 text-center shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
            <span className="grid mx-auto h-14 w-14 place-items-center rounded-full bg-navy text-gold-light">
              <Icon name="building" width={26} height={26} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-navy">Backed by Proven Developers</h3>
            <p className="mt-3 leading-relaxed text-muted">
              We partner with <strong className="text-navy">Zedem International</strong> and{" "}
              <strong className="text-navy">Ch. Abdul Majeed</strong> — names behind some of the most
              successful, fully-delivered communities in the region. Their credibility is your security.
            </p>
            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
            >
              See Their Projects <Icon name="arrow" width={16} height={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
