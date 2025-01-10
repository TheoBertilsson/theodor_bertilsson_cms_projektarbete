// app/projects/page.tsx
import { createClient } from "contentful";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";

export default async function Projects() {
  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error("Contentful space ID and access token are required");
  }

  // Fetch data from Contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "portfolio" });
  const categories = response.items.flatMap(
    (item) => (item.fields.categories as string[])
  );
  const uniqueCategories:string[] = Array.from(new Set(categories)).sort();

  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly gap-10 flex-wrap m-10">
        <ProjectDetails
          projects={response.items}
          uniqueCategories={uniqueCategories}
        />
      </main>
    </>
  );
}
function ProjectDetails({
  projects,
  uniqueCategories,
}: {
  projects: unknown;
  uniqueCategories: string[];
}) {
  return (
    <>
      <CategoryNav uniqueCategories={uniqueCategories} projects={projects} />
    </>
  );
}

export const generateMetadata = async () => {
  return {
    title: "Projects | Theos Portfolio",
    description:
      "Explore my latest web development projects, including React, Svelte, Next.js, and full-stack applications.",
    openGraph: {
      title: "Projects | Your Portfolio",
      description: "Explore my latest web development projects",
    },
  };
};
