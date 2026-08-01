import { ft2Faqs } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function Ft2Faq() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-24">
      <div className="container-x max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Faisal Town Phase 2 — Your Questions Answered"
          subtitle="Honest answers to what buyers ask most — from NOC status to payment plans and possession."
        />

        <div className="mt-12 space-y-4">
          {ft2Faqs.map((f, i) => (
            <Reveal
              key={f.q}
              delay={(i % 4) * 60}
              as="details"
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_16px_rgba(10,31,68,0.04)] open:shadow-[0_8px_28px_rgba(10,31,68,0.08)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                {f.q}
                <Icon
                  name="chevron"
                  width={20}
                  height={20}
                  className="shrink-0 text-gold-dark transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
