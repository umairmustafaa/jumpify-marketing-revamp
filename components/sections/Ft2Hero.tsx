import Image from "next/image";
import { site } from "@/lib/site";
import { ft2 } from "@/lib/ft2";
import { LeadForm } from "@/components/LeadForm";
import { Icon } from "@/components/Icons";

const trustChips = [
  "M-2 Motorway · Thalian Interchange",
  "~15 min from Islamabad Airport",
  "Full Payment or 36-Month Plan",
];

export function Ft2Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/faisal-town-phase-2.webp"
          alt="Faisal Town Phase 2 Islamabad aerial view"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg,rgba(6,22,49,0.90) 0%,rgba(10,31,68,0.70) 45%,rgba(10,31,68,0.34) 100%)",
          }}
        />
      </div>

      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm font-medium text-gold-light">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              Authorized Sales Partner · Booking Open
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Own a Plot in <span className="text-gold-light">Faisal Town Phase&nbsp;2</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Secure your plot in Islamabad&apos;s fast-developing community on the M-2 Motorway — on full
              payment or an easy 36-month installment plan, with honest guidance and full documentation support.
            </p>

            {/* Price hook */}
            <div className="mt-7 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 backdrop-blur">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/60">
                  {ft2.priceHook.fromSize} starting from
                </div>
                <div className="text-2xl font-bold text-gold-light">{ft2.priceHook.fromPrice}*</div>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div className="text-sm text-white/75">
                {ft2.priceHook.note}
                <br />
                <span className="text-white/50">*Full-payment rate · updated {ft2.lastUpdated}</span>
              </div>
            </div>

            {/* Trust chips */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              {trustChips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <Icon name="check" width={16} height={16} className="text-gold" />
                  {c}
                </span>
              ))}
            </div>

            {/* Direct-contact buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-gold-light"
              >
                <Icon name="phone" width={17} height={17} /> Call {site.phone}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="whatsapp" width={18} height={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Lead form card */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-2xl shadow-black/30">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
