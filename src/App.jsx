import "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);




export function App() {
  return (
    <>
      {/* Base Container */}
      <div className="relative w-screen min-h-screen bg-zinc-800 overflow-hidden m-0 p-0">
        {/* Viewport Limiter */}
        <div className="relative max-w-[120rem] min-h-screen bg-white mx-auto overflow-hidden m-0 p-0">
          {/* Navbar Container */}
          <div>
            {/* Navbar Content */}
            <nav></nav>
          </div>
          {/* Section */}
          <section
            id=""
            className="w-full min-h-screen bg-sky-500 overflow-hidden box-border m-0 p-0"
          >
            <div>
              <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
                WHAT I DO
                <FontAwesomeIcon icon="fa-solid fa-house" size="5x" />
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
      </div>
    </>
  );
}

export default App;
