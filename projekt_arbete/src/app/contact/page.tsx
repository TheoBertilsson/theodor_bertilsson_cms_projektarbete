import { createClient } from "contentful";
import Header from "../components/Header";
import Link from "next/link";
export default async function Contact() {
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
  const response = await client.getEntries({ content_type: "socials" });
  const aboutInfo = await client.getEntries({ content_type: "aboutMe" });
  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 w-full p-20">
        <section className="flex flex-col justify-center items-center gap-5 w-2/3">
          {aboutInfo.items.map((item: any) => (
            <img
              key={item.sys.id}
              src={item.fields.profile?.fields.file.url}
              alt="Profile Picture"
              className="w-80 h-80 rounded-full m-5 border-2 border-border shadow-lg"
            />
          ))}

          <div className="bg-foreground rounded-lg w-full flex flex-col items-center justify-center p-4 border-2 border-border shadow-lg">
            <h2 className="text-xl font-semibold m-5 underline">
              Find me online!
            </h2>
            <ul className="flex justify-center items-center gap-5">
              {response.items.map((item: any, index: number) => (
                <li className="text-blue-700 underline" key={index}>
                  <Link href={item.fields.url}>{item.fields.platform}</Link>
                </li>
              ))}{" "}
            </ul>
          </div>
        </section>
        <form
          action="/submit"
          method="post"
          className="flex flex-col justify-center items-center gap-5 mb-5 md:mb-0 bg-foreground p-4 border-2 border-black rounded-lg w-2/3 shadow-lg"
        >
          <h3 className="font-semibold text-2xl">Contact me</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex flex-col  justify-center items-center gap-5">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="bg-[#fff] border border-border rounded-md p-2"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="bg-[#fff] border border-border rounded-md p-2"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                className="bg-[#fff] border border-border rounded-md p-2"
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="bg-[#fff] border border-border rounded-md p-2 h-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#436850] hover:bg-[#12372A] font-semibold text-white border-2 border-border w-1/2 rounded-md p-2"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}
