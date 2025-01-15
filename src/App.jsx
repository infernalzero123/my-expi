import "react";
import "./App.css";

export const App = () => {
  return (
    <>
      {/* Base Containder */}
      <div className="relative w-screen min-h-screen bg-zinc-800">
        {/* Viewport Limiter */}
        <div className="relative max-w-[120rem] min-h-screen bg-white mx-auto overflow-hidden">
          {/* Navbar Container */}
          <div>
            {/* Navbar Content */}
            <nav></nav>
          </div>
          {/* Section */}
          <section id="" className="w-full min-h-screen bg-sky-500">
            <div>
              <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
                WHAT I DO
              </h1>
            </div>
          </section>
          <section id="" className="w-full min-h-screen bg-sky-800">
            <div>
              <h1 className="text-zinc-800 text-[2rem] font-mono font-semibold">
                section 2
              </h1>
            </div>
          </section>
          {/* Footer */}
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default App;
