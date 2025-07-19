import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";

const Education = () => {
  const skills = [
    // Programming Languages
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",

    // Frontend
    "React.js",
    "Tailwind CSS",
    "Material UI",
    // Backend
    "Node.js",
    "NestJS",
    "Express.js",
    "REST APIs",
    
    // Databases
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    // Cloud & DevOps
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Figma",

    // Additional
    "Firebase",
    "Socket.IO",
    
  ];

  return (
    <>
      <div className="flex">
        <FaGraduationCap size={40} className="text-blue-400" />{" "}
        <h1 className="text-3xl font-bold pl-4 text-blue-400">Education</h1>
      </div>
      <div className="w-full p-6 text-white">
        <div className="flex flex-col bg-blue-900/30 rounded-lg p-2 md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-4 mb-6">
          {/* Left Side: Details */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold text-blue-400">
              SET, Jain University
            </h3>
            <p className="text-lg">
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p className="text-sm text-gray-300">Bengaluru, India</p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-200 text-sm">
              <li>Specialization in Cloud Technology & Mobile Applications</li>
              <li>CGPA: 8.70 / 10.0</li>
              <li>Ranked 1st in CTRL + Z (INR 5000)</li>
            </ul>
          </div>

          {/* Right Side: Dates */}
          <div className="md:w-1/4 text-right text-gray-400 mt-4 md:mt-0 flex md:justify-end">
            <p className="bg-blue-900/50 rounded-lg inline-block px-3 py-1">
              2022 - 2026
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <FaBriefcase size={40} className="text-blue-400" />
        <h1 className="text-3xl font-bold pl-4 text-blue-400">Experience</h1>
      </div>

      <div className="w-full p-6 text-white">
        {/* Software Developer Intern at Sakha */}
        <div className="flex flex-col bg-blue-900/30 rounded-lg p-4 md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-6 mb-6">
          {/* Left Side: Details */}
          <div className="md:w-3/4 space-y-1">
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold text-blue-400">
                <a
                  href="https://sakhaglobal.com"
                  className=" hover:text-blue-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sakha Information Systems
                </a>
              </p>
            </div>
            <p className="text-lg">Bengaluru, India</p>
            <div className="flex items-center gap-1">
              <FaWalking />
              <span className=" bg-blue-800 px-2 rounded-lg">
                Hybird
              </span>
            </div>
          </div>

          {/* Right Side: Dates */}
          <div className="md:w-1/4 text-right text-gray-400 mt-4 md:mt-0 flex md:justify-end">
            <p className="bg-blue-900/50 rounded-lg inline-block px-3 py-1">
              Jul 2025-Present
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex">
          <h1 className="text-3xl font-bold pl-4 text-blue-400">Skills</h1>
        </div>

        <div className="flex mt-5 flex-wrap justify-start pl-5 items-start">
          {skills.map((skill) => (
            <h2
              key={skill}
              className="text-white px-2 rounded-md bg-blue-900 m-0.5"
            >
              {skill}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
};
export default Education;
