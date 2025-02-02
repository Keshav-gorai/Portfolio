import React from "react";
import AboutSection from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="bg-black text-white  py-12" id="about">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl text-center font-bold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a Passionate Frontend Developer with a focus on building
              modern and responsive web-applications, with a strong foundation
              in frontend tecnologies and database. I strieve to create seamless
              and efficient work experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-yellow-200">
                  HTML & Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-yellow-200">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-yellow-200">
                  React Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-yellow-200">
                  SQL & Firebase
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-yellow-200">
                  Git Git-Hub
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center ">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">Freshers</h3>
                    <p>Final Year Student</p>
                </div>  
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">6+</h3>
                    <p>Projects Completed</p>
                </div>  
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">8+</h3>
                    <p>Technologies learned</p>
                </div>   
            </div>
          </div>
          <img
            src={AboutSection}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
