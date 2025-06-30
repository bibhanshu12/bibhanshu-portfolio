import images from '../../assets/assets';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import GitHubCalendar from 'react-github-calendar';
const Home = () => {
  const [name] = useState('Bibhanshu Lal Karn');
  const [roles] = useState(['Full Stack Developer', 'React Developer', 'Backend Developer', 'Android Developer']);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  

  const icons = [
    { Component: MdOutlineEmail, label: 'Email', href: 'mailto:bibhanshu.karn@gmail.com', external: false },
    { Component: IoCall, label: 'Call', href: 'tel:+918431615618', external: false },
    { Component: FaGithub, label: 'GitHub', href: 'https://github.com/bibhanshu12', external: true },
    { Component: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bibhanshu-karn-118640253/', external: true },
    { Component: FaFileInvoice, label: 'Resume', href: '/Resume.pdf', external: false },
  ];

  // Stats values
  const finalStats = {
    projects: 4,
    experience: 2,
    technologies: 5,
    satisfaction: 99.99,
  };

  // State for animated numbers
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    satisfaction: 0,
  });

  // Role switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);


  useEffect(() => {
    const incrementSpeed = 30; 

    Object.keys(finalStats).forEach((key) => {
      let start = 0;
      const end = finalStats[key];
      const increment = Math.ceil(end / 50); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setStats((prevStats) => ({ ...prevStats, [key]: start }));
      }, incrementSpeed);
    });
  }, []);

  return (
    <>
    <div id='home' className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row justify-between items-center pl-4 pr-4 py-10 lg:py-20">
        
        {/* Profile Image - First on mobile */}
        <div className="hero-image mt-10 lg:mt-0 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="rounded-full h-48 w-48 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50">
            <img 
              src={images.profile1}
              alt="profile" 
              className="rounded-full w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
            {roles[currentRoleIndex]}
          </div>
        </div>


        {/* Icons - Second on mobile, hidden on desktop */}
        <div className="flex gap-2 mt-6 justify-center order-2 lg:hidden">
          {icons.map(({ Component, label, href, external }) => (
            <div key={label} className="relative group">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                >
                  <Component size={20} />
                </a>
              ) : href.startsWith('tel') ? (
                <a
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                >
                  <Component size={20} />
                </a>
              ) : href.endsWith('.pdf') ? ( 
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                >
                  <Component size={20} />
                </a>
              ) : (
                <Link
                  to={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                >
                  <Component size={20} />
                </Link>
              )}

              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                <span className="inline-block bg-black bg-opacity-75 text-white text-xs font-medium py-1 px-2 rounded-md whitespace-nowrap shadow-lg">
                  {label}
                </span>
                <div className="w-2 h-2 bg-black bg-opacity-75 rotate-45 transform origin-top-left mx-auto mt-[-4px]" />
              </div>
            </div>
          ))}
        </div>
        

        {/* Text Content - Third on mobile, first on desktop */}
        <div className="hero-text flex flex-col items-start space-y-4 lg:w-1/2 lg:pr-8 order-3 lg:order-1">
          <h1 className="text-white mt-10 lg:mt-0 text-2xl md:text-4xl lg:text-4xl font-bold text-left">
            {name}
          </h1>
          <div className="text-blue-300 h-auto text-xl md:text-2xl lg:text-xl text-left">
            A developer by passion, a student by choice, an enthusiast by nature.
          </div>
          <div className="text-blue-400 flex items-center h-auto text-xl md:text-2xl lg:text-xl text-left gap-2">
            <CiGlobe size={20} />
            <span>Bengaluru, India</span>
          </div>


          {/* Icons - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex gap-2 mt-6 justify-center">
            {icons.map(({ Component, label, href, external }) => (
              <div key={label} className="relative group">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                  >
                    <Component size={20} />
                  </a>
                ) : href.startsWith('tel') ? (
                  <a
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                  >
                    <Component size={20} />
                  </a>
                ) : href.endsWith('.pdf') ? ( 
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                  >
                    <Component size={20} />
                  </a>
                ) : (
                  <Link
                    to={href}
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 border border-blue-400 text-white hover:bg-blue-400 hover:border-transparent p-2 rounded-md shadow-md transition-all duration-300"
                  >
                    <Component size={20} />
                  </Link>
                )}

                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                  <span className="inline-block bg-black bg-opacity-75 text-white text-xs font-medium py-1 px-2 rounded-md whitespace-nowrap shadow-lg">
                    {label}
                  </span>
                  <div className="w-2 h-2 bg-black bg-opacity-75 rotate-45 transform origin-top-left mx-auto mt-[-4px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <div className="bg-blue-900/50 rounded-lg m-2 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar username="bibhanshu12" />
    </div>

      {/* Quick Stats  */}
      <section className="pl-4 pr-4 py-10 mt-10 bg-blue-500/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-500/10 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">{stats.projects}+</div>
            <div className="text-white">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-blue-500/10 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">{stats.experience}+</div>
            <div className="text-white">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-blue-500/10 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">{stats.technologies}+</div>
            <div className="text-white">Technologies</div>
          </div>
          <div className="text-center p-6 bg-blue-500/10 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">{stats.satisfaction}%</div>
            <div className="text-white">Client Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
