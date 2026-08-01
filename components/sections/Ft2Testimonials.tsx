import { ft2Testimonials } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function Ft2Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Stories"
          title="Investors Who Trusted Us with Faisal Town Phase 2"
          subtitle="Honest guidance, transparent paperwork, and real results."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ft2Testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 110}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_16px_rgba(10,31,68,0.05)]"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="star" width={16} height={16} className="fill-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-navy/85">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-semibold text-gold-light">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
