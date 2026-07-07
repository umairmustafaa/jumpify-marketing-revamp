import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-x">
        <Reveal
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16"
          as="div"
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(115deg,#0a1f44,#12305f)" }} />
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-sm font-medium text-gold-light">
              <Icon name="star" width={15} height={15} className="fill-gold-light" /> Limited-Time Booking
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold leading-tight">
              Book Your Plot in Faisal Town Phase 2 Today
            </h2>
            <p className="mt-4 text-white/70">
              Prices are rising as development accelerates. Secure your file now on an easy installment plan and
              lock in today&apos;s rate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-900 hover:bg-gold-light transition-colors"
              >
                Reserve Your Plot <Icon name="arrow" width={18} height={18} />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
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
