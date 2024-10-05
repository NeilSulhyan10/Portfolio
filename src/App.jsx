import React from "react";
import useDarkMode from "./useDarkMode";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="text-black dark:text-white flex justify-between items-center p-6">
          <div>
            <p className="text-6xl sm:text-6xl text-blue-800 dark:text-yellow-400">N</p>
          </div>
          <div className="md:flex space-x-8 mt-6 ml-4 md:mt-0">
            <a href="#" className="text-xl font-bold">
              Home
            </a>
            <a href="#" className="text-xl font-bold">
              About
            </a>
            <a href="#" className="text-xl font-bold">
              Projects
            </a>
          </div>
          <div>
            <button
              onClick={() => setTheme(colorTheme)}
              className="mt-4 rounded w-16 h-16"
            >
              <i className="fa-solid fa-circle-half-stroke"></i>
            </button>
          </div>
        </div>
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
