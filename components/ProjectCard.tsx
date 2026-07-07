import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/site";
import { Icon } from "./Icons";

const statusStyle: Record<Project["status"], string> = {
  "Fast Selling": "bg-red-50 text-red-600 border-red-100",
  "Booking Open": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Ready to Move": "bg-blue-50 text-blue-600 border-blue-100",
  "New Launch": "bg-amber-50 text-amber-700 border-amber-100",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_16px_rgba(10,31,68,0.05)] hover:shadow-[0_16px_40px_rgba(10,31,68,0.12)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{project.tag}</span>
        <h3 className="mt-1.5 text-lg font-semibold text-navy">{project.name}</h3>
        <p className="mt-1 flex items-start gap-1.5 text-sm text-muted">
          <Icon name="pin" width={15} height={15} className="mt-0.5 shrink-0 text-gold-dark" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">{project.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark transition-colors">
          View Details <Icon name="arrow" width={15} height={15} />
        </span>
      </div>
    </Link>
  );
}
