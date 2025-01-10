import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

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

  return (
    <main className="flex flex-col items-center justify-evenly w-4/5 mb-5">
      {response.items.map((item: any) => (
        <div className="flex flex-col items-center justify-center">
          <img
            src={item.fields.profile.fields.file.url}
            alt="Profile Picture"
            className="w-80 h-80 rounded-full m-5 border-2 border-border"
          />
          <h1 className="text-2xl font-semibold m-5 text-center">
            {item.fields.name}
          </h1>
          <div className="text-center m-5 w-full bg-foreground border-2 border-border rounded-2xl p-5">
            {documentToReactComponents(item.fields.aboutMeInfo)}
          </div>
        </div>
      ))}

      <section className="flex flex-wrap  justify-evenly gap-5 w-full">
        <a
          href="/projects"
          className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground"
        >
          <h2>Projects</h2>
        </a>
        <a
          href="/about"
          className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center active:bg-[#436850] hover:underline text-xl font-bold active:text-white bg-foreground"
        >
          <h2>About me</h2>
        </a>
        <a
          href="/contact"
          className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground"
        >
          <h2>Contact</h2>
        </a>
      </section>
    </main>
  );
}
