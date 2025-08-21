import { useState } from "react";
import ProjectCard from "./ProjectCard";
import algorithm from "../assets/images/projects_img/algorithm.png";
import ml_simulator from "../assets/images/projects_img/ml_simulator.png";
import posture from "../assets/images/projects_img/posture.png";
import myntra from "../assets/images/projects_img/myntra.png";
import DSA_assisstant from "../assets/images/projects_img/DSA_assisstant.png";
import aim_game from "../assets/images/projects_img/aim_game.png";
import dark_pattern from "../assets/images/projects_img/dark_pattern.png";
import turtle from "../assets/images/projects_img/turtle.png";
import shortest_path from "../assets/images/projects_img/shortest_path.png";
import typing_test from "../assets/images/projects_img/typing_test.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Tech Society Website",
      description: "Full Stack Development",
      imgUrl: algorithm,
      link: "https://algorithm-east.vercel.app/",
    },
    {
      title: "ML Simulator",
      description: "Full Stack Development & Machine Learning",
      imgUrl: ml_simulator,
      link: "https://github.com/MishitaJain05/ml-simulator",
    },
    {
      title: "Posture Detection",
      description: "Javascript, ML5",
      imgUrl: posture,
      link: "https://github.com/MishitaJain05/posture-detection",
    },
    {
      title: "DSA Assistant",
      description: "LLM and Streamlit",
      imgUrl: DSA_assisstant,
      link: "https://github.com/MishitaJain05/Dsa_assistant",
    },
    {
      title: "Dark Pattern Buster",
      description: "Full Stack Development and Machine Learning",
      imgUrl: dark_pattern,
      link: "https://github.com/MishitaJain05/dark_patterns",
    },
    {
      title: "Myntra Clone",
      description: "Javascript",
      imgUrl: myntra,
      link: "https://github.com/MishitaJain05/Myntra-Clone",
    },
    {
      title: "Turtle Race",
      description: "Python",
      imgUrl: turtle,
      link: "https://github.com/MishitaJain05/Turtle-Race",
    },
    {
      title: "Typing Test",
      description: "Python",
      imgUrl: typing_test,
      link: "https://github.com/MishitaJain05/typing_test",
    },
    {
      title: "Aim Game",
      description: "Python",
      imgUrl: aim_game,
      link: "https://github.com/MishitaJain05/Aim-Game",
    },
    {
      title: "Shortest Path",
      description: "Python",
      imgUrl: shortest_path,
      link: "https://github.com/MishitaJain05/Shortest-Path-Finder",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-[#0a0a0a] min-h-screen rounded-[48px]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">
                Projects
              </h2>
              <p className="text-[#B8B8B8] text-lg text-center mb-10">
                Here are some projects demonstrating my efficiency in applying
                technical skills to solve real-world problems.
              </p>
              {/* Tabs */}
              <div className="flex justify-center mb-8 space-x-4">
                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === "first"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-purple-700"
                  }`}
                  onClick={() => setActiveTab("first")}
                >
                  Tab 1
                </button>
                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === "second"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-purple-700"
                  }`}
                  onClick={() => setActiveTab("second")}
                >
                  Tab 2
                </button>
                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === "third"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-purple-700"
                  }`}
                  onClick={() => setActiveTab("third")}
                >
                  Tab 3
                </button>
              </div>
              {/* Tab Content */}
              <div
                className={
                  isVisible ? "animate__animated animate__slideInUp" : ""
                }
              >
                {activeTab === "first" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 6).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </div>
                )}
                {activeTab === "second" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(6).map((project, index) => (
                      <ProjectCard key={index + 6} {...project} />
                    ))}
                  </div>
                )}
                {activeTab === "third" && (
                  <div className="text-[#B8B8B8] text-center py-8">
                    <p>
                      This tab is under construction. More projects will be
                      added soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};
