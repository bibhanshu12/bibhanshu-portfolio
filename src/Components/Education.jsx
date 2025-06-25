import { FaGraduationCap } from "react-icons/fa";

const Education=()=>{
    return (
        <>
        <div className="flex">  <FaGraduationCap size={40} className="text-blue-400"/>     <h1 className="text-3xl font-bold pl-4 text-blue-400">Education</h1>
        </div>
        <div className="w-full p-6 text-white">
      <div className="flex flex-col bg-blue-900/30 rounded-lg p-2 md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-4 mb-6">
        {/* Left Side: Details */}
        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-blue-400">SET, Jain University</h3>
          <p className="text-lg">Bachelor of Technology in Computer Science and Engineering</p>
          <p className="text-sm text-gray-300">Bengaluru, India</p>

          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-200 text-sm">
            <li>Specialization in Cloud Technology & Mobile Applications</li>
            <li>SGPA: 8.57 / 10.0</li>
            <li>Ranked 1st in CTRL + Z (INR 5000)</li>
            
          </ul>
        </div>

        {/* Right Side: Dates */}
        <div className="md:w-1/4 text-right text-gray-400 mt-4 md:mt-0">
          <p className="bg-blue-900/50 rounded-lg">2022 - 2026</p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Education