"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_20px_rgba(10,31,68,0.08)]" : "bg-white"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[70px]">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-md text-[0.92rem] font-medium transition-colors ${
                    active ? "text-navy" : "text-muted hover:text-navy"
                  }`}
                >
                  {item.label}
                  {item.children && <Icon name="chevron" width={14} height={14} className="mt-0.5 opacity-60" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-64 rounded-xl border border-black/5 bg-white shadow-xl p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-3 py-2.5 rounded-lg text-[0.9rem] text-navy hover:bg-cream transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold-dark transition-colors"
          >
            <Icon name="phone" width={16} height={16} className="text-gold-dark" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-600 transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden grid place-items-center w-11 h-11 rounded-lg text-navy hover:bg-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} width={24} height={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-2 py-2.5 rounded-lg font-medium text-navy hover:bg-cream"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-black/10 pl-3 flex flex-col">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-2 py-2 text-[0.9rem] text-muted hover:text-navy"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex justify-center items-center rounded-full bg-navy px-5 py-3 font-semibold text-white"
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
