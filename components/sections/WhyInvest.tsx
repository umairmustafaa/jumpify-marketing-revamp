import { whyInvest } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

const icons = ["shield", "pin", "chart", "trending"];

export function WhyInvest() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 text-white">
      <div
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
      />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Why Invest"
          title="Why Investors Choose Faisal Town Phase 2"
          subtitle="Real drivers of long-term value — presented honestly, not as guaranteed returns."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyInvest.map((w, i) => (
            <Reveal
              key={w.title}
              delay={(i % 2) * 110}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
            >
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-xl bg-gold p-3 text-navy-900">
                <Icon name={icons[i % icons.length]} width={24} height={24} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 leading-relaxed text-white/70">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
