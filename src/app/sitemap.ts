import type { MetadataRoute } from "next";

import { getSiteUrl } from "../lib/siteUrl";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
