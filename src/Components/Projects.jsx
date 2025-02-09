import React from "react";
const Projects = () => {
    // Sample project data - replace with your actual projects
    const projects = [
      {
        title: "Project 1: Jiocinema clone",
        image:"/jiocinema.jpg",
        description: "A full-featured front-end  clone with responsive design and video playback capabilities from youtube.",
        technologies: ["React", "Tailwind CSS"],
        link: "#"
      },
      {
        title: "Project 2: Weather App",
        image:"/weatherApp.png",
        description: "Android Weather App 🌦️. A sleek app fetching real-time weather data via API, providing a 5-day forecast with a smooth UI. ",
        technologies: ["Java", "Open Weather"],
        link: "#"
      },
      {
        title: "Project 3: Youtube Backend",
        image:"",
        description: "Description of project 3. Add your project details here to showcase your work and skills.",
        technologies: ["TypeScript", "Next.js"],
        link: "#"
      },
      {
        title: "Project 4",
        image:"",
        description: "Description of project 4. Add your project details here to showcase your work and skills.",
        technologies: ["Python", "Django"],
        link: "#"
      },
      {
        title: "Project 5",
        image:"",
        description: "Description of project 4. Add your project details here to showcase your work and skills.",
        technologies: ["Java", "MySql"],
        link: "#"
      },
    ];
  
    return (
      <section id="projects" className="w-full py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">My Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex-grow">
                    <img className=" rounded-md" src={project.image} alt="" />

                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="p-6 border-t border-gray-200">
                  <a 
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project 
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;