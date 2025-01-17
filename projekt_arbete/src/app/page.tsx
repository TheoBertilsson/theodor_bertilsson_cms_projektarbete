import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Header from "./components/Header";
import Link from "next/link";

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
  const response = await client.getEntries({
    content_type: "aboutMe",
  });

  return (
    <>
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
              <div className="text-center w-full bg-foreground border-[1px] border-border p-5  shadow-xl">
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

        <section className="flex flex-wrap  justify-evenly gap-5 mt-10 ">
          <Link
            href="/projects"
            className="w-[300px] py-10  border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground shadow-xl"
          >
            <span>Projects</span>
          </Link>
          <Link
            href="/about"
            className="w-[300px] py-10  border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] hover:underline text-xl font-bold active:text-white bg-foreground shadow-xl"
          >
            <span>About me</span>
          </Link>
          <Link
            href="/contact"
            className="w-[300px] py-10  border-border border-[1px] no-underline text-black flex justify-center items-center active:bg-[#436850] active:text-white hover:underline text-xl font-bold bg-foreground shadow-xl"
          >
            <span>Contact</span>
          </Link>
        </section>
      </main>
    </>
  );
}
