"use client"
const ErrorPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-5"
    >
      <h1 className="font-semibold">Something went wrong!</h1>
      <button className="p-4 bg-foreground border-border border-2 rounded-xl" onClick={() => window.location.href = "/"}>Home</button>
    </div>
  );
};

export default ErrorPage;
