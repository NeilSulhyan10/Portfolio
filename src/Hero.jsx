import { useState } from "react";
import photo from "./assets/photo.png";
import c from "./assets/c.png";
import cpp from "./assets/cpp.png";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("development");

  return (
    <>
      <main>
        <div className="mt-20 flex justify-evenly">
          <div className="mt-28">
            <h1 className="font-medium text-xl dark:text-white">Hello,</h1>
            <h1 className="text-4xl font-light dark:text-white">
              I'm{" "}
              <span className="font-bold text-blue-800 dark:text-yellow-400">
                Neil
              </span>
            </h1>
            <h1 className="text-4xl font-light dark:text-white">
              Computer Science and Engineering Student
            </h1>
            <p className="text-xl font-light dark:text-white">
              I am a CSE student from Walchand College of Engineering.
            </p>
          </div>
          <div>
            <img src={photo} alt="Profile" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center space-x-4">
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
                <div className="bg-gradient-to-r from-blue-800 to-purple-700 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 text-white w-72 transition-transform transform hover:scale-105">
                  <h2 className="text-xl font-semibold mb-4 text-center">Tech Stack</h2>
                  <div className="grid grid-cols-3 gap-6 justify-items-center mt-4">
                    <i className="fab fa-html5 text-4xl hover:text-yellow-500"></i>
                    <i className="fab fa-css3-alt text-4xl hover:text-blue-500"></i>
                    <i className="fab fa-js text-4xl hover:text-yellow-300"></i>
                    <i className="fab fa-laravel text-4xl hover:text-red-600"></i>
                    <i className="fab fa-react text-4xl hover:text-cyan-400"></i>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-r from-green-500 to-teal-400 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 text-white w-72 transition-transform transform hover:scale-105">
                  <h2 className="text-xl font-semibold mb-4 text-center">
                  Tech Stack
                  </h2>
                  <div className="flex justify-center mt-4">
                    <img src={c} className="w-20 h-20 transition-transform transform hover:scale-110" />
                    <img src={cpp} className="w-20 h-20 transition-transform transform hover:scale-110" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
