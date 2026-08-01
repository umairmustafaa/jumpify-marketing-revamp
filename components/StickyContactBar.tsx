import { site } from "@/lib/site";
import { Icon } from "./Icons";

// Persistent mobile-only bottom bar — one-tap Call / WhatsApp / Get Plan.
// One of the highest-impact conversion elements for mobile real-estate traffic.
export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/10 bg-white shadow-[0_-4px_20px_rgba(10,31,68,0.12)] lg:hidden">
      <a
        href={`tel:${site.phoneHref}`}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy"
      >
        <Icon name="phone" width={20} height={20} className="text-gold-dark" />
        <span className="text-[0.7rem] font-semibold">Call</span>
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 border-x border-black/10 py-2.5 text-navy"
      >
        <Icon name="whatsapp" width={20} height={20} className="text-[#25D366]" />
        <span className="text-[0.7rem] font-semibold">WhatsApp</span>
      </a>
      <a
        href="/#payment-plan"
        className="flex flex-col items-center justify-center gap-0.5 bg-gold py-2.5 text-navy-900"
      >
        <Icon name="chart" width={20} height={20} />
        <span className="text-[0.7rem] font-semibold">Payment Plan</span>
      </a>
    </div>
  );
}
