import { createClient } from "contentful";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";
import Link from "next/link";

// @ts-ignore
export default async function Project({ params }) {
  const { slug } = params;

  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error("Contentful space ID and access token are required");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": slug,
  });

  const project = response.items[0];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center h-full w-full p-5">
        <ProjectDetails project={project} />
      </main>
    </>
  );
}
// @ts-ignore
function ProjectDetails({ project }) {
  return (
    <article className="flex flex-col justify-center items-center w-full gap-5 bg-foreground p-10 rounded-xl border border-black lg:max-w-[75%] shadow-lg">
      <ImageSlider images={project.fields.featureImages} />
      <h3 className="text-2xl font-bold underline">{project.fields.title}</h3>
      <div className="flex justify-center items-center w-1/2 gap-5">
        <Link
          href={project.fields.projectLink}
          className="text-blue-700 underline"
        >
          Live Preview
        </Link>
        <Link
          href={project.fields.githubRepo}
          className="text-blue-700 underline"
        >
          Github Repository
        </Link>
      </div>
      {documentToReactComponents(project.fields.description as Document)}
      <h3 className="text-2xl font-bold underline mt-5">Technologies</h3>
      <ul className="list-inside flex w-full justify-evenly my-5 gap-5 font-semibold flex-wrap">
        {project.fields.technologies?.map(
          (technology: string, index: number) => (
            <li
              key={index}
              className="border-2 border-black rounded-full p-2 min-w-24 text-center"
            >
              {technology}
            </li>
          )
        )}
      </ul>
    </article>
  );
}
