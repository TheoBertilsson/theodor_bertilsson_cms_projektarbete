import Header from "../components/Header";
export default function Project() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center h-[100vh] w-[100vh] gap-10">
        <article className="flex flex-col justify-start items-start w-1/2 gap-5 bg-[#d9d9d9] p-10 rounded-xl border border-black">
          {/* Sliding image with 3 or more pictures */}
          <img
            src="../../static/budget.png"
            alt="Budgeting app"
            className="w-[580px] h-auto rounded-lg"
          />
          <h3 className="text-2xl font-bold underline">Budgeting App</h3>
          <div className="flex justify-evenly items-center w-1/2">
            <a
              href="https://www.github.com"
              className="text-blue-700 underline "
            >
              Github Repository
            </a>
            <a
              href="https://www.google.com"
              className="text-blue-700 underline"
            >
              Preview
            </a>
          </div>

          <p className="text-wrap w-2/3">
            This is a budgeting app that I created using Svelte 5. The app
            allows you to add your income and expenses and it will calculate
            your total balance. You can also view your transactions and filter
            them by date. The app features a user-friendly interface with
            real-time updates, making it easy to track your financial
            activities. <br />
            Additionally, it includes data visualization tools such as charts
            and graphs to help you better understand your spending habits. The
            app is designed to be responsive, ensuring a seamless experience on
            both desktop and mobile devices. Security measures are also
            implemented to protect your financial data.
          </p>
        </article>
        <article className="flex flex-col justify-center items-start w-1/2  bg-[#d9d9d9] p-10 rounded-xl border border-black">
          <h3 className="text-2xl font-bold underline">Technologies</h3>
          <ul className="list-disc list-inside">
            <li>Svelte 5</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Chart.js</li>
          </ul>
        </article>
      </main>
    </>
  );
}
