import Header from "../components/Header";
export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20">
        <section className="flex flex-col justify-center items-center gap-5">
          <img
            src="./static/profil.jpg"
            alt="Profile Picture"
            className="max-w-80 max-h-80 rounded-full m-5 border-2 border-border"
          />
          <div className="bg-foreground rounded-2xl w-full flex flex-col items-center justify-center p-4 border-2 border-border">
            <h2 className="text-xl font-semibold m-5 underline">
              Find me online!
            </h2>
            <ul className="flex justify-center items-center gap-5">
              <li className="text-blue-700 underline">
                <a href="https://www.linkedin.com/in/theodor-bertilsson-887b9a178/">LinkedIn</a>
              </li>
              <li className="text-blue-700 underline">
                <a href="https://github.com/TheoBertilsson">Github</a>
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
          className="flex flex-col justify-center items-center gap-5 mb-5 md:mb-0 bg-foreground w-full p-4 border-2 border-black rounded-2xl"
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
