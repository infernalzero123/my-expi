import "react";
import {
  ViteIcon,
  ReactIcon,
  PythonIcon,
  PhpIcon,
  JavaIcon,
  JavascriptIcon,
  TypescriptIcon,
  CPPIcon,
  TailwindCSSIcon,
  BootstrapIcon,
  GithubIcon,
  VSCodeIcon,
  MysqlIcon,
  PSIcon,
} from "./RenderIcons";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[150rem] p-0 bg-gradient-to-t from-transparent to-sky-800 mb-96 px-10 lg:px-20">
        <div className="flex flex-col items-center justify-start h-full pt-5 lg:pt-60">
          <h1 className="text-zinc-100 text-[3rem] font-thin transition-colors delay-200 mt-10 lg:delay-300 text-center">
            <span className="font-semibold">Welcome</span> to my portfolio!
            I&apos;m{" "}
            <span className="font-normal bg-gradient-to-r from-orange-300 to-rose-500 text-transparent bg-clip-text text-[4rem]">
              Paul Rey
            </span>
            <span className="block text-xl">
              A passionate software developer dedicated to solving challenges
              and creating impactful solutions. Explore my work and see how I
              bring innovative ideas to life!
            </span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 h-auto mt-10">
            <ViteIcon width={45} height={45} />
            <ReactIcon width={45} height={45} />
            <PythonIcon width={45} height={45} />
            <PhpIcon width={45} height={45} />
            <JavaIcon width={45} height={45} />
            <JavascriptIcon width={45} height={45} />
            <TypescriptIcon width={45} height={45} />
            <CPPIcon width={45} height={45} />
            <TailwindCSSIcon width={45} height={45} />
            <BootstrapIcon width={45} height={45} />
            <GithubIcon width={45} height={45} />
            <VSCodeIcon width={45} height={45} />
            <MysqlIcon width={45} height={45} />
            <PSIcon width={45} height={45} />
          </div>
          <div className="w-full flex flex-col items-center justify-start mt-10">
            <a
              href="#about"
              className="text-lg font-light text-zinc-100 bg-sky-500/20 rounded-md px-5 py-3 flex items-center space-x-2 hover:bg-sky-500/30"
            >
              <span>Explore Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
