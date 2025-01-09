// app/projects/page.tsx
import { createClient } from "contentful";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

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

  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly gap-10 flex-wrap m-10">
        {response.items.map((item: any) => (
          <ProjectCard key={item.sys.id} project={item} />
        ))}
      </main>
    </>
  );
}
