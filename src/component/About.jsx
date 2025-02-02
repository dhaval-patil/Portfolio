import { useState } from "react";
import mernLogo from "./mern-logo.png"; // Add MERN logo in src folder

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Button to Trigger Popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        About Me
      </button>

      {/* Popup Card */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full transform transition duration-300 scale-100">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-600 float-right text-xl"
            >
              &times;
            </button>
            

            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hi, I'm <span className="text-blue-500 font-semibold">Dhaval Patil</span>, a passionate 
              Full-Stack Developer skilled in <span className="font-semibold">Java, MERN Stack, 
              DSA, and Cloud Computing</span>. I love building scalable web applications 
              and solving real-world problems.
            </p>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Skills:</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-600">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>JavaScript</li>
                <li>AWS & Cloud</li>
              </ul>
            </div>

            {/* MERN Logo with Animation */}
            <div className="mt-4 flex justify-center">
              <img
                src={mernLogo}
                alt="MERN Stack Logo"
                className="w-24 h-24 animate-spin-slow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
