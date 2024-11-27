import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-center gap-16 justify-self-center px-4 text-center font-bellefair text-4xl md:flex-row md:justify-between md:text-6xl">
        <div className="space-y-8">
          <p>Error 404!</p>
          <p>Page Not Found</p>
        </div>
        <Link
          to={"/"}
          className="flex size-[200px] items-center justify-center self-center justify-self-center rounded-full bg-white font-bellefair text-[20px] uppercase tracking-[1.25px] text-primary transition-all duration-500 hover:shadow-[0_0_0_2.25em_rgba(255,255,255,.1)]"
        >
          Take me Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
