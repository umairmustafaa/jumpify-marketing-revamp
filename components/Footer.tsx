import Link from "next/link";
import { nav, projects, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icons";

const socials: { name: string; href: string }[] = [
  { name: "facebook", href: site.social.facebook },
  { name: "instagram", href: site.social.instagram },
  { name: "linkedin", href: site.social.linkedin },
  { name: "youtube", href: site.social.youtube },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-navy-900 text-white/80">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-x py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold">Ready to invest with confidence?</h3>
            <p className="text-white/60 mt-1">Talk to a Jumpify advisor today — it&apos;s completely free.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Icon name="phone" width={16} height={16} /> Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-navy-900 hover:bg-gold-light transition-colors"
            >
              Get Started <Icon name="arrow" width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            {site.name} is a trusted real estate investment consultancy delivering secure, NOC-approved,
            high-yield opportunities across Pakistan &amp; Dubai since {site.foundedYear}.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-navy-900 hover:bg-gold hover:border-gold transition-colors"
              >
                <Icon name={s.name} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Projects</h4>
          <ul className="space-y-2.5 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="text-white/60 hover:text-gold transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/60 hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-white/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" width={18} height={18} className="text-gold shrink-0 mt-0.5" />
              <span className="text-white/60">
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" width={18} height={18} className="text-gold shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <a href={`tel:${site.phoneHref}`} className="text-white/60 hover:text-gold">
                  {site.phone}
                </a>
                <a href={`tel:${site.phoneHref2}`} className="text-white/50 hover:text-gold text-xs">
                  {site.phone2} <span className="opacity-60">(Alt)</span>
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" width={18} height={18} className="text-gold shrink-0 mt-0.5" />
              <a href={`mailto:${site.email}`} className="text-white/60 hover:text-gold break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Disclaimer: Prices &amp; availability are indicative and subject to change. Verify NOC status with the
            relevant authority before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
