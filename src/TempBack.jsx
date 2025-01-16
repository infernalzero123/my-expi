import "react";
import "./App.css";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", icon: HomeIcon },
  { label: "About", icon: UserIcon },
  { label: "Knowledge", icon: BookOpenIcon },
  { label: "Education", icon: BuildingLibraryIcon },
  { label: "Contact", icon: EnvelopeIcon },
  { label: "Milestone", icon: AcademicCapIcon },
];

export function App() {
  return (
    <>
      {/* Body Container */}
      <div className="relative w-screen min-h-screen lg:pl-60 overflow-hidden m-0 mt-16 lg:mt-0 p-0 ">
        {/* Navbar Container */}
        <div className="fixed top-0 left-0 w-full min-h-20 lg:w-20 lg:h-screen overflow-hidden bg-zinc-800 shadow-lg z-50">
          {/* Navbar Content */}
          <ul className="hidden lg:block flex-row lg:flex-col space-y-2 px-6 py-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="group flex items-center space-x-5 py-2 text-zinc-100 bg-zinc-700 transition-all duration-100 hover:text-blue-500"
              >
                {/* Icon Container with Fixed Size */}
                <div className="w-8 h-8 mr-1 flex justify-center items-center">
                  <item.icon className="h-6 w-6 transition-all duration-0 group-hover:text-blue-500" />
                </div>
                {/* Label */}
                <span className="whitespace-nowrap transition-all duration-100 group-hover:text-blue-500">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Section */}
        <section
          id=""
          className="w-full min-h-screen bg-sky-500 overflow-hidden box-border m-0 p-0"
        >
          <div>
            <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
              WHAT I DO
            </h1>
          </div>
        </section>
        <section
          id=""
          className="w-full min-h-screen bg-sky-700 overflow-hidden box-border m-0 p-0"
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
