import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

type SitemapCollection = "posts" | "projects" | "skills" | "solutions";

async function getCollectionUrls(collection: SitemapCollection, path: string) {
  const payload = await buildPayloadHMR();
  payload.logger.info(`Generating sitemap urls for ${collection}`);
  const { docs } = await payload.find({
    collection,
    draft: false,
    select: {
      slug: true,
    },
    pagination: false,
  });

  return docs.map((doc) => ({
    url: `${siteConfig.url}/${path}/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postUrls, projectUrls, skillUrls, solutionUrls] = await Promise.all([
    getCollectionUrls("posts", "blog"),
    getCollectionUrls("projects", "my-work"),
    getCollectionUrls("skills", "skills"),
    getCollectionUrls("solutions", "solutions"),
  ]);

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${siteConfig.url}/about-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${siteConfig.url}/my-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...postUrls,
    ...projectUrls,
    ...skillUrls,
    ...solutionUrls,
  ];
}
