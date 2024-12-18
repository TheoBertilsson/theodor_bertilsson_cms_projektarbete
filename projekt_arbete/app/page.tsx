
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <img src="../static/profil.png" alt="Profile Picture" className="w-80 h-80 rounded-full m-5"/>
      <h1 className="text-xl font-semibold m-5">Theodor Bertilsson</h1>
      <section className="text-center m-5 w-1/3">
        <h2 className="text-lg">About me</h2>
        <p>
          I am a 25 year old student at IT-högskolan. I am currently studying to
          become a frontend developer. I have a passion for design and
          development and I am always looking for new challenges.
        </p>
      </section>
      <section className="w-2/3 flex justify-evenly m-5">
        <a href="/projects" className="w-[350px] h-[270px] rounded-md border-black border no-underline text-black flex justify-center items-center hover:bg-[#c6c6c6] hover:underline text-xl">
          <h2>Projects</h2>
        </a>
        <a href="/about" className="w-[350px] h-[270px] rounded-md border-black border no-underline text-black flex justify-center items-center hover:bg-[#c6c6c6] hover:underline text-xl">
          <h2>About me</h2>
        </a>
        <a href="/contact" className="w-[350px] h-[270px] rounded-md border-black border no-underline text-black flex justify-center items-center hover:bg-[#c6c6c6] hover:underline text-xl">
          <h2>Contact</h2>
        </a>
      </section>
    </main>
  );
}
