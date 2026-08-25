import type { MetadataRoute } from "next";
import { posts, projects, site } from "@/lib/site";
import { highVolumeBlockSlugs } from "@/lib/ft2";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const blockRoutes = highVolumeBlockSlugs.map((slug) => ({
    url: `${base}/blocks/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const staticRoutes = [
    "",
    "/payment-plan",
    "/commercial",
    "/blocks",
    "/about",
    "/projects",
    "/blog",
    "/contact",
    "/privacy-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : ["/payment-plan", "/commercial", "/blocks"].includes(path) ? 0.9 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blockRoutes, ...projectRoutes, ...postRoutes];
}
