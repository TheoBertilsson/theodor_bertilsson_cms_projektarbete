import { createClient } from "contentful";
import Header from "../components/Header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Project({params}:{params:{slug:string}}) {
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
  const response = await client.getEntries({ content_type: "portfolio" });
  const project = response.items.find((item) => item.fields.slug === slug);

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center h-full w-[100vh] gap-10">

        {project ? (
          <>
            <article className="flex flex-col justify-center items-center m-10 gap-5 bg-foreground p-10 rounded-xl border border-black">
              {/* Sliding image with 3 or more pictures */}
              <img
          src={project.fields.featureImage?.fields.file.url}
          alt="Budgeting app"
          className="w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-bold underline">{typeof project.fields.title === 'string' ? project.fields.title : ''}</h3>
              <div className="flex justify-evenly items-center w-1/2">
              {project.fields.projectLink !== "false" && (
              <a
            href={project.fields.projectLink as string}
            className="text-blue-700 underline "
          >
            Live Preview
          </a>)}
          <a
            href={project.fields.githubRepo as string}
            className="text-blue-700 underline "
          >
            Github Repository
          </a>
              </div>

              <p className="text-wrap">
              {documentToReactComponents(project.fields.description)}
              </p>
              <h3 className="text-2xl font-bold underline mt-5">Technologies</h3>
              <ul className=" list-inside flex w-full justify-evenly my-5 font-semibold">
                {project.fields.technologies.map((technology: string, index: number) => (
                  <li key={index} className="border-2 border-black rounded-full p-2 min-w-24 text-center">{technology} </li>
                ))}
              </ul>
            </article>

          </>
        ) : (
          <p>Project not found</p>
        )}
      </main>
    </>
  );
}
