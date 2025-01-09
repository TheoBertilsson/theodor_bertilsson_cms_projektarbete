// app/projects/page.tsx
import { createClient } from "contentful";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
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
  const categories = response.items.flatMap((item: any) => item.fields.categories);
  const uniqueCategories = Array.from(new Set(categories)).sort();

  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly gap-10 flex-wrap m-10">
        <ProjectDetails projects={response.items} uniqueCategories={uniqueCategories} />
      </main>
    </>
  );
}
function ProjectDetails({ projects, uniqueCategories }: { projects: any, uniqueCategories: any }) {
  return (
    <>
        <CategoryNav uniqueCategories={uniqueCategories} projects={projects} />
    </>
  );
}
