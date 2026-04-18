import React, { useState } from "react";
import myImage from "../assets/image.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <>
      <section
        id="about"
        className="min-h-screen w-full bg-gray-900 text-white py-12 px-6 md:px-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="flex justify-center animate-slideInLeft">
            <img
              src={myImage}
              alt="Hammad Saeed"
              className="rounded-xl w-56 h-56 md:w-64 md:h-74 
             object-cover border-2 border-yellow-400 
             shadow-sm shadow-yellow-400/50 
             transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-lg leading-relaxed text-justify">
              Hi, I'm <span className="text-yellow-400 font-bold">Hammad Saeed</span>,
              a passionate Full Stack Web Developer, skilled in both frontend and backend technologies.
              I have a strong foundation in JavaScript, React, Node.js, and MongoDB, allowing me to create
              dynamic and responsive web applications. I am dedicated to continuous learning and always eager
              to take on new challenges in the world of web development.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "contact"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent hover:text-yellow-300"
                  }`}
              >
                Contact & Address
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "education"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent hover:text-yellow-300"
                  }`}
              >
                Education
              </button>

              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "certifications"
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent hover:text-yellow-300"
                  }`}
              >
                Certifications
              </button>

            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              {activeTab === "contact" && (
                <div className="space-y-2">
                  <p><span className="font-semibold text-yellow-400">Email : </span> <span className="text-gray-300">hammadsaeed6702@gmail.com</span></p>
                  <p><span className="font-semibold text-yellow-400">Phone : </span> <span className="text-gray-300">+91-8126551926</span></p>
                  <p><span className="font-semibold text-yellow-400">Address : </span> <span className="text-gray-300">Shahabad dist-Rampur UP 244922</span></p>
                </div>
              )}

              {activeTab === "certifications" && (
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Workshop Completion Certificate Organized By SOFTPRO INDIA</li>
                  <li>Python programming training certificate at Teerthanker Mahaveer University</li>
                  <li>Brain Manthon Certificate for participating in 1st round at Teerthanker Mahaveer University</li>
                </ul>
              )}

              {activeTab === "education" && (
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li><span className="text-yellow-400 font-semibold">MCA-<span className="font-normal text-xs underline">2025</span></span> - Teerthanker Mahaveer University</li>
                  <li><span className="text-yellow-400 font-semibold">BCA-<span className="font-normal text-xs underline">2023</span></span> - Teerthanker Mahaveer University</li>
                  <li><span className="text-yellow-400 font-semibold">Intermediate-<span className="font-normal text-xs underline">2020</span></span> - Shaheed Bhagat Singh Inter College</li>
                  <li><span className="text-yellow-400 font-semibold">High School-<span className="font-normal text-xs underline">2018</span></span> - Shaheed Bhagat Singh Inter College</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-full  lg:w-full h-[2px] mt-4 mx-auto 
                rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"></div>

      </section>
    </>


  );
};

export default About;
