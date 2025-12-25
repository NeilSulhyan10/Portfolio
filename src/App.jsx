import { useRef, useState } from "react";
import useThemeMode from "./lib/useThemeMode.js";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
import Tech from "./Tech.jsx";
import { Vortex } from "./background";
import { Meteors } from "./meteors.jsx";

export default function App() {
  const [colorTheme, toggleTheme] = useThemeMode();
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionRef, section) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <>
      <div className="dark:bg-black min-h-screen">
        <Vortex
          theme={colorTheme}
          rangeY={1500}
          particleCount={1000}
          baseHue={colorTheme === "dark" ? 520 : 999}
          className="w-full h-full"
        >
          <div className="text-black dark:text-white flex justify-between items-center p-6">
            <div>
              <p className="text-5xl md:text-6xl text-pink-600 dark:text-[#22D3EE]">
                N
              </p>
            </div>
            <div className="md:flex space-x-8 mt-6 ml-4 md:mt-0 relative">
              <a
                href="#"
                className={`text-xl font-bold ${
                  activeSection === "home"
                    ? "border-b-4 border-pink-600 dark:border-[#22D3EE]"
                    : ""
                }`}
                onClick={() => scrollToSection(homeRef, "home")}
              >
                Home
              </a>
              <a
                href="#"
                className={`text-xl font-bold ${
                  activeSection === "about"
                    ? "border-b-4 border-pink-600 dark:border-[#22D3EE]"
                    : ""
                }`}
                onClick={() => scrollToSection(aboutRef, "about")}
              >
                About
              </a>
              <a
                href="#"
                className={`text-xl font-bold ${
                  activeSection === "projects"
                    ? "border-b-4 border-pink-600 dark:border-[#22D3EE]"
                    : ""
                }`}
                onClick={() => scrollToSection(projectsRef, "projects")}
              >
                Projects
              </a>
            </div>
            <div>
              <button onClick={toggleTheme} className="mt-4 rounded w-16 h-16">
                <i className="fa-solid fa-circle-half-stroke"></i>
              </button>
            </div>
          </div>
          <div ref={homeRef}>
            <Hero />
          </div>
          <div ref={aboutRef} className="flex justify-center">
            <div className="mt-48 relative flex w-[80%] h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 backdrop-blur-md px-4 py-8 shadow-xl">
              <h1 className="relative z-50 mb-4 text-4xl font-bold text-black dark:text-white flex justify-center w-full">
                About Me
              </h1>
              <p className="relative z-50 mb-4 text-base font-normal text-xl text-slate-500">
                Passionate about technology and problem-solving, I thrive in
                coding. Excited to learn and grow about new technology, I'm
                always ready for new challenges and opportunities. Outside of
                academics, I love photography and Video Editing.
              </p>
              <Meteors number={20} />
            </div>
          </div>
          <Tech />
          <div ref={projectsRef}>
            <Projects />
          </div>
          <Footer />
        </Vortex>
      </div>
    </>
  );
}
