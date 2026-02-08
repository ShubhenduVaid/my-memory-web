import type { MetadataRoute } from "next";

import { getSiteUrl } from "../lib/siteUrl";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/getting-started", priority: 0.9 },
    { path: "/download", priority: 0.8 },
    { path: "/developers", priority: 0.7 },
    { path: "/docs", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/privacy", priority: 0.6 },
    { path: "/changelog", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
