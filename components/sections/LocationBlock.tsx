import { locationPoints, mapQuery, ft2 } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function LocationBlock() {
  return (
    <section id="location" className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Location & Accessibility"
          title="Prime Location on the M-2 Motorway"
          subtitle="Faisal Town Phase 2 sits at the Thalian Interchange — direct motorway access, minutes from the New Islamabad International Airport."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4">
              {locationPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4">
                  <Icon name="pin" width={18} height={18} className="mt-0.5 shrink-0 text-gold-dark" />
                  <span className="text-navy/85">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
            <div className="relative h-80 w-full sm:h-full">
              <iframe
                title={`${ft2.name} location map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=12&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
