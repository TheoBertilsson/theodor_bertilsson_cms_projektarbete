import { createClient } from "contentful";
import Header from "../components/Header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default async function Home() {
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
  const response = await client.getEntries({ content_type: "aboutMe" });
  const experience = await client.getEntries({ content_type: "experience" });
  const education = await client.getEntries({ content_type: "education" });

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-4/5 my-5 min-h-screen gap-10">
        {response.items.map((item) => (
          <section
            className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10"
            key={item.sys.id}
          >
            <div className="flex flex-col items-center justify-center lg:w-1/2 gap-5">
              <h1 className="text-4xl font-semibold text-center">
                {item.fields.name as string}
              </h1>
              <div className="text-center w-full bg-foreground border-[1px] border-border p-5 rounded-lg shadow-xl">
                {documentToReactComponents(item.fields.aboutMeInfo as any)}
              </div>
            </div>
            <img
              // @ts-ignore
              src={item.fields.profile?.fields?.file?.url ?? ""}
              alt="Profile Picture"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[1px] shadow-xl border-border"
            />
          </section>
        ))}

        <section className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold m-5 underline">Education</h2>
          <div className="flex justify-evenly items-center gap-10 flex-wrap shadow-xl">
            <article className="bg-foreground rounded-lg border border-border flex flex-col justify-center items-center gap-4 h-full p-5 text-center">
              {education.items.map((item: any) => (
                <div key={item.sys.id}>
                  <h3 className="font-semibold underline">
                    {item.fields.title}
                  </h3>
                  {documentToReactComponents(item.fields.description)}
                </div>
              ))}
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold m-5 underline ">Experience</h2>
          <div className="flex justify-evenly items-center gap-10 flex-wrap shadow-xl">
            <article className="bg-foreground rounded-lg border border-border flex flex-col justify-evenly items-center gap-4 h-full p-5 text-center">
              {experience.items.map((item: any) => (
                <div key={item.sys.id}>
                  <h3 className="font-semibold underline">
                    {item.fields.title}
                  </h3>
                  {documentToReactComponents(item.fields.description)}
                </div>
              ))}
            </article>
          </div>
        </section>
        {response.items.map((item: any) => (
          <section
            key={item.sys.id}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl font-bold m-5 underline">Skills</h2>
            <ul className="p-10 flex flex-wrap gap-5 justify-center items-center bg-foreground rounded-lg border border-border shadow-xl">
              {item.fields.skills.map((skill: string, index: number) => (
                <li key={index}>{skill} </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
