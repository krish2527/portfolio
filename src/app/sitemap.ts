import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }, ...projects.map(project => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }))];
}
