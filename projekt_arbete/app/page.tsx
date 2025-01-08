
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly h-[100vh] w-4/5">
      <img src="../static/profil.jpg" alt="Profile Picture" className="w-80 h-80 rounded-full m-5 border-2 border-border"/>
      <h1 className="text-2xl font-semibold m-5">Theodor Bertilsson</h1>
      <section className="flex flex-wrap  justify-evenly gap-5 w-full">
        <a href="/projects" className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center hover:bg-[#436850] hover:text-white hover:underline text-xl font-bold bg-foreground">
          <h2>Projects</h2>
        </a>
        <a href="/about" className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center hover:bg-[#436850] hover:underline text-xl font-bold hover:text-white bg-foreground">
          <h2>About me</h2>
        </a>
        <a href="/contact" className="w-[350px] h-[270px] rounded-2xl border-border border-2 no-underline text-black flex justify-center items-center hover:bg-[#436850] hover:text-white hover:underline text-xl font-bold bg-foreground">
          <h2>Contact</h2>
        </a>
      </section>
    </main>
  );
}
