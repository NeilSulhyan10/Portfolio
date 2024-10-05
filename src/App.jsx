import React, { useRef, useState } from "react";
import useDarkMode from "./useDarkMode";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
import Tech from "./Tech.jsx";

export default function App() {
  const [colorTheme, setTheme] = useDarkMode();
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
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="text-black dark:text-white flex justify-between items-center p-6">
          <div>
            <p className="text-6xl sm:text-6xl text-blue-800 dark:text-yellow-400">
              N
            </p>
          </div>
          <div className="md:flex space-x-8 mt-6 ml-4 md:mt-0 relative">
            <a
              href="#"
              className={`text-xl font-bold ${activeSection === "home" ? 'border-b-4 border-blue-800 dark:border-yellow-400' : ''}`}
              onClick={() => scrollToSection(homeRef, "home")}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-xl font-bold ${activeSection === "about" ? 'border-b-4 border-blue-800 dark:border-yellow-400' : ''}`}
              onClick={() => scrollToSection(aboutRef, "about")}
            >
              About
            </a>
            <a
              href="#"
              className={`text-xl font-bold ${activeSection === "projects" ? 'border-b-4 border-blue-800 dark:border-yellow-400' : ''}`}
              onClick={() => scrollToSection(projectsRef, "projects")}
            >
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
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <div>
            <h1 className="mt-4 text-4xl text-center mb-4 font-bold dark:text-white">
              About Me
            </h1>
            <p className="text-lg font-light p-4 dark:text-white md:text-3xl">
              I'm a Computer Science and Engineering student at WCE Sangli.
              Passionate about technology and problem-solving, I thrive in
              coding. Excited to learn and grow at WCE Sangli, I'm always ready
              for new challenges and opportunities. Outside of academics, I love
              photography and Video Editing.
            </p>
          </div>
        </div>
        <Tech />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
