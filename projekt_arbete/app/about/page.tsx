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
  console.log(response.items);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-evenly w-full h-full p-10">
        {response.items.map((item: any) => (
          <div key={item.sys.id}>
             <section className="flex flex-col items-center justify-center w-full">
          <img
            src={item.fields.profile.fields.file.url}
            alt="Profile Picture"
            className="w-auto h-auto rounded-full m-5 border-2 border-border max-w-80 max-h-80"
          />
          <h1 className="text-2xl font-bold text-center">{item.fields.name}</h1>
          <div className="text-center m-5 w-full bg-foreground border-2 border-border rounded-2xl p-5">
          {documentToReactComponents(item.fields.aboutMeInfo)}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Education</h2>
          <div className="flex justify-evenly items-center gap-10 flex-wrap">
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-center items-center gap-4 h-full p-5 text-center">
            {documentToReactComponents(item.fields.education)}
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Experience</h2>
          <div className="flex justify-evenly items-center gap-10 flex-wrap">
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-evenly items-center gap-4 h-full p-5 text-center">
            {documentToReactComponents(item.fields.experience)}
            </article>

          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Skills</h2>
          <ul className="p-10 flex flex-wrap gap-10 justify-center items-center bg-foreground rounded-2xl border border-border">
            {item.fields.skills.map((skill: string, index: number) => (
              <li key={index}>{skill} </li>
            ))}
          </ul>
        </section>
          </div>
        ))}

      </main>
    </>
  );
}
