import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";
import reactLogo from "../assets/react.png";
import mysqlLogo from "../assets/sql.png";
import bootstrapLogo from "../assets/bootstrap.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/github.png";
import vscodeLogo from "../assets/vscode.png";
import canvaLogo from "../assets/canva.png";
import postmanLogo from "../assets/postman.png";
import expressLogo from "../assets/express.png"

const coreSkills = [
  { logo: htmlLogo, name: "HTML" },
  { logo: cssLogo, name: "CSS" },
  { logo: jsLogo, name: "JavaScript" },
  { logo: reactLogo, name: "ReactJS" },
  { logo: nodeLogo, name: "NodeJS" },
  { logo: expressLogo, name: "ExpressJS" },
  { logo: mongoLogo, name: "MongoDB" },
  { logo: mysqlLogo, name: "MySQL" },
  { logo: bootstrapLogo, name: "Bootstrap" },
  { logo: tailwindLogo, name: "TailwindCSS" },
];

const otherSkills = [
  { logo: gitLogo, name: "GitHub" },
  { logo: postmanLogo, name: "Postman" },
  { logo: vscodeLogo, name: "VS Code" },
  { logo: canvaLogo, name: "Canva" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-gray-900 text-white py-1 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12">
        My Skills
      </h2>

      {/* Core Skills */}
      <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-6 ">
        Core Technologies
      </h3>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
        {coreSkills.map((skill, index) => (
          <div
            key={index}
            className="flex  flex-col items-center p-4 bg-gray-800 rounded-xl 
                       border-2 border-yellow-400 shadow-md 
                       transform hover:scale-110 hover:rotate-3 transition duration-500"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 md:w-21 md:h-21 object-contain mb-2"
            />
            <p className="text-sm md:text-base font-semibold text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Other Skills */}
      <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-6">
        Other Tools
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {otherSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-xl 
                       border-2 border-yellow-400 shadow-md 
                       transform hover:scale-110 hover:rotate-3 transition duration-500"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 md:w-25 md:h-25 object-contain mb-2"
            />
            <p className="text-sm md:text-base font-semibold text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-11/12 md:w-full  lg:w-full h-[2px] mt-6 mx-auto 
                rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
    </section>
  );
};

export default Skills;
