import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Header from "./components/Header";

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
    <>
      <Header />
      <main className="flex flex-col items-center justify-evenly w-4/5 my-5">
        {response.items.map((item: any) => (
          <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <h1 className="text-4xl font-semibold m-5 text-center">
                {item.fields.name}
              </h1>
              <div className="text-center m-5 w-full bg-foreground border-[1px] border-border p-5 rounded-lg shadow-lg">
                {documentToReactComponents(item.fields.aboutMeInfo)}
              </div>
            </div>
            <img
              src={item.fields.profile.fields.file.url}
              alt="Profile Picture"
              className="w-56 h-56 sm:w-80 sm:h-80 rounded-full m-5 border-[1px] shadow-lg border-border"
            />
          </section>
        ))}

        <section className="flex flex-wrap  justify-evenly gap-10 mt-10 w-full">
          <a
            href="/projects"
            className="w-[350px] h-[270px] rounded-lg border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground shadow-lg"
          >
            <h2>Projects</h2>
          </a>
          <a
            href="/about"
            className="w-[350px] h-[270px] rounded-lg border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] hover:underline text-xl font-bold active:text-white bg-foreground shadow-lg"
          >
            <h2>About me</h2>
          </a>
          <a
            href="/contact"
            className="w-[350px] h-[270px] rounded-lg border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground shadow-lg"
          >
            <h2>Contact</h2>
          </a>
        </section>
      </main>
    </>
  );
}
