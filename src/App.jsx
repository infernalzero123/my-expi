import "react";
import "./App.css";
import { useResponsive } from "./Responsive";
import Home from "./Home";
import About from "./About";
import Knowledge from "./Knowledge";
//import Projects from "./Projects";
//import Education from "./Education";
//import Contact from "./Contact";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

// Render Navbar Manu
const navItems = [
  { label: "Home", icon: HomeIcon, href: "home" },
  { label: "About", icon: UserIcon, href: "about" },
  { label: "Knowledge", icon: BookOpenIcon, href: "knowledge" },
  { label: "Projects", icon: BriefcaseIcon, href: "projects" },
  { label: "Education", icon: BuildingLibraryIcon, href: "education" },
  { label: "Contact", icon: EnvelopeIcon, href: "contact" },
  { label: "Milestone", icon: AcademicCapIcon },
];

// Render Section
const renderSection = [
  { name: "About", id: "about", component: <About /> },
  { name: "Knowledge", id: "knowledge", component: <Knowledge /> },
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
  const [activeLink, setActiveLink] = useState("home");
  const { isDarkMode, setIsDarkMode } = useResponsive();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is inside the section
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          currentSection = `#${section.id}`;
        }
      });

      // Update the active link if necessary
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== activeLink) {
      setActiveLink(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.hash]);

  const [size, setSize] = useState(() => {
    // Initialize size based on dark mode or previous state
    return isDarkMode ? { width: window.innerWidth * 5 } : { width: 0 };
  });

  const toggleSize = () => {
    if (isDarkMode) {
      // Reset size to 0 when dark mode is not active
      setSize({ width: 0 });
    } else {
      // Set width to 5 times the window width when dark mode is active
      setSize({ width: window.innerWidth * 5 });
    }
  };

  useEffect(() => {
    // Adjust size on page load based on isDarkMode
    if (isDarkMode) {
      setSize({ width: window.innerWidth * 5 });
    } else {
      setSize({ width: 0 });
    }

    const handleResize = () => {
      if (isDarkMode) {
        setSize({ width: window.innerWidth * 5 });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      const savedSize = localStorage.getItem("size") || window.innerWidth * 3;
      setSize({ width: parseInt(savedSize, 10) });
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("size", size.width);
    }
  }, [size, isDarkMode]);

  return (
    <>
      {/* Body Container */}
      <div className="w-screen min-h-screen overflow-hidden m-0 p-0 lg:mt-0">
        {/* Dark Mode Overlay */}
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center min-h-screen">
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
        <div
          className={`fixed top-0 left-0 w-full min-h-20 lg:w-56 lg:h-screen shadow-lg transition-opacity duration-500 z-50 ${
            activeLink !== "#home"
              ? "opacity-100 pointer-events-auto" // When activeLink is not "#home", show and make clickable
              : "opacity-0 pointer-events-none" // When activeLink is "#home", hide and make non-clickable
          }`}
        >
          {/* Navbar Content */}
          <nav>
            <div
              className={`relative hidden lg:flex flex-row items-center w-full h-20 border-b-2 border-zinc-200 dark:border-zinc-700 px-5 mb-5 ${
                isDarkMode
                  ? "transition-colors duration-200 delay-100"
                  : "transition-colors duration-200 delay-300"
              }`}
            >
              <img
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
                      : "text-zinc-100 transition-colors delay-100"
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
                className="absolute flex justify-center items-center bottom-[-1.25rem] right-2 w-10 h-10 bg-zinc-100 dark:bg-zinc-700 border-2 border-zinc-200 dark:border-transparent rounded-full transition-all duration-400 delay-100 ease-in-out shadow-md dark:shadow-sky-800"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-zinc-700 dark:text-zinc-100 transition-all duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-orange-300 dark:text-zinc-100 rotate-45 transition-all duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </div>
            </div>
            <ul className="relative hidden lg:block flex-row lg:flex-col space-y-3 pl-8 px-5 overflow-hidden">
              <div className="absolute top-2 left-4 w-[2px] h-full bg-gradient-to-t from-sky-800 to-purple-800 rounded-full">
                <div
                  className="absolute top-0 left-0 ml-[-7px] w-4 h-4 border-[3px] overflow-hidden rounded-full transition-all duration-200 delay-100"
                  style={{
                    top: `${
                      navItems.findIndex(
                        (item) => `#${item.href}` === activeLink
                      ) *
                        60 +
                      20
                    }px`,
                    backgroundColor: getGradientColor(
                      navItems.findIndex(
                        (item) => `#${item.href}` === activeLink
                      )
                    ),
                    borderColor: getGradientColor(
                      navItems.findIndex(
                        (item) => `#${item.href}` === activeLink
                      )
                    ),
                  }}
                ></div>
              </div>

              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`group w-full flex items-center hover:bg-zinc-500/20 hover:dark:bg-zinc-500/30 space-x-5 rounded-md ${
                    activeLink === `#${item.href}`
                      ? "bg-zinc-500/10 dark:bg-zinc-500/20"
                      : ""
                  }`}
                >
                  {/* Conditionally render anchor tag for items with href */}
                  {item.href ? (
                    <a
                      href={`#${item.href}`}
                      className="flex items-center space-x-6 w-full py-2 pl-2 pr-4 text-zinc-800 dark:text-zinc-100" // Apply padding here
                      onClick={() => setActiveLink(`#${item.href}`)} // Update the active link on click
                    >
                      <div className="w-8 h-8 flex justify-center items-center transition-colors delay-100 lg:delay-200">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <span className="whitespace-nowrap transition-colors delay-100 lg:delay-200">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <a className="text-zinc-800 dark:text-zinc-100 transition-colors delay-300 lg:delay-200">
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
        <div>
          <section
            id="home"
            className={`relative w-full h-auto overflow-hidden ${
              activeLink === `#home`
                ? "transition-opacity duration-1000 opacity-100"
                : "transition-opacity duration-0 delay-100 opacity-0"
            }`}
          >
            <Home />
          </section>
          {renderSection.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`relative w-full min-h-screen overflow-hidden ${
                activeLink === `#${section.id}`
                  ? "transition-opacity duration-1000 opacity-100"
                  : "transition-opacity duration-0 delay-100 opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-full p-0 lg:pl-56 lg:p-0">
                <div className="relative max-w-[110rem] h-full mr-auto px-5 py-5 lg:px-10">
                  {section.component}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
