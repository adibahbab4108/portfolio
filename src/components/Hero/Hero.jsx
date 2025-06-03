import { FaDownload } from "react-icons/fa";
import myProfile from "../../assets/profile.webp";
import SocialLink from "../shared/SocialLink";
const Hero = () => {
  return (
    <section className=" flex flex-col justify-center  text-white px-6 ">
      <div className="flex flex-col md:flex-row items-center gap-12 mt-40 ">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl ">
          <h4 className="text-xl font-bold text-base1">Proficient in</h4>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-base2 to-base1 bg-clip-text text-transparent">
            Next-Level Web Development.
          </h1>

          {/* <p className="text-gray-300 mt-4 text-lg font-bold">
            I craft seamless digital experiences, transforming complexity into
            intuitive solutions that empower and connect billions.
          </p> */}
          <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
            <a
              href="/Adib%20Ahbab%20MERN%20Stack.pdf"
              download
              className="flex items-center gap-2 customized-btn"
            >
              Download CV <FaDownload />
            </a>
            
          </div>
        </div>
        {/* Right Image */}
        <div>
          {/* Image container */}
          <div
            className="w-72 h-72 md:w-96 md:h-96 
      lg:w-[30rem] lg:h-[30rem]
      p-0.5 rounded-3xl
      brightness-70 hover:brightness-100
      rotate-6 hover:rotate-0 transition-all duration-1000 relative  overflow-hidden shadow-teal-400/50 shadow-2xl "
          >
            <div className="spining-card absolute "></div>
            <img
              src={myProfile}
              alt="adibahbab4108"
              className="w-full h-full object-cover rounded-3xl z-20"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats" className=" py-10 bg-black/30 rounded-2xl my-20">
        <SocialLink className=""/>
      </div>
    </section>
  );
};

export default Hero;
