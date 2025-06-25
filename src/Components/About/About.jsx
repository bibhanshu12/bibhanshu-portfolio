export default function Aboutus() {
  return (
    <div id='about' className="min-h-screen py-16 pt-10">
      {/* Main About Section */}
      <section className="pl-4 pr-4 py-5 md:py-20">
        <div className="max-w-4xl mx-auto text-white space-y-3">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">About</h2>
          
          {/* Introduction */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              My journey in software development began with a curiosity about how things work on the web, which led me 
              to dive deep into modern web technologies and cloud computing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}