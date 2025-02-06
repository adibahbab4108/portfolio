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
            {/* Education Section */}
            <div className="mt-16">
                <h2 className="text-center w-fit py-4 px-8 mx-auto rounded-t-2xl  bg-slate-900 text-violet-600 text-3xl font-bold">Education</h2>

                <div className="group bg-slate-900 text-white p-10  rounded-t-xl transition-all duration-300  hover:bg-violet-800">
                    <p className="text-xl font-bold text-violet-400">2021-2025</p>
                    <h1 className="text-3xl font-bold mt-2">B.Sc in Computer Science and Engineering</h1>
                    <p className="font-bold text-gray-300 mt-2">International Islamic University Chittagong</p>
                </div>

                <div className="group bg-slate-900 text-white p-10  transition-all duration-300 hover:bg-violet-700">
                    <p className="text-xl font-bold text-violet-400">2018</p>
                    <h1 className="text-3xl font-bold mt-2">Higher Secondary Certificate</h1>
                    <p className="font-bold text-gray-300 mt-2">CDA Public School and College</p>
                </div>

                <div className="group bg-slate-900 text-white p-10 rounded-b-2xl transition-all duration-500  hover:bg-violet-700">
                    <p className="text-xl font-bold text-violet-400">2016</p>
                    <h1 className="text-3xl font-bold mt-2">Secondary School Certificate</h1>
                    <p className="font-bold text-gray-300 mt-2">Bakalia High School</p>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;