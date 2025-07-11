export default function Aboutus() {
  return (
    <div id='about' className=" py-1 pt-2">
      {/* Main About Section */}
      <section className="pl-4 pr-4 py-5 md:py-20">
        <div className="max-w-4xl mx-auto text-white space-y-3">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">About</h2>
          
          {/* Introduction */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
            I’m a driven and detail-oriented developer with 1+ years of personal hands-on experience using MERN stack. I’ve independently built 3–4 full-scale projects, which helped me strengthen my skills in solving real-world problems through practical and scalable solutions. I'm always exploring new technologies and looking to contribute to forward-thinking teams working on impactful products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}