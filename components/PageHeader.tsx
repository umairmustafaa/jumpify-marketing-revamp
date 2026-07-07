import Link from "next/link";
import { Icon } from "./Icons";

export function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0" style={{ background: "linear-gradient(115deg,#061631,#0a1f44 60%,#12305f)" }} />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle,#c9a24b,transparent 65%)" }}
      />
      <div className="container-x relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="hover:text-gold-light transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-light">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <Icon name="arrow" width={13} height={13} className="opacity-50" />}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
