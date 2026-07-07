import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/aerial-community.png"
          alt="Master-planned residential community"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg,rgba(6,22,49,0.96) 0%,rgba(10,31,68,0.9) 45%,rgba(18,48,95,0.75) 100%)",
          }}
        />
        <div
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-x relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm font-medium text-gold-light">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Trusted since {site.foundedYear} • NOC-Approved Projects
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.08]">
            Invest in Property.
            <br />
            <span className="text-gold-light">Build Lasting Wealth.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {site.name}{" "}helps you secure high-yield, NOC-approved real estate in Faisal Town Phase 2 and
            premier projects across Islamabad, Rawalpindi &amp; Dubai — with complete transparency and expert
            guidance.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-900 hover:bg-gold-light transition-colors"
            >
              Explore Projects <Icon name="arrow" width={18} height={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            {["NOC-Approved Deals", "Overseas-Friendly", "Transparent Pricing", "After-Sales Support"].map(
              (f) => (
                <span key={f} className="inline-flex items-center gap-2">
                  <Icon name="check" width={16} height={16} className="text-gold" />
                  {f}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
