import { ft2 } from "@/lib/ft2";

// Compact at-a-glance strip directly under the hero — reinforces key facts and
// feeds Google structured details buyers scan for first.
export function QuickFacts() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-none md:grid-cols-3 lg:grid-cols-6">
        {ft2.quickFacts.map((f) => (
          <div key={f.label} className="px-4 py-5 text-center">
            <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-gold-dark">{f.label}</div>
            <div className="mt-1 text-sm font-semibold leading-snug text-navy">{f.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
