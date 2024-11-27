import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="grid h-full grid-cols-1 gap-10 px-6 pb-10 pt-4 text-center md:px-10 lg:grid-cols-2 lg:px-14 lg:pb-4 lg:text-start">
        <div className="max-w-md justify-self-center lg:justify-self-start">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to={"/destination"}
          className="flex size-[150px] items-center justify-center self-center justify-self-center rounded-full bg-white font-bellefair text-[20px] uppercase tracking-[1.25px] text-primary transition-all duration-500 hover:shadow-[0_0_0_2.25em_rgba(255,255,255,.1)] md:size-[242px] md:text-[32px] md:tracking-[2px] lg:size-[17.125rem]"
        >
          Explore
        </Link>
      </section>
    </>
  );
}

export default Home;
