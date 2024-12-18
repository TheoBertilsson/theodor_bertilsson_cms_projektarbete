import Header from "../components/Header";
export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-[60vh] gap-20">
        <section className="flex flex-col justify-center items-center gap-5">
          <img src="./static/profil.png" alt="Profile Picture" className="w-80 h-80 rounded-full m-5"/>
          <h2 className="text-xl font-semibold m-5 underline">Send me a message!</h2>
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
        </section>
          <form action="/submit" method="post" className="flex flex-col justify-center items-center gap-5 h-full">
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center gap-5">
              <input type="text" id="name" name="name" placeholder="Name" required className="bg-[#d9d9d9] border border-black rounded-md p-2"/>
              <input type="email" id="email" name="email" placeholder="Email" required className="bg-[#d9d9d9] border border-black rounded-md p-2" />
              <input type="text" id="phone" name="phone" placeholder="Phone" required className="bg-[#d9d9d9] border border-black rounded-md p-2"/>
            </div>
              <textarea id="message" name="message" placeholder="Message" required className="bg-[#d9d9d9] border border-black rounded-md p-2 h-full"></textarea>
          </div>

            <button type="submit" className="bg-[#d9d9d9] border border-black w-1/2 rounded-md p-2">Send</button>
          </form>
      </main>
    </>
  );
}
