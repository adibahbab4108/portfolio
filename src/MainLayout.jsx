import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#0a0214] via-[rgb(39,15,85)] via-80% to-[#0a0214]">
                <div className="container mx-auto">
                    <Navbar />
                    <Hero />

                </div>
            </div>
            <div className="bg-[#0a0214]">
                <div className="container mx-auto">
                    <AboutMe />
                    <Education/>
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;