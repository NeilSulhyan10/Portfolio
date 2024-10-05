import React from "react";
import useDarkMode from "./useDarkMode";
import Hero from "./Hero";

export default function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="text-black dark:text-white flex justify-evenly items-center">
          <div>
            <p className="text-6xl text-blue-800 dark:text-yellow-400">Neil</p>
          </div>
          <div className=" mt-6 grid grid-cols-3 gap-12">
            <a href="" className="text-xl font-bold col-span-1">
              Home
            </a>
            <a href="" className="text-xl font-bold col-span-1">
              About
            </a>
            <a href="" className="text-xl font-bold col-span-1">
              Projects
            </a>
          </div>
          <div>
            <button
              onClick={() => setTheme(colorTheme)}
              className="mt-4 rounded w-16 h-16"
            >
              <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
          </div>
        </div>
        <Hero/>
      </div>
    </>
  );
}
