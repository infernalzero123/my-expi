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
      <div className="absolute top-0 left-0 w-full h-full p-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-zinc-800 dark:text-zinc-100 text-[2rem] font-mono font-semibold transition-colors delay-200 mt-20 lg:delay-300 lg:mt-0">
            HELLO CRUEL WORLD
          </h1>

          <div className="flex flex-wrap justify-center space-x-6 py-5 mt-5">
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
        </div>
      </div>
    </>
  );
};

export default Home;
