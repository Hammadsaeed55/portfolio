import React from "react";
import resumePDF from "../assets/resume.pdf"; 

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen w-full bg-gray-900 text-white py-12 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12">
        My Resume
      </h2>

    
      <div className="flex justify-center mb-8">
        <iframe
          src={resumePDF}
          title="Resume"
          className="w-full md:w-3/4 h-[600px] rounded-lg shadow-lg border-2 border-yellow-400"
        ></iframe>
      </div>

     
      <div className="flex justify-center">
        <a
          href={resumePDF}
          download="Hammad_Saeed_Resume.pdf"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg 
                     shadow-md transform hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
      </div>
        <div className="w-11/12 md:w-full  lg:w-full h-[2px] mt-6 mx-auto 
                rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
    </section>
  );
};

export default Resume;
