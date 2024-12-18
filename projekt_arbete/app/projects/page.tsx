import Header from "../components/Header";
export default function Projects() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-evenly w-4/5 h-[80vh]">
      <section className="w-[350px] h-[600px] bg-[#d9d9d9] rounded-2xl shadow-2xl flex flex-col items-center justify-start gap-10">
      <a href="/project" className="flex flex-col items-center justify-start gap-10">
        <img src="./static/budget.png" alt="Budgeting app" className="w-[280px] h-[230px] rounded-2xl m-10"/>
        <div className="flex flex-col items-center justify-center w-[70%]">
          <h3 className="font-semibold text-xl mb-5 underline">Budgeting App</h3>
          <p>
            This is a budgeting app that I created using Svelte 5. The app
            allows you to add your income and expenses and it will calculate
            your total balance. You can also view your transactions and filter
            them by date.
          </p>
        </div>
        </a>
      </section>
      <section className="w-[350px] h-[600px] bg-[#d9d9d9] rounded-2xl shadow-2xl flex flex-col items-center justify-start gap-10">
      <a href="/project" className="flex flex-col items-center justify-start gap-10">
        <img src="./static/todo.png" alt="Todo app" className="w-[280px] h-[230px] rounded-2xl m-10"/>
        <div className="flex flex-col items-center justify-center w-[70%]">
          <h3 className="font-semibold text-xl mb-5 underline">To-do list</h3>
          <p>
            This is a to-do list app that I created using React. The app allows
            you to add tasks to a list and mark them as completed. You can also
            filter the tasks by their status.
          </p>
        </div>
        </a>
      </section>
      <section className="w-[350px] h-[600px] bg-[#d9d9d9] rounded-2xl shadow-2xl flex flex-col items-center justify-start gap-10">
      <a href="/project" className="flex flex-col items-center justify-start gap-10">
        <img src="./static/ecommerce.png" alt="Ecommerce Page" className="w-[280px] h-[230px] rounded-2xl m-10"/>
        <div className="flex flex-col items-center justify-center w-[70%]">
          <h3 className="font-semibold text-xl mb-5 underline">Ecommerce Website</h3>
          <p>
            This is an ecommerce website that I created using HTML, CSS, and
            JavaScript. The website allows you to browse products, add them to
            your cart, and checkout. You can also filter products by category.
          </p>
        </div>
        </a>
      </section>
    </main>
    </>
  );
}
