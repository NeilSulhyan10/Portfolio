import { useState } from "react";
import c from "./assets/c.png";
import cpp from "./assets/cpp.png";
import java from "./assets/java.png";
import springboot from "./assets/springboot.png";

export default function Tech() {
  const [activeSection, setActiveSection] = useState("development");

  return (
    <>
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-center dark:text-white mb-8">
          Tech Stack
        </h2>
        <div className="flex justify-center space-x-4 flex-wrap">
          <button
            onClick={() => setActiveSection("development")}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 backdrop-blur-lg border ${
              activeSection === "development"
                ? "border-pink-500 text-pink-500 shadow-[0_0_12px_#ff1d96ff] dark:border-cyan-400 dark:text-[rgba(34,211,238,0.8)] dark:text-white dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                : "border-gray-800 text-slate-400 hover:border-gray-600"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveSection("competitive")}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 backdrop-blur-lg border ${
              activeSection === "competitive"
                ? "border-pink-500 text-pink-500 shadow-[0_0_12px_#ff1d96ff] dark:border-cyan-400 dark:text-[rgba(34,211,238,0.8)] dark:text-white dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                : "border-gray-800 text-slate-400 hover:border-gray-600"
            }`}
          >
            Competitive Programming
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center space-x-4 space-y-4">
          {activeSection === "development" ? (
            <>
              <div className="backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl p-6 text-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 mb-4">
                <div className="grid grid-cols-3 gap-6 justify-items-center mt-4">
                  <i className="fab fa-react text-8xl text-cyan-400 transition-transform transform hover:scale-110"></i>
                  <i className="fa-brands fa-node text-8xl text-green-400 transition-transform transform hover:scale-110"></i>
                  <img
                    src={springboot}
                    className="w-32 h-24 transition-transform transform hover:scale-110 rounded-lg"
                  />
                  <i className="fab fa-html5 text-8xl text-yellow-500 transition-transform transform hover:scale-110"></i>
                  <i className="fab fa-css3-alt text-8xl text-blue-500 transition-transform transform hover:scale-110"></i>
                  <i className="fab fa-js text-8xl text-yellow-300 transition-transform transform hover:scale-110"></i>
                  <i className="fab fa-laravel text-8xl text-red-600 transition-transform transform hover:scale-110"></i>
                  <i className="bg-[linear-gradient(to_bottom,#2563eb_50%,#facc15_50%)] bg-clip-text text-transparent fab fa-python text-8xl transition-transform transform hover:scale-110"></i>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl p-6 text-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105 mb-4 flex justify-evenly items-center space-x-4">
                <img
                  src={cpp}
                  className="w-32 h-44 transition-transform transform hover:scale-110 rounded-lg"
                />
                <img
                  src={java}
                  className="w-28 h-40 transition-transform transform hover:scale-110 rounded-lg"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
