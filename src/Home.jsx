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

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Knowledge", href: "knowledge" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

const Home = () => {
  return (
    <>
      {/* Render navigation dynamically */}
      <nav>
        <div className="hidden lg:flex absolute top-0 left-0 w-full items-center justify-center py-5 px-10 lg:px-20">
          <ul className="flex mx-auto space-x-10">
            {/* Horizontal space between items */}
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <a
                  href={`#${item.href}`}
                  className="text-lg text-zinc-100 font-light hover:text-emerald-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="w-full min-h-[250rem] bg-gradient-to-t from-transparent via-zinc-800 to-zinc-800 z-10">
        <div className="w-full h-[100vh] bg-gradient-to-t from-zinc-800 to-sky-700 p-0 px-10 lg:px-20">
          <div className="max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between pt-10 lg:pt-52 mx-auto gap-10">
            {/* Left Column */}
            <div className="flex-1">
              <h1 className="text-zinc-100 text-[3rem] font-thin transition-colors delay-200 lg:delay-300 text-center lg:text-left">
                <span className="font-semibold">Welcome</span> to my portfolio!
                I&apos;m{" "}
                <span className="font-normal bg-gradient-to-r from-orange-300 to-rose-500 text-transparent bg-clip-text text-[4rem] whitespace-nowrap">
                  Paul Rey
                </span>
                <span className="block text-xl mt-4">
                  I dedicate myself to creating beautiful, responsive UI/UX web
                  designs, empowered by modern technologies and frameworks from
                  the vast open-source community.
                </span>
              </h1>
              <div className="w-full flex items-center justify-center lg:justify-start mt-10">
                <a
                  href="#about"
                  className="text-lg flex flex-col items-center justify-center text-zinc-100 bg-sky-400/50 hover:bg-sky-500/50 px-3 py-2 rounded-sm font-thin"
                >
                  Explore Now
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-wrap justify-center items-center gap-6">
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
      </div>
    </>
  );
};

export default Home;
