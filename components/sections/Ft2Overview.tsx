import Image from "next/image";
import { ft2 } from "@/lib/ft2";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

const cred = [
  { label: "Developer", value: ft2.developer },
  { label: "Owner", value: ft2.owner },
  { label: "Master Plan", value: ft2.masterPlanner },
];

export function Ft2Overview() {
  return (
    <section id="overview" className="py-20 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative h-80 overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="/images/gallery/aerial-community.png"
              alt="Faisal Town Phase 2 master-planned community aerial view"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold-dark">
                <Icon name="building" width={22} height={22} />
              </span>
              <div>
                <div className="text-sm font-semibold text-navy">Proven Developer</div>
                <div className="text-xs text-muted">Faisal Town P1 · Faisal Hills</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="eyebrow">Project Overview</span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            What Is Faisal Town Phase 2?
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted">
            <p>
              <strong className="text-navy">Faisal Town Phase 2</strong> is a large master-planned residential
              and commercial community in Islamabad, developed by {ft2.developer} and owned by {ft2.owner},
              with the master plan prepared by the internationally-renowned {ft2.masterPlanner}. It is the newest
              addition to the Faisal Town family — the same group behind Faisal Town Phase 1 (F-18) and Faisal
              Hills.
            </p>
            <p>
              Located at the <strong className="text-navy">Thalian Interchange on the M-2 Motorway</strong> and
              connected to the Rawalpindi Ring Road, the society is roughly a 10–15 minute drive from the New
              Islamabad International Airport. It offers residential plots of 5, 8, 10 and 14 Marla plus 1 and 2
              Kanal, along with commercial plots — on full payment or an easy 36-month installment plan.
            </p>
            <p>
              As an authorised sales partner, {"Jumpify Marketing"} helps you choose the right block — Sector O
              (Model Block), the Overseas Enclave or the newly-launched N Block — book at the correct rate, and
              complete your documentation with full transparency, including an honest picture of the project&apos;s
              approval status.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-4">
            {cred.map((c) => (
              <div key={c.label} className="rounded-xl border border-black/5 bg-cream p-4">
                <div className="text-[0.7rem] font-semibold uppercase tracking-wide text-gold-dark">{c.label}</div>
                <div className="mt-1 text-sm font-semibold leading-snug text-navy">{c.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
