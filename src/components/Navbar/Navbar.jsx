/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Navbar.css";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`z-10 fixed top-0 left-0 w-full  bg-black/30 backdrop-blur-lg  text-white p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mx-4 lg:hidden ">
              <HiMiniBars3CenterLeft className="text-base1 cursor-pointer text-3xl hover:text-base2" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <ul className="sm:flex  gap-6 items-center font-bold justify-between bg-black/50 p-4">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <a
                      href={`#${section.id}`}
                      className={`hover:text-base2 transition-colors 
                                                ${
                                                  activeSection === section.id
                                                    ? "text-base2 font-bold"
                                                    : "text-base1"
                                                }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
          <a
            href="mailto:adib.abc2022@gmail.com"
            className="btn  text-2xl custom-message-btn hidden lg:block"
          >
            Adib
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ul className="sm:flex  gap-4 items-center font-bold justify-between">
              {sections.map((section) => (
                <li
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                >
                  <a
                    href={`#${section.id}`}
                    className={`hover:text-base2 transition-colors 
                                                ${
                                                  activeSection === section.id
                                                    ? "text-base2 font-bold"
                                                    : "text-base1"
                                                }`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <a
            href="mailto:adib.abc2022@gmail.com"
            className="btn text-2xl custom-message-btn"
          >
            Adib
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
