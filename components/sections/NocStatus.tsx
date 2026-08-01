import { noc } from "@/lib/ft2";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

// Honest NOC/legal-status section. This transparency is a deliberate trust and
// SEO differentiator — competitors dodge exactly what anxious buyers search for.
export function NocStatus() {
  return (
    <section id="noc" className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/60 p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-amber-700">
              <Icon name="shield" width={24} height={24} />
            </span>
            <div>
              <span className="eyebrow">NOC & Legal Status</span>
              <h2 className="mt-1 text-2xl font-semibold text-navy sm:text-3xl">
                NOC Status:{" "}
                <span className="text-amber-700">{noc.status}</span>
              </h2>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-navy/85">{noc.summary}</p>

          <ul className="mt-6 space-y-3.5">
            {noc.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-amber-600" />
                <span className="text-navy/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-start gap-3 rounded-xl border border-amber-200 bg-white/70 p-4">
            <Icon name="quote" width={22} height={22} className="shrink-0 text-gold-dark" />
            <p className="text-sm font-medium italic text-navy/90">{noc.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
