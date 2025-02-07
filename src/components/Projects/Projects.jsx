import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch("myprojects.json")
            .then((response) => response.json())
            .then((data) => {
                const { projects } = data
                setProjects(projects);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    if (!projects) return <p>Loading...</p>
    console.log(projects)
    return (
        <div id="projects">
            <SectionTitle title="Projects" subtitle="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40">
                {
                    projects.map((project, idx) => {
                        const { title, description, technologies, github, live_demo, screenshot } = project;

                        return (
                            <div key={idx} className=" bg-slate-900 text-white p-6 rounded-2xl shadow-lg  hover:shadow-xl group">
                                <div className="relative w-full h-48 overflow-hidden rounded-lg transition-all">
                                    <img
                                        src={screenshot}
                                        alt={title}
                                        className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <p className="absolute text-gray-300 font-bold text-justify mt-2 pt-8 px-2 text-sm z-10
                                     bg-gradient-to-t from-slate-900 via-slate-800 to-transparent to-95% 
                                     group-hover:bottom-0">{description}</p>
                                </div>

                                <h2 className="text-2xl font-bold mt-4 text-violet-400">{title}</h2>


                                <div className="mt-4 flex flex-wrap gap-2">
                                    {technologies.map((tech, index) => (
                                        <span key={index} className="bg-violet-700 text-white text-xs px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <a
                                        href={github}
                                        target="_blank"
                                        className="text-sm font-semibold text-violet-500 hover:text-violet-300"
                                    >
                                        GitHub Repo →
                                    </a>
                                    <a
                                        href={live_demo}
                                        target="_blank"
                                        className="text-sm font-semibold text-green-500 hover:text-green-300"
                                    >
                                        Live Demo →
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Projects;