import { amenities } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function Amenities() {
  return (
    <section id="amenities" className="py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Amenities & Lifestyle"
          title="A Master-Planned Community"
          subtitle="Designed by the Meinhardt Group with the facilities of a modern, self-sufficient city."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 90}
              className="group rounded-2xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,31,68,0.10)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy-900">
                <Icon name={a.icon} width={26} height={26} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
