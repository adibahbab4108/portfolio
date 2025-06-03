import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex justify-evenly">
      <a
        href="https://www.linkedin.com/in/adib-ahbab4108/"
        target="_blank"
        className="text-gray-300 text-4xl hover:text-teal-400 hover:scale-150 transition-all duration-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.github.com/adibahbab4108"
        target="_blank"
        className="text-gray-300 text-4xl hover:text-teal-400 hover:scale-150 transition-all duration-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://x.com/adibahbab4108"
        target="_blank"
        className="text-gray-300 text-4xl hover:text-teal-400 hover:scale-150 transition-all duration-400 "
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="text-gray-300 text-4xl hover:text-teal-400 hover:scale-150 transition-all duration-400"
      >
        <FaDribbble />
      </a>
    </div>
  );
};

export default SocialLink;
