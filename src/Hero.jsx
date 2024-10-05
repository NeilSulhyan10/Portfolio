import { useState } from "react";
import photo from "./assets/photo.png";
import c from "./assets/c.png";
import cpp from "./assets/cpp.png";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("development");

  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row justify-evenly">
        <div className="md:mt-12 w-full md:w-[55%] text-center md:text-left">
          <h1 className="font-medium text-4xl dark:text-white animate-typing overflow-hidden whitespace-nowrap md:text-6xl">
            Hello,
          </h1>
          <h1 className="text-4xl md:text-9xl font-light dark:text-white animate-typing overflow-hidden whitespace-nowrap">
            I'm{" "}
            <span className="font-bold text-blue-800 dark:text-yellow-400">
              Neil
            </span>
          </h1>
          <h1 className="text-xl md:text-2xl font-light dark:text-white animate-typing overflow-hidden whitespace-nowrap leading-relaxed">
            Computer Science and Engineering Student.
          </h1>
          <p className="text-sm md:text-xl font-light dark:text-white animate-typing overflow-hidden whitespace-nowrap">
            I am a CSE student from Walchand College of Engineering.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={photo}
            alt="Profile"
            className="h-[60%] w-[60%] md:h-[90%] md:w-[90%] mx-auto"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center space-x-4 flex-wrap">
          <button
            onClick={() => setActiveSection("development")}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeSection === "development"
                ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveSection("competitive")}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeSection === "competitive"
                ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Competitive Programming
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center space-x-4 space-y-4">
          {activeSection === "development" ? (
            <>
              <div className="bg-gradient-to-r from-blue-800 to-purple-700 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 text-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 mb-4">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Tech Stack
                </h2>
                <div className="grid grid-cols-3 gap-6 justify-items-center mt-4">
                  <i className="fab fa-html5 text-8xl text-yellow-500"></i>
                  <i className="fab fa-css3-alt text-8xl text-blue-500"></i>
                  <i className="fab fa-js text-8xl text-yellow-300"></i>
                  <i className="fab fa-laravel text-8xl text-red-600"></i>
                  <i className="fab fa-react text-8xl text-cyan-400"></i>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gradient-to-r from-green-500 to-teal-400 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 text-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 mb-4">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Tech Stack
                </h2>
                <div className="flex justify-center mt-4">
                  <img
                    src={c}
                    className="w-44 h-44 transition-transform transform hover:scale-110"
                  />
                  <img
                    src={cpp}
                    className="w-44 h-44 transition-transform transform hover:scale-110"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
