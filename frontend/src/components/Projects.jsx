import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FOODIEFRENZY – FOOD ORDERING WEBSITE",
    description: "Technologies Used: React‑JS, Redux Toolkit, Tailwind CSS Built FoodieFrenzy, a responsive food ordering website with modern UI. Used Redux Toolkit for state management and added search/filter to browse food items by category. Tailwind CSS ensured a clean, fast, and mobile‑friendly design.",
    live: "https://foodiefrenzy.netlify.app",
    github: "https://github.com/Hammadsaeed55/food-ordering-website",
  },
  {
    title: "ECOMMERCE WEBSITE",
    description: "Technologies Used: MERN Stack, Firebase Developed a MERN‑based e‑commerce website with secure login/signup and Google authentication via Firebase. Added an admin panel for product management and built a shopping cart to add, view, and update item quantities.",
    live: "",
    github: "https://github.com/Hammadsaeed55/Mern-Ecommerce-website",
  },
  {
    title: "TODO APP",
    description: "Technologies Used: ReactJS Built a responsive ToDo app with features to add, delete, and manage tasks. Implemented task completion functionality and designed an interactive UI for seamless use across devices.",
    live: "https://dailydeeds.netlify.app/",
    github: "https://github.com/Hammadsaeed55/To-Do-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-16 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12 ">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between 
             transform transition duration-500 hover:scale-105 hover:shadow-yellow-400/50 hover:-translate-y-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 text-justify">{project.description}</p>
            </div>

            {/* Buttons always at bottom */}
            <div className="flex justify-between items-center mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:scale-110"
              >
                Live <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-black"
              >
                Learn More <FaGithub />
              </a>
            </div>
          </div>

        ))}
      </div>
      <div className="w-11/12 md:w-full  lg:w-full h-[2px] mt-8 mx-auto 
                rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
    </section>
  );
};

export default Projects;
