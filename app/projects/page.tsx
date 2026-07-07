import type { Metadata } from "next";
import { projects, site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Projects — Premium Real Estate Investments",
  description:
    "Explore Jumpify Marketing's portfolio of NOC-approved, high-growth real estate projects including Faisal Town Phase 2, Faisal Hills, Faisal Town Phase 1 and Faisal Jewel.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Projects", url: `${site.url}/projects` },
        ])}
      />
      <PageHeader
        title="Our Investment Projects"
        subtitle="Hand-picked, verified societies across Islamabad and Rawalpindi — each with strong growth potential and transparent documentation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
