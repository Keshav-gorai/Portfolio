import React from "react";
import aiTripPlanner from "../assets/aiTripPlanner.png"
import foodRecipe from "../assets/foodRecipe.png"
import toDoList from "../assets/toDoList.png"

const projects = [
  {
    id: 1,
    name: "Ai Trip Planner",
    technologies: "React, Vite, TailwindCss, Firebase, Gemini Api",
    image: aiTripPlanner,
    github: "https://github.com/Keshav-gorai/Ai-Trip-Planner",
  },
  {
    id: 2,
    name: "Food Recipe Book",
    technologies: "Html, Css, Javascript",
    image : foodRecipe,
    github: "https://github.com/Keshav-gorai/Recipe-Book",
  },
  {
    id: 2,
    name: "To do List",
    technologies: "Html, Css, Javascript",
    image : toDoList,
    github: "https://github.com/Keshav-gorai/To-Do-List",
  },
   
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-12" id="projects">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl text-center font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <img src={project.image} alt={project-name} className="rounded-lg mb-4w-full h-48 object-cover" />
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.technologies}</p>
                    <a href="" className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="blank" rel="noopener noreferrer">GitHub</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
