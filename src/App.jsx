import "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);

const navItems = [
  { label: "Home", icon: "fa-solid fa-house" },
  { label: "About", icon: "fa-solid fa-user" },
  { label: "Knowledge", icon: "fa-solid fa-book" },
  { label: "Education", icon: "fa-solid fa-building-columns" },
  { label: "Contact", icon: "fa-solid fa-envelope" },
  { label: "Milestone", icon: "fa-solid fa-graduation-cap" },
];

export function App() {
  return (
    <>
      {/* Body Container */}
      <div className="relative w-screen min-h-screen lg:pl-60 overflow-hidden m-0 mt-16 lg:mt-0 p-0 ">
        {/* Navbar Container */}
        <div className="fixed top-0 left-0 w-full min-h-20 lg:w-60 lg:h-screen overflow-hidden bg-zinc-800 shadow-lg z-50">
          {/* Navbar Content */}
          <nav className="w-full min-h-16 lg:w-60 lg:h-screen">
            <div className="hidden lg:block w-60 h-20"></div>
            <ul className="hidden lg:block flex-row lg:flex-col space-y-4 px-6 py-3 transition-all duration-0">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center space-x-5 text-zinc-0 transition-all duration-0 hover:text-blue-500"
                >
                  {/* Icon Container with Fixed Size */}
                  <div className="w-8 h-8 mr-1 flex justify-center items-center group-hover:text-blue-500 transition-all duration-0 bg-lime-500">
                    <FontAwesomeIcon
                      icon={item.icon.split(" ")}
                      className="text-2xl transition-all duration-0"
                    />
                  </div>
                  {/* Label */}
                  <span className="whitespace-nowrap transition-all duration-0 group-hover:text-blue-500">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
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
