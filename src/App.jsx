import "react";
import "./App.css";
import { useResponsive } from "./Responsive";
//import { Milestone } from "./Milestone";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", icon: HomeIcon, href: "home" },
  { label: "About", icon: UserIcon, href: "about" },
  { label: "Knowledge", icon: BookOpenIcon, href: "knowledge" },
  { label: "Projects", icon: BriefcaseIcon, href: "projects" },
  { label: "Education", icon: BuildingLibraryIcon, href: "education" },
  { label: "Contact", icon: EnvelopeIcon, href: "contact" },
  { label: "Milestone", icon: AcademicCapIcon },
];

const getGradientColor = (index) => {
  const gradientColors = [
    [107, 33, 168], // RGB equivalent of #6b21a8
    [31, 76, 142], // RGB equivalent of #1e3a8a
  ];
  const gradientSteps = 60 * (navItems.length - 1);

  // Calculate position ratio
  const positionRatio = (index * 60 + 20) / gradientSteps;

  // Interpolate between the colors
  const [r1, g1, b1] = gradientColors[0];
  const [r2, g2, b2] = gradientColors[1];

  const r = Math.round(r1 + (r2 - r1) * positionRatio);
  const g = Math.round(g1 + (g2 - g1) * positionRatio);
  const b = Math.round(b1 + (b2 - b1) * positionRatio);

  return `rgb(${r}, ${g}, ${b})`;
};

export function App() {
  const [activeLink, setActiveLink] = useState("");
  // Track the active section when the hash changes
  useEffect(() => {
    setActiveLink(window.location.hash);
  }, []);

  const { isDarkMode, setIsDarkMode } = useResponsive();
  const [size, setSize] = useState({ width: 0 });

  const toggleSize = () => {
    if (size.width === 0) {
      // Increase size to full screen
      setSize({ width: window.innerWidth * 5 });
    } else {
      // Reset size to 0
      setSize({ width: 0 });
    }
  };

  return (
    <>
      {/* Body Container */}
      <div className="w-screen min-h-screen overflow-hidden m-0 p-0 md:mt-0">
        {/* Dark Mode Overlay */}
        <div className="fixed top-20 left-48 flex flex-col items-center justify-center min-h-screen bg-lime-500">
          <div
            className={`rounded-full absolute top-0 left-0 ${
              size.width === 0
                ? "transition-all duration-500"
                : "transition-all duration-[1.5s]"
            }`}
            style={{
              width: `${size.width}px`,
              height: `${size.width}px`,
              marginTop: `${size.width - size.width * 1.5}px`,
              marginLeft: `${size.width - size.width * 1.5}px`,
              backgroundColor: "rgb(39 39 42)",
            }}
          ></div>
        </div>
        {/* Navbar Container */}
        <div className="fixed top-0 left-0 w-full min-h-20 md:w-56 md:h-screen bg-zinc-8000 shadow-lg z-50">
          {/* Navbar Content */}
          <nav>
            <div className="relative hidden md:flex flex-row items-center w-full h-20 border-b-2 border-zinc-700 px-5 mb-3">
              <img
                onClick={() => setIsDarkMode((prev) => !prev)}
                src="../src/img/shield.png"
                className="w-10 h-10"
                alt="Shield Icon"
              />
              <h3 className="ml-4 text-sky-800 font-medium">
                PRO
                <span
                  className={`font-normal transition-colors ${
                    size.width === 0
                      ? "text-zinc-900 transition-colors delay-200"
                      : "text-zinc-100 "
                  }`}
                >
                  {":"}File
                </span>
              </h3>
              <div
                onClick={() => {
                  toggleSize(); // Call the toggleSize function
                  setIsDarkMode((prev) => !prev); // Toggle dark mode
                }}
                className="absolute bottom-[-1.25rem] right-3 w-10 h-10 bg-zinc-700 rounded-full"
              ></div>
            </div>
            <ul className="relative hidden md:block flex-row md:flex-col space-y-3 pl-8 px-5 overflow-hidden">
              <div className="absolute top-2 left-4 w-[2px] h-full bg-gradient-to-t from-sky-800 to-purple-800 rounded-full">
                <div
                  className="absolute top-0 left-0 ml-[-7px] w-4 h-4 bg-zinc-800 border-[3px] rounded-full transition-all duration-500"
                  style={{
                    top: `${
                      navItems.findIndex(
                        (item) => `#${item.href}` === activeLink
                      ) *
                        60 +
                      20
                    }px`,
                    borderColor: getGradientColor(
                      navItems.findIndex(
                        (item) => `#${item.href}` === activeLink
                      )
                    ),
                  }}
                >
                  {/* Active Link Pointer */}
                </div>
              </div>

              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`group w-full flex items-center text-zinc-800 hover:bg-zinc-800/10 dark:hover:bg-zinc-100/20 space-x-5 rounded-md ${
                    activeLink === `#${item.href}` ? "" : ""
                  }`}
                >
                  {/* Conditionally render anchor tag for items with href */}
                  {item.href ? (
                    <a
                      href={`#${item.href}`}
                      className="flex items-center space-x-6 w-full py-2 pl-2 pr-4 text-zinc-800 dark:text-zinc-100" // Apply padding here
                      onClick={() => setActiveLink(`#${item.href}`)} // Update the active link on click
                    >
                      <div className="w-8 h-8 flex justify-center items-center">
                        <item.icon className="w-7 h-7 transition-colors delay-200 lg:delay-100" />
                      </div>
                      <span className="whitespace-nowrap transition-colors delay-200 lg:delay-100">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <a className="text-zinc-800 dark:text-zinc-100 transition-colors delay-200 lg:delay-100">
                      <div className="flex items-center space-x-6 w-full py-2 pl-2 pr-4">
                        <div className="w-8 h-8 flex justify-center items-center">
                          <item.icon className="w-7 h-7" />
                        </div>
                        <span className="whitespace-nowrap">{item.label}</span>
                      </div>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-0 left-0 px-3 py-1">
            <p className="text-xs">Vers 1.3.25</p>
          </div>
        </div>
        {/* Section */}
        <section
          id="home"
          className="relative w-full min-h-screen overflow-hidden"
        >
          {/* Content Container */}
          <div className="absolute top-0 left-0 w-full h-full pt-20 md:pl-56 md:p-0">
            <div className="relative max-w-[110rem] h-full mr-auto">
              <h1 className="text-zinc-800 dark:text-zinc-100 text-[2rem] font-mono font-semibold text-end transition-colors delay-300">
                SECTION 1
              </h1>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="relative w-full min-h-screen overflow-hidden"
        >
          {/* Content Container */}
          <div className="absolute top-0 left-0 w-full h-full p-0 md:pl-56 md:p-0">
            <div className="max-w-[110rem] h-full mr-auto px-2 md:px-5">
              <h1 className="text-zinc-800 dark:text-zinc-100 text-[2rem] font-mono font-semibold text-end">
                SECTION 2
              </h1>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer></footer>
      </div>
    </>
  );
}

export default App;
