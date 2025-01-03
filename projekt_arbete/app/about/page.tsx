import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-evenly w-full h-full gap-20 p-20">
        <section className="flex flex-col items-center justify-center">
          <img
            src="./static/profil.png"
            alt="Profile Picture"
            className="w-80 h-80 rounded-full m-5 border-2 border-border"
          />
          <h1 className="text-2xl font-bold m-5">Theodor Bertilsson</h1>
          <div className="text-center m-5 w-2/3 bg-foreground border-2 border-border rounded-2xl p-4">
            <h2 className="text-lg font-semibold underline mb-2">About me</h2>
            <p>
              I am a 25 year old student at IT-högskolan. I am currently
              studying to become a frontend developer. I have a passion for
              design and development and I am always looking for new challenges.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Education</h2>
          <div className="flex justify-evenly items-center gap-10 w-5/6">
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-center items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">IT-högskolan</h3>
              <p className="w-3/4">
                I am currently studying at IT-högskolan to become a frontend
                developer. I have learned a lot about web development, design,
                and programming languages such as HTML, CSS, JavaScript, and
                React. I have also gained experience in working with databases,
                APIs, and version control systems.
              </p>
            </article>
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-center items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">High School</h3>
              <p className="w-3/4">
                I graduated from high school with a focus on natural sciences. I
                took courses in mathematics, physics, chemistry, and biology. I
                also participated in extracurricular activities such as the
                science club and the robotics team. I developed a strong
                foundation in problem-solving, critical thinking, and teamwork.
              </p>
            </article>
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-center items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">Online Courses</h3>
              <p className="w-3/4">
                I have completed several online courses to further my knowledge
                and skills in web development. I have taken courses on topics
                such as responsive design, user experience, and front-end
                frameworks. I have also completed projects to apply what I have
                learned and build my portfolio.
              </p>
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Experience</h2>
          <div className="flex justify-evenly items-center gap-10 w-5/6">
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-evenly items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">
                Frontend Developer Intern
              </h3>
              <p className="w-3/4">
                I interned at a web development company as a frontend developer.
                I worked on projects to create responsive websites, web
                applications, and e-commerce platforms. I collaborated with
                designers, developers, and clients to deliver high-quality
                products. I gained experience in working with modern
                technologies, tools, and best practices in the industry.
              </p>
            </article>
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-evenly items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">
                Freelance Web Designer
              </h3>
              <p className="w-3/4">
                I have worked as a freelance web designer to create custom
                websites for clients. I have designed websites for small
                businesses, startups, and individuals. I have experience in
                creating user-friendly interfaces, engaging layouts, and
                interactive features. I have collaborated with clients to
                understand their needs, goals, and preferences to deliver
                tailored solutions.
              </p>
            </article>
            <article className="bg-foreground rounded-2xl border border-border flex flex-col justify-evenly items-center gap-4 h-full pb-4">
              <h3 className="text-lg font-semibold m-2">
                IT Support @ Elgiganten
              </h3>
              <p className="w-3/4">
                I worked as an IT support technician at Elgiganten to help
                customers with technical issues, troubleshooting, and repairs. I
                provided assistance with hardware, software, and peripherals. I
                gained experience in customer service, problem-solving, and
                communication skills. I also developed a strong understanding of
                computer systems, devices, and technologies.
              </p>
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold m-5 underline">Skills</h2>
          <ul className="p-10 flex flex-col max-h-80 flex-wrap gap-10 justify-center items-center bg-foreground rounded-2xl border border-border">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Testing</li>
            <li>Debugging</li>
            <li>Problem-Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
          </ul>
        </section>
      </main>
    </>
  );
}
