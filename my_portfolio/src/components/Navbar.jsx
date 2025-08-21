import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "https://www.linkedin.com/in/mishita-jain-282257257/",
    "https://github.com/MishitaJain05",
    "https://instagram.com/mishita_j",
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-[88%] top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black shadow-lg py-2" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:flex items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-3 md:ml-auto w-full md:w-auto text-center md:text-left py-4 md:py-0">
            <li>
              <a
                href="#home"
                className={`block text-white font-medium py-2 px-2 transition-colors duration-300 ${
                  activeLink === "home"
                    ? "text-purple-400"
                    : "hover:text-purple-300"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`block text-white font-medium py-2 px-2 transition-colors duration-300 ${
                  activeLink === "skills"
                    ? "text-purple-400"
                    : "hover:text-purple-300"
                }`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block text-white font-medium py-2 px-2 transition-colors duration-300 ${
                  activeLink === "projects"
                    ? "text-purple-400"
                    : "hover:text-purple-300"
                }`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </a>
            </li>
          </ul>

          <div className="flex justify-center items-center mt-4 md:mt-0 md:ml-4">
            <div className="flex space-x-2">
              {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
                <a
                  key={index}
                  href={links[index]}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-300"
                >
                  <img src={icon} alt={`icon ${index + 1}`} className="w-5" />
                </a>
              ))}
            </div>
            <a href="#contact">
              <button className="ml-3 px-4 py-2 font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300">
                Let's Connect
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
