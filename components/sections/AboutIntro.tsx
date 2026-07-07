import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

const points = [
  "Exclusively NOC-approved & NOC-processing projects",
  "Backed by developer Zedem International (Ch. Abdul Majeed)",
  "Dedicated relationship manager for every investor",
  "Fully digital process for overseas Pakistanis",
];

export function AboutIntro() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-1">
            <div
              className="rounded-[1.35rem] p-10 text-white"
              style={{ background: "linear-gradient(135deg,#0a1f44,#12305f)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
                Since {site.foundedYear}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug">
                “We treat every client&apos;s investment as if it were our own — with honesty, care and
                complete transparency.”
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gold-light">100k+</div>
                  <div className="text-sm text-white/60">Kanal Marketed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-light">5,000+</div>
                  <div className="text-sm text-white/60">Happy Investors</div>
                </div>
              </div>
            </div>
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold-dark">
                <Icon name="shield" width={22} height={22} />
              </span>
              <div>
                <div className="text-sm font-semibold text-navy">100% Secure</div>
                <div className="text-xs text-muted">Verified Documentation</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight text-navy">
            A Trusted Name in Pakistan&apos;s Real Estate Investment
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
            {site.name} is a real estate investment consultancy specialising in secure, high-yield property
            opportunities across Pakistan and Dubai. Since {site.foundedYear}, we have guided thousands of
            investors into the right plots at the right time — always with verified, NOC-approved
            documentation and honest, jargon-free advice.
          </p>

          <ul className="mt-7 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon name="check" width={14} height={14} />
                </span>
                <span className="text-navy/90">{p}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
          >
            More About Us <Icon name="arrow" width={16} height={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
