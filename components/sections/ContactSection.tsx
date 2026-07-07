import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

const details = [
  { icon: "phone", label: "Call / WhatsApp", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: "mail", label: "Email Us", value: site.email, href: `mailto:${site.email}` },
  {
    icon: "pin",
    label: "Visit Our Office",
    value: `${site.address.line1}, ${site.address.line2}`,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight text-navy">
            Start Your Investment Journey Today
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Share a few details and our investment advisor will get back to you with the latest availability,
            pricing and a plan tailored to your goals — completely free, no obligation.
          </p>

          <div className="mt-9 space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <Icon name={d.icon} width={22} height={22} />
                </span>
                <div>
                  <div className="text-sm font-medium text-muted">{d.label}</div>
                  {d.href ? (
                    <a href={d.href} className="font-semibold text-navy hover:text-gold-dark">
                      {d.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-navy">{d.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(10,31,68,0.08)] sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
