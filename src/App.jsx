import "react";
import { useState } from "react";
import "./App.css";

export function App() {
  const [isFirstToggled, setIsFirstToggled] = useState(false);
  const [isSecondToggled, setIsSecondToggled] = useState(false);

  const handleFirstToggle = () => {
    setIsFirstToggled(!isFirstToggled);
  };

  const handleSecondToggle = () => {
    setIsSecondToggled(!isSecondToggled);
  };

  const handleCloseSidebar = () => {
    setIsFirstToggled(false);
  };

  return (
    <>
      {/* Buttons to toggle the sidebar */}
      <div>
        <button className="hidden" onClick={handleFirstToggle}>
          {isFirstToggled ? "First ON" : "First OFF"}
        </button>
        <button className="hidden" onClick={handleSecondToggle}>
          {isSecondToggled ? "Second ON" : "Second OFF"}
        </button>
      </div>

      <div className="min-h-14 w-screen py-2 px-4 bg-white bg-opacity-0 backdrop-blur-md overflow-hidden">
        <img
          className="w-10 h-10 rounded-full border-2 border-zinc-800 ml-auto"
          src="../src/img/10.jpg"
          alt="Image"
          onClick={handleFirstToggle}
        />
      </div>

      {/* Dimmed background overlay */}
      {isFirstToggled && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-10"
          onClick={handleCloseSidebar} // Close sidebar when clicking the background
        ></div>
      )}

      {/* Sidebar */}
      <div
        className="sidebar-container"
        style={isFirstToggled ? { right: "0.5rem" } : { right: "-20rem" }}
      >
        {/* Button in the top right corner */}
        <button
          className="w-9 h-9 custom-button text-white text-lg bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 ease-in-out"
          onClick={handleFirstToggle}
        ></button>
      </div>
    </>
  );
}

export default App;
