import React from 'react';

export default function Aboutus() {
  return (
    <div id='about' className="min-h-screen py-16 ">
      {/* Main About Section */}
      <section className="px-6 md:px-36 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-white space-y-8">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
          
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-xl leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              My journey in software development began with a curiosity about how things work on the web, which led me 
              to dive deep into modern web technologies and cloud computing.
            </p>
          </div>

          {/* Experience & Projects */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-300">Project Experience</h3>
            <p className="text-lg leading-relaxed">
              Throughout my journey, I've built several significant projects including:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li className="text-blue-300">
                <span className="font-semibold">QR File-Sharing System</span>
                <p className="text-white ml-6 mt-1">
                  A seamless file-sharing solution using QR codes for quick and secure transfers between devices.
                </p>
              </li>
              <li className="text-blue-300">
                <span className="font-semibold">JioCinema Clone</span>
                <p className="text-white ml-6 mt-1">
                  A full-featured streaming platform clone with user authentication and video playback capabilities.
                </p>
              </li>
              <li className="text-blue-300">
                <span className="font-semibold">YouTube Video Backend</span>
                <p className="text-white ml-6 mt-1">
                  Scalable backend infrastructure handling video uploads, processing, and streaming.
                </p>
              </li>
              <li className="text-blue-300">
                <span className="font-semibold">Full-stack TODO Application</span>
                <p className="text-white ml-6 mt-1">
                  A comprehensive task management system with real-time updates and user collaboration features.
                </p>
              </li>
            </ul>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-300">Technical Expertise</h3>
            <p className="text-lg leading-relaxed">
              My technical journey has equipped me with a diverse skill set in modern web and mobile development:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Frontend</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• React.js</li>
                  <li>• HTML5 & CSS3</li>
                  <li>• Tailwind CSS</li>
                  <li>• JavaScript (ES6+)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Backend</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• MongoDB</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Other Skills</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• AWS Services</li>
                  <li>• Android Development</li>
                  <li>• Git & GitHub</li>
                  <li>• Docker</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-300">Current Focus</h3>
            <p className="text-lg leading-relaxed">
              Currently, I'm focused on deepening my expertise in cloud architecture and exploring microservices. 
              I'm passionate about building scalable solutions that can handle real-world challenges while 
              maintaining clean, maintainable code.
            </p>
          </div>

          {/* Technology Tags */}
          <div className="pt-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#232323] rounded-full text-blue-300">React.js</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">Node.js</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">Android</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">AWS</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">MongoDB</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">Express.js</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">Tailwind CSS</span>
              <span className="px-4 py-2 bg-[#232323] rounded-full text-blue-300">Git</span>
              <span className="px-4 py-2 bg-[#232323]  rounded-full text-blue-300">Docker</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}