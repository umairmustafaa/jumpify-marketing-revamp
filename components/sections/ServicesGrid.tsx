import { services } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function ServicesGrid() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="End-to-End Real Estate Investment Services"
          subtitle="From your first consultation to after-sales support, we handle every step so you can invest with total peace of mind."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(10,31,68,0.10)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy-900">
                <Icon name={s.icon} width={26} height={26} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
