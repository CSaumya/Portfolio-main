import React from "react";
import { FaReact, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

import biteBox from "../../assets/bite-box.png";
import nomadGo from "../../assets/nomad-go.png";
import eCommerce from "../../assets/e-commerce.png";

const Project = () => {
  const projects = [
    {
      title: "Bite Box",
      subtitle: "Order Placing Website",
      img: biteBox,
      desc: "Bite Box is a modern food ordering web app that lets users browse meals, explore categories, and add items to their cart with ease. Responsive, fast, and user-friendly.",
      tech: [<FaReact />, <SiRedux />, <SiTailwindcss />],
      github: "https://github.com/CSaumya/Bite-Box",
      live: "https://bite-box-nine.vercel.app/",
    },
    {
      title: "Nomad-Go",
      subtitle: "Tour And Travel Website",
      img: nomadGo,
      desc: "Nomad Go is a travel companion web app that helps users discover destinations, plan trips, and explore experiences with ease. Clean UI + responsive design.",
      tech: [<FaReact />, <SiTailwindcss />],
      github: "https://github.com/CSaumya/Nomad-Go",
      live: "https://nomad-go.vercel.app/",
    },
    {
      title: "StyleSphere",
      subtitle: "Multi-page Shopping Website",
      img: eCommerce,
      desc: "Stylesphere is a fashion e-commerce app offering an effortless way to browse modern outfits. Sleek UI, multi-page design, and smooth user experience.",
      tech: [<FaReact />, <FaCss3Alt />],
      github: "https://github.com/CSaumya/StyleSphere",
      live: "https://style-sphere-nine.vercel.app/",
    },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-10 h-[150px]">
        <p className="text-[#9EB3C2] text-lg md:text-2xl">My Learnings So Far</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#021a37]">
          Featured Projects
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 items-center justify-start text-white 
            bg-[#001d3d] rounded-xl p-6 shadow-lg h-[500px] 
            border border-white/10 backdrop-blur 
            hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
            transition-all duration-500"
          >
            <p className="text-lg md:text-xl opacity-80">{p.subtitle}</p>
            <h3 className="font-bold text-2xl md:text-3xl">{p.title}</h3>

            {/* Image */}
            <div className="overflow-hidden rounded-lg w-full max-w-[350px]">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full rounded-lg group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-center max-w-[500px] opacity-90">
              {p.desc}
            </p>

            {/* Tech + Links */}
            <div className="flex gap-4 w-full justify-center mt-4">

              {/* Tech Stack */}
              <div className="flex items-center gap-3 bg-blue-800 rounded-3xl px-5 w-[120px] h-[42px] shadow-md">
                {p.tech.map((icon, idx) => (
                  <span key={idx} className="text-xl">{icon}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 bg-blue-800 rounded-3xl px-5 w-[120px] h-[42px] shadow-md cursor-pointer">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    size={28}
                    className="hover:scale-125 transition text-white border-r-2 pr-2"
                  />
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  Live⚡
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;
