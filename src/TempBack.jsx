import "react";
import "./App.css";

export function App() {
  return (
    <>
      {/* Base Containder */}
      <div className="relative w-screen h-screen bg-zinc-800">
        {/* Viewport Limiter */}
        <div className="max-w-[120rem] min-h-screen bg-white mx-auto">
          {/* Navbar Container */}
          <div>
            {/* Navbar Content */}
            <nav></nav>
          </div>
          {/* Section */}
          <section id="">
            <h1 className="text-zinc-800 text-[5rem]">Whereas disregard and contempt for human rights have resulted</h1>
          </section>
          {/* Footer */}
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;
