import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Header from "../components/Header";
import { createClient } from "contentful";

export default async function Projects() {
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

  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly w-4/5 h-[80vh] gap-10 flex-wrap m-16">
        {response.items.map((item: any) => (
          <section key={item.sys.id} className="w-[350px] h-[600px] bg-[#FBFADA] rounded-2xl shadow-2xl flex flex-col items-center justify-start gap-5 border-2 border-border">
            <a
              href={`/${item.fields.slug}`}
              className="flex flex-col items-center justify-start gap-5"
            >
              <img
                src={item.fields.thumbnailImage.fields.file.url}
                alt={item.fields.title}
                className="w-[280px] h-[230px] rounded-2xl m-10 border border-border"
              />
              <div className="flex flex-col items-center justify-center w-[70%]">
                <h3 className="font-semibold text-xl mb-5 underline">
                  {item.fields.title}
                </h3>
                <p className="line-clamp-6">
                {documentToReactComponents(item.fields.description)}
                </p>
              </div>
            </a>
          </section>
        ))}

      </main>
    </>
  );
}
