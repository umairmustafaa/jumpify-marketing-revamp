import { site } from "@/lib/site";
import { Icon } from "./Icons";

export function WhatsAppButton() {
  const msg = encodeURIComponent(
    "Hi Jumpify Marketing, I'm interested in investing in Faisal Town Phase 2. Please share details."
  );
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-4 py-3 text-white font-semibold shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" width={22} height={22} />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
