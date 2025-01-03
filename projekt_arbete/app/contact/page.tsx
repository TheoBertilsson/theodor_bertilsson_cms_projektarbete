import Header from "../components/Header";
export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-[60vh] gap-20">
        <section className="flex flex-col justify-center items-center gap-5">
          <img
            src="./static/profil.png"
            alt="Profile Picture"
            className="w-80 h-80 rounded-full m-5 border-2 border-border"
          />
         <div className="bg-foreground rounded-2xl w-full flex flex-col items-center justify-center p-4 border-2 border-border">
         <h2 className="text-xl font-semibold m-5 underline">
            Find me online!
          </h2>
          <ul className="flex justify-center items-center gap-5">
            <li className="text-blue-700 underline">
              <a href="https://www.linkedin.com">LinkedIn</a>
            </li>
            <li className="text-blue-700 underline">
              <a href="https://www.github.com">Github</a>
            </li>
            <li className="text-blue-700 underline">
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
         </div>
        </section>
        <form
          action="/submit"
          method="post"
          className="flex flex-col justify-center items-center gap-5 h-full"
        >
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center gap-5">
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
            className="bg-foreground border-2 border-border w-1/2 rounded-md p-2"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}
