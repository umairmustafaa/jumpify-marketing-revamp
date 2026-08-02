import { modelBlockPlan, installmentPlan, paymentNotes, ft2 } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

// Crawlable HTML payment tables (competitors use un-indexable JPEGs — this is a
// core SEO differentiator). Two official plans: Model Block (full payment) and
// the Overseas Enclave / installment plan.
export function PaymentPlan() {
  return (
    <section id="payment-plan" className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Payment Plan 2026"
          title="Faisal Town Phase 2 Payment Plan"
          subtitle="Official developer rates. Choose full payment (with a 20% discount) or the Overseas Enclave 36-month installment plan."
        />

        {/* Model Block — full payment */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold text-navy">Model Block — Sector O, Q &amp; R</h3>
            <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
              Full Payment · 20% Discount
            </span>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Plot Size</th>
                  <th className="px-5 py-4 font-semibold">Dimensions</th>
                  <th className="px-5 py-4 font-semibold">Actual Price</th>
                  <th className="px-5 py-4 font-semibold">After 20% Discount</th>
                </tr>
              </thead>
              <tbody>
                {modelBlockPlan.map((row, i) => (
                  <tr key={row.size} className={i % 2 ? "bg-cream/50" : "bg-white"}>
                    <td className="px-5 py-4 font-semibold text-navy">{row.size}</td>
                    <td className="px-5 py-4 text-muted">{row.dim}</td>
                    <td className="px-5 py-4 text-muted">{row.actualPrice}</td>
                    <td className="px-5 py-4 font-semibold text-gold-dark">{row.cashPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Overseas / installment plan */}
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-navy">Overseas Enclave — Installment Plan</h3>
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                Down + 36 Monthly
              </span>
            </div>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Plot Size</th>
                    <th className="px-4 py-4 font-semibold">Cost of Plot</th>
                    <th className="px-4 py-4 font-semibold">Down Payment</th>
                    <th className="px-4 py-4 font-semibold">36 Monthly</th>
                    <th className="px-4 py-4 font-semibold">Lump-sum</th>
                  </tr>
                </thead>
                <tbody>
                  {installmentPlan.map((row, i) => (
                    <tr key={row.size} className={i % 2 ? "bg-cream/50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-navy">{row.size}</td>
                      <td className="px-4 py-4 text-muted">{row.cost}</td>
                      <td className="px-4 py-4 text-muted">{row.down}</td>
                      <td className="px-4 py-4 font-semibold text-gold-dark">{row.monthly}</td>
                      <td className="px-4 py-4 text-muted">{row.cashPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 space-y-1.5">
              {paymentNotes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-xs text-muted">
                  <Icon name="check" width={13} height={13} className="mt-0.5 shrink-0 text-gold-dark" />
                  {n}
                </li>
              ))}
              <li className="flex items-start gap-2 text-xs text-muted">
                <Icon name="clock" width={13} height={13} className="mt-0.5 shrink-0 text-gold-dark" />
                Updated {ft2.lastUpdated}.
              </li>
            </ul>
          </Reveal>

          {/* Lead magnet */}
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(10,31,68,0.08)]">
            <LeadForm
              heading="Get the Full Payment Plan"
              sub="Receive the complete block-wise plan (Model Block, Overseas Enclave & commercial) on WhatsApp."
              cta="Send Me the Full Plan"
              compact
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
