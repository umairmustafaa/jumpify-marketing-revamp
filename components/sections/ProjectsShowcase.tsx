import Link from "next/link";
import { projects } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function ProjectsShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Featured Projects"
            title="Explore Premium Investment Opportunities"
            subtitle="Hand-picked, high-growth societies across the twin cities — each verified and investor-ready."
          />
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              View All Projects <Icon name="arrow" width={16} height={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
