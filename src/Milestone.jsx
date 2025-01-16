import "react";

const Milestone = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Only render if visible

  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center overflow-y-auto overflow-x-hidden">
      <div className="relative max-w-7xl min-h-96 mx-auto py-16 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="absolute top-0 right-10 hover:scale-125">
          <button
            onClick={onClose}
            className="font-thin text-white text-[3rem] lg:text-[4rem]"
          >
            &times;
          </button>
        </div>
        <img
          className="max-w-96 lg:max-w-xl h-auto border-4 border-slate-100 dark:border-slate-200 transition-transform duration-500 shadow-lg lg:rotate-3"
          src="/src/img/grad.jpg"
          alt="Profile"
        />
        <div className="px-10 md:px-20 lg:px-5 w-full lg:max-w-96 lg:text-left text-slate-100 space-y-10">
          <h1 className="text-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-base flex items-center text-sky-400">
              Graduate Batch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="ml-2 size-12"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0..." />
              </svg>
            </span>
            <span>2019 - 2023</span>
          </h1>

          <p className="text-base">
            Earning my Bachelor of Science in Information Technology (BSIT) from
            Pamantasan ng Lungsod ng Muntinlupa has been a journey filled with
            challenges and growth...
          </p>
          <h1 className="text-base">
            Respectfully Yours:
            <span className="block"></span>Paul Rey Morales Cabas
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
