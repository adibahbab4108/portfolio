import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
    return (
        <div id="about">
            <SectionTitle
                title="About Me"
                subtitle="👋 I am a passionate and curious programmer who pursued my B.Sc in Computer Science and Engineering from International Islamic University Chittagong.

💻 Over the years, I've explored a variety of programming languages and technologies, including C, C++, Java, Python, JavaScript, React, and more.🌐 I particularly enjoy working on web development and am currently focused on specializing in the MERN Stack to build dynamic and scalable applications.🏏 When I'm not coding, you'll find me on the field playing cricket, where teamwork and strategy keep me energized and inspired. 🚀 I am dedicated to growing my skills and exploring innovative opportunities in the tech field, always eager to learn and take on new challenges." />
            <div className="text-white text-center space-x-4 space-y-4 group">
                <div className="customized-btn p-2 skew-1 group-hover:skew-0">
                    Specializing in MERN Stack
                </div>
                <div className="customized-btn  skew-1 group-hover:skew-0">
                    Passionate about building scalable web applications
                </div>
                <div className="customized-btn  -skew-1 group-hover:skew-0">
                    Currently exploring Next.js
                </div>
                <div className="customized-btn -skew-1 group-hover:skew-0">
                    Lifelong learner, always excited to explore new technologies
                </div>
                <div className="customized-btn skew-1 group-hover:skew-0">
                    Open to collaborations, open-source contributions, and networking
                </div>
            </div>


        </div>
    );
};

export default AboutMe;