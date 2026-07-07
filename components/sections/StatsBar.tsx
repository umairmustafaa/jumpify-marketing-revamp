import { stats } from "@/lib/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-12">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 shadow-[0_16px_40px_rgba(10,31,68,0.10)] md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="bg-white px-6 py-8 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-navy">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-sm font-medium text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
