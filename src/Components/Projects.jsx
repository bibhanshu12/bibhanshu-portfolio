import { useState } from "react";
import images from "../assets/assets";
import { LuFolderGit2 } from "react-icons/lu";

const Projects = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const projects = [
        {
            title: "The EarringBar Online E-Commerce",
            image: images.project5,
            description: "Full-Stack online E-commerce website for shopping Earrings,Braclets,Rings,Necklesses and Many more..",
            technologies: ["React", "Tailwind-CSS", "NodeJS", "Prisma", "PostgreSQL"],
            link: "https://www.theearingbars.shop/",
            gitLink: "https://github.com/bibhanshu12/TheEaringBarFrontend"
        },
        {
            title: "Threads Clone",
            image: images.porject4,
            description: "A React based Full Stack web application designed to manage and process large datasets efficiently with a redux APIs.",
            technologies: ["Express.js", "React", "Javascript", "Mongoose"],
            link: "https://threads.bibhanshu.tech",
            gitLink: "https://github.com/bibhanshu12/Threads-ClientSide"
        },

        {
            title: "Disney +",
            image: images.project3,
            description: "A full-featured front-end clone with responsive design and video playback capabilities from YouTube.",
            technologies: ["React", "Styled Components", "Firebase"],
            link: "https://disney.bibhanshu.tech",
            gitLink: "https://github.com/bibhanshu12/Disney-"

        },
        {
            title: "Weather App",
            image: images.project2,
            description: "Android Weather App 🌦️. A sleek app fetching real-time weather data via API, providing a 5-day forecast with a smooth UI.",
            technologies: ["Java", "Open Weather"],
            gitLink: "https://github.com/bibhanshu12/Weather-App"
        }
        // ,

        // {
        //     title: "E-commerce Backend",
        //     image: "",
        //     description: "A backend system for Advance E-Commerce website featuring with different Schemas, user authentication, and scalable API endpoints.",
        //     technologies: ["TypeScript", "Express.js","React","Postgresql"],
        //     gitLink: "https://github.com/bibhanshu12/theEaringBar_Backend",

        // }
        ,

    ];

    return (
        <section id="projects" className="w-auto py-12 pl-4 pr-4 pt-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-12">
                    <LuFolderGit2 size={30} className="text-blue-400" />
                    <span className="text-3xl font-bold pl-4 text-blue-400">Projects</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const words = project.description.split(" ");
                        const shortDescription = words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");

                        return (
                            <div
                                key={index}
                                className="bg-[#121212] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                            >

                                {/* Card Content */}
                                <div className="p-6 flex-grow border-4 border-gray-800 rounded-lg">
                                    {project.image && (
                                        <img className="rounded-md mb-3" src={project.image} alt={project.title} />
                                    )}

                                    {/* Card Header */}
                                    <div className="p-2 border-gray-200">
                                        <h3 className="text-xl font-semibold text-white">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#A3A3A3] mb-4">
                                        {expanded[index] ? project.description : shortDescription}


                                        {words.length > 8 && (
                                            <button
                                                className="text-yellow-300 hover:text-blue-800 text-sm font-medium"
                                                onClick={() => toggleReadMore(index)}
                                            >
                                                {expanded[index] ? "Read Less" : "Read More"}
                                            </button>
                                        )}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-2 bg-[#232323] rounded-md text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="p-2 flex justify-between border-gray-200">
                                    {project.gitLink && (
                                        <a
                                            href={project.gitLink}
                                            className="p-2 text-white bg-[#101010] hover:bg-[#232323] font-medium inline-flex items-center border border-[#232424] rounded-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View
                                        </a>
                                    )}
                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            className="p-2 text-white bg-[#101010] hover:bg-[#232323] font-medium inline-flex items-center border border-[#232424] rounded-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
