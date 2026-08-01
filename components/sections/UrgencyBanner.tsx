import { site } from "@/lib/site";
import { ft2 } from "@/lib/ft2";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function UrgencyBanner() {
  return (
    <section className="py-16">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
          <div className="absolute inset-0" style={{ background: "linear-gradient(115deg,#0a1f44,#12305f)" }} />
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-sm font-medium text-gold-light">
              <Icon name="trending" width={15} height={15} /> Prices revised upward in {ft2.priceRevision}
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              Lock in Today&apos;s Rate Before the Next Revision
            </h2>
            <p className="mt-4 text-white/70">
              Faisal Town Phase 2 rates have risen with development progress. Book your plot now on an easy
              installment plan and secure current pricing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-gold-light"
              >
                <Icon name="whatsapp" width={18} height={18} /> Reserve on WhatsApp
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" width={17} height={17} /> {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
