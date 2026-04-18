import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 text-center scroll-smooth"
      id="hero"
    >
      <div className="px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white ">
          Hello,
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 animate-pulse">
          I'm Hammad Saeed
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          I'm a Full Stack Web Developer
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/hammad-saeed-666252244"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition duration-300 transform hover:scale-105"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Hammadsaeed55"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition duration-300 transform hover:scale-105"
          >
            GitHub
          </a>
        </div>

       {/* down buttom */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="w-14 h-14 flex items-center justify-center border-2 border-yellow-400 
                       text-yellow-400 text-3xl font-extrabold rounded-full shadow-lg 
                       transition-all duration-300 ease-in-out 
                       hover:bg-yellow-400 hover:text-black  animate-bounce cursor-pointer"
          >
            <MdKeyboardDoubleArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
