import { MetadataRoute } from "next";
import { createClient } from "contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  // Fetch all projects
  const projects = await client.getEntries({
    content_type: "portfolio"
  });

  // Create project URLs
  const projectUrls = projects.items.map((project: any) => ({
    url: `https://your-domain.com/projects/${project.fields.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Combine with static routes
  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://your-domain.com/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://your-domain.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://your-domain.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...projectUrls,
  ];
}
