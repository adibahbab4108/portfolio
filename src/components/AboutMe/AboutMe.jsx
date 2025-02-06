import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
    return (
        <div id="about">
            <SectionTitle
                title="About Me"
                subtitle="I am a passionate web developer, currently focused on specializing MERN Stack. Dedicated to growing skills and exploring innovative opportunities in the tech field." />
            <div className="text-white text-center space-x-4 space-y-4 group">
                <div className="customized-btn skew-1 group-hover:skew-0">
                    Specializing in MERN Stack
                </div>
                <div className="customized-btn skew-1 group-hover:skew-0">
                    Actively looking for Job/Internship opportunities
                </div>
                <div className="customized-btn -skew-1 group-hover:skew-0">
                    Passionate about building scalable web applications
                </div>
                <div className="customized-btn -skew-1 group-hover:skew-0">
                    Currently exploring Next.js
                </div>
                <div className="customized-btn skew-1 group-hover:skew-0">
                    Lifelong learner, always excited to explore new technologies
                </div>
                <div className="customized-btn -skew-1 group-hover:skew-0">
                    Open to collaborations, open-source contributions, and networking
                </div>
            </div>
          

        </div>
    );
};

export default AboutMe;