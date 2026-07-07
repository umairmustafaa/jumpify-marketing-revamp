import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-cream px-6 py-24 text-center">
      <div>
        <p className="text-7xl font-bold text-navy">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-navy">Page Not Found</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
        >
          <Icon name="arrow" width={16} height={16} className="rotate-180" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
