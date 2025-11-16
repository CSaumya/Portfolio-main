import React, { useState, useEffect } from "react";
import NameLogo from "../../assets/name-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Reach Me", to: "reach-me" },
    { name: "Find Me On", to: "find-me" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full text-white mb-[30px] py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#3C4863] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img src={NameLogo} alt="logo" className="h-[60px] md:h-[80px]" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-8 cursor-pointer transition-all duration-300 ease-in-out">
          {navItems.map((item) => (
            <li key={item.to} className="hover:underline underline-offset-4">
              <Link to={item.to} smooth={true} duration={500} offset={-80}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Full Screen Slide Menu */}
<div
  className={`
    fixed top-0 right-0 h-screen w-full 
    bg-[#001233]/90 backdrop-blur-md text-white 
    flex flex-col items-center justify-center
    transition-transform duration-500 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:hidden z-40
  `}
>
  {/* Close Button */}
  <button
    className="absolute top-6 right-6 text-3xl"
    onClick={() => setIsOpen(false)}
  >
    <FaTimes />
  </button>

  {/* Slide Menu Items */}
  <ul className="flex flex-col gap-10 text-2xl font-semibold">
    {navItems.map((item) => (
      <li key={item.to} className="hover:text-cyan-300 transition">
        <Link
          to={item.to}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
