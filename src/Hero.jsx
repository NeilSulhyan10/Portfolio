import photo from "./assets/photo.png";

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
        </div>
        <div>
          <img
            src={photo}
            alt="Profile"
            className="h-[60%] w-[60%] md:h-[100%] md:w-[100%] mx-auto"
          />
        </div>
      </div>
    </>
  );
}
