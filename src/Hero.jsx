import photo from "./assets/NeilPic.png";
import resume from "./assets/Neil Sulhyan May '25.pdf";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="md:mt-32 w-full md:w-[40%] text-center md:text-left">
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
          <a
            href={resume}
            download="Neil Sulhyan Resume"
            className="mt-6 inline-block px-6 py-3 bg-blue-800 dark:bg-yellow-400 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500 text-center"
          >
           <i className="fa-solid fa-download"></i> Resume
          </a>
        </div>
        <div>
          <img
            src={photo}
            alt="Profile"
            className="h-[60%] w-[60%] md:h-[100%] md:w-[75%] mx-auto drop-shadow-blue-sharp dark:drop-shadow-yellow-sharp hover:transition-transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}
