import { residentialPlan, ft2 } from "@/lib/ft2";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

// Crawlable HTML payment table (competitors use un-indexable JPEGs — this is a
// core SEO differentiator) + inline lead capture for the full plan.
export function PaymentPlan() {
  return (
    <section id="payment-plan" className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Payment Plan 2026"
          title="Faisal Town Phase 2 Payment Plan"
          subtitle="Easy 4-year plan with ~20% down payment and 16 quarterly installments. A ~20% discount applies on lump-sum payments."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Table */}
          <Reveal className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Plot Size</th>
                    <th className="px-5 py-4 font-semibold">Dimensions</th>
                    <th className="px-5 py-4 font-semibold">Total Price*</th>
                    <th className="px-5 py-4 font-semibold">Down Payment</th>
                    <th className="px-5 py-4 font-semibold">Quarterly ×16</th>
                  </tr>
                </thead>
                <tbody>
                  {residentialPlan.map((row, i) => (
                    <tr key={row.size} className={i % 2 ? "bg-cream/50" : "bg-white"}>
                      <td className="px-5 py-4 font-semibold text-navy">{row.size}</td>
                      <td className="px-5 py-4 text-muted">{row.dim}</td>
                      <td className="px-5 py-4 font-semibold text-gold-dark">{row.total}</td>
                      <td className="px-5 py-4 text-muted">{row.down}</td>
                      <td className="px-5 py-4 text-muted">{row.quarterly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center gap-2 border-t border-black/5 bg-white px-5 py-4 text-xs text-muted">
              <Icon name="clock" width={14} height={14} className="text-gold-dark" />
              Indicative residential rates (revised {ft2.priceRevision}). Updated {ft2.lastUpdated}. Confirm the
              official current rate list before booking. Commercial &amp; 2 Kanal prices on request.
            </div>
          </Reveal>

          {/* Lead magnet */}
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(10,31,68,0.08)]">
            <LeadForm
              heading="Download the Full Payment Plan"
              sub="Get the complete block-wise plan (Sector O, Overseas Enclave, N Block & commercial) on WhatsApp."
              cta="Send Me the Full Plan"
              compact
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
