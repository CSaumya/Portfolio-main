import React from "react";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import todo from "../../assets/Todo.png";
import weather from "../../assets/weather.png";
import razorpay from "../../assets/razorpay.png";
import mail from "../../assets/mailify.png";
import ticTac from "../../assets/tic-tac-toe.png";

// Project Data
const projects = [
  {
    id: 1,
    title: "Smart ToDo",
    desc: "A modern ToDo app with dark/light mode.",
    img: todo,
    github: "https://github.com/CSaumya/SmartToDo",
    live: "https://csaumya.github.io/SmartToDo/",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Fetches live weather data using OpenWeather API.",
    img: weather,
    github: "https://github.com/CSaumya/WeatherApp",
    live: "https://csaumya.github.io/SkyCast/",
  },
  {
    id: 3,
    title: "Razorpay Clone",
    desc: "A Ui clone of Razorpay with TailwindCSS.",
    img: razorpay,
    github: "https://github.com/CSaumya/Razorpay-Clone",
    live: "https://csaumya.github.io/RazorPay-UI-Clone/",
  },
  {
    id: 4,
    title: "Mailify",
    desc: "Email validator website with great Ui.",
    img: mail,
    github: "https://github.com/CSaumya/Mailify",
    live: "https://csaumya.github.io/Mailify/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    desc: "Classic 2-player Tic-Tac-Toe game built.",
    img: ticTac,
    github: "https://github.com/CSaumya/Tic-Tac-Toe",
    live: "https://csaumya.github.io/Tic-Tac-Toe/",
  },
];

// Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl sm:text-3xl"
    onClick={onClick}
  >
    ➤
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl sm:text-3xl rotate-180"
    onClick={onClick}
  >
    ➤
  </div>
);

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // tablets & small laptops
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // mobile → 1 card
    ],
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[18px] sm:text-[20px] md:text-[25px] text-[#9cabce]">
          My Learnings So Far
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#021a37]">
          Projects
        </h1>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.id} className="px-2">
            <div
              className="
                flex flex-col items-center text-center 
                rounded-xl shadow-lg p-4 sm:p-6 
                bg-gradient-to-b from-gray-200 to-gray-500 
                w-full max-w-[500px] mx-auto h-auto
              "
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-40 sm:h-52 object-contain mb-3 rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-700">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 mt-2 flex-grow">
                {p.desc}
              </p>
              <div className="flex justify-center items-center gap-3 bg-blue-600 rounded-full px-4 py-2 mt-4 shadow-md hover:bg-blue-700 transition">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    size={28}
                    className="text-white hover:scale-125 transition border-r-2 pr-2"
                  />
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white text-xs sm:text-sm"
                >
                  Live⚡
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
