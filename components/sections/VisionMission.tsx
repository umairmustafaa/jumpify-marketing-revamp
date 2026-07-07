import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

const cards = [
  {
    icon: "trending",
    title: "Our Vision",
    text: "To become Pakistan's most trusted real estate investment partner — known for integrity, transparency and consistently helping clients grow their wealth through smart property decisions.",
  },
  {
    icon: "shield",
    title: "Our Mission",
    text: "To make property investment safe, simple and rewarding for everyone — from first-time buyers to overseas investors — by offering only verified, NOC-approved opportunities and honest, expert guidance.",
  },
];

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 text-white">
      <div
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 120}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-navy-900">
                <Icon name={c.icon} width={26} height={26} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
