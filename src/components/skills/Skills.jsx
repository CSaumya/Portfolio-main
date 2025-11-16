import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "text-cyan-400" },
    { icon: <FaReact />, name: "React", color: "text-cyan-300" },
    { icon: <SiRedux />, name: "Redux", color: "text-purple-400" },
    { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[#9EB3C2] text-lg md:text-2xl">Tools & Technologies</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#021a37]
                      ">
          Skills
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-full max-w-4xl">
        {skills.map((s, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center p-6 
                       rounded-2xl bg-blue-600/30 backdrop-blur-md 
                       border border-white/20 shadow-md 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                       transform hover:scale-105 hover:-translate-y-2 
                       transition duration-500"
          >
            <div
              className={`text-6xl ${s.color} mb-3 
                          drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
            >
              {s.icon}
            </div>
            <p className="text-white font-semibold group-hover:text-white">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
