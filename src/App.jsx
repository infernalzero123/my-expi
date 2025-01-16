import "react";
import "./App.css";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", icon: HomeIcon, href: "home" },
  { label: "About", icon: UserIcon, href: "about" },
  { label: "Knowledge", icon: BookOpenIcon, href: "knowledge" },
  { label: "Projects", icon: BriefcaseIcon, href: "projects" },
  { label: "Education", icon: BuildingLibraryIcon, href: "education" },
  { label: "Contact", icon: EnvelopeIcon, href: "contact" },
  { label: "Milestone", icon: AcademicCapIcon },
];

export function App() {
  return (
    <>
      {/* Body Container */}
      <div className="w-screen min-h-screen overflow-hidden m-0 mt-16 p-0 lg:mt-0">
        {/* Navbar Container */}
        <div className="fixed top-0 left-0 w-full min-h-20 lg:w-56 lg:h-screen overflow-hidden bg-zinc-800 shadow-lg z-50">
          {/* Navbar Content */}
          <nav>
            <div className="hidden lg:block w-full h-20 bg-lime-400"></div>
            <ul className="relative hidden lg:block flex-row lg:flex-col space-y-3 pl-8 px-5">
              <div className="absolute top-0 left-4 w-[2px] h-full bg-zinc-100 rounded-full">
                <div className="absolute top-0 left-0 ml-[-7px] w-4 h-4 bg-zinc-800 border-2 border-zinc-100 rounded-full">
                  {/* Active Link Pointer */}
                </div>
              </div>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="group w-11 overflow-hidden flex items-center text-zinc-100 bg-zinc-7000 transition-all duration-100 hover:bg-zinc-100/10 space-x-5 py-2 pl-2 pr-4 rounded-md"
                >
                  {/* Conditionally render anchor tag for items with href */}
                  {item.href ? (
                    <a
                      href={`#${item.href}`}
                      className="flex items-center space-x-6 w-full"
                    >
                      <div className="w-8 h-8 flex justify-center items-center">
                        <item.icon className="w-7 h-7 transition-all duration-0" />
                      </div>
                      <span className="whitespace-nowrap transition-all duration-100">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-6 w-full">
                      <div className="w-8 h-8 mr-1 flex justify-center items-center">
                        <item.icon className="w-7 h-7 transition-all duration-0" />
                      </div>
                      <span className="whitespace-nowrap transition-all duration-100">
                        {item.label}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Section */}
        <section
          id="home"
          className="w-full min-h-screen bg-sky-500 overflow-hidden box-border m-0 p-0 lg:pl-60"
        >
          <div>
            <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
              SECTION 1
            </h1>
          </div>
        </section>
        <section
          id="about"
          className="w-full min-h-screen overflow-hidden box-border m-0 p-0 lg:pl-60"
        >
          <div>
            <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
              SECTION 2
            </h1>
          </div>
        </section>
        {/* Footer */}
        <footer></footer>
      </div>
    </>
  );
}

export default App;
