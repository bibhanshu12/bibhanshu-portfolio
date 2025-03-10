import images from '../../assets/assets';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [name] = useState('Bibhanshu Lal Karn');
  const [roles] = useState(['Full Stack Developer', 'React Developer', 'Backend Developer', 'Android Developer']);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
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

  // Number counting animation
  useEffect(() => {
    const incrementSpeed = 30; // Adjust for speed control

    Object.keys(finalStats).forEach((key) => {
      let start = 0;
      const end = finalStats[key];
      const increment = Math.ceil(end / 50); // Adjust for smoother transitions

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
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-36 py-10 md:py-20">
        <div className="flex flex-col items-start space-y-4 md:w-1/2">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Hi! I'm <span className="text-blue-400">{name}</span>
          </h1>
          <div className="text-blue-300 text-2xl md:text-3xl h-12">
            {roles[currentRoleIndex]}
          </div>
          <div className="flex gap-4 mt-6">
            <Link to='/contact'
              
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Contact 
            </Link>
            <a 
              href="#projects" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-10 md:mt-0 relative">
          <div className="rounded-full h-60 w-60 md:h-96 md:w-80 overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50">
            <img 
              src={images.profile}
              alt="profile" 
              className="rounded-full w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Available for work
          </div>
        </div>
      </section>

      {/* Quick Stats with Animation */}
      <section className="px-6 md:px-36 py-10 mt-32  bg-blue-500/10">
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
