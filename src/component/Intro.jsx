import React, { useState, useEffect, useRef } from "react";
import Profile from "../assets/Profile_PIC.jpg";
import "./font.css";
import StarsCanvas from "./starBackground";


const navbar = () => {
  const firstSectionRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showAboutMe, setShowAboutMe] = useState(false);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const offsetX = (clientX / window.innerWidth - 0.5) * 20; // Adjust range
    const offsetY = (clientY / window.innerHeight - 0.5) * 20;

    setPosition({ x: offsetX, y: offsetY });
  };

  const scrollToFirstSection = () => {
    firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };
  return (
    <>
      {/* section */}
      <div
        className=" text-white flex flex-col justify-between h-screen "
        onMouseMove={handleMouseMove}
        // style={{
        //   backgroundImage: `url('/path-to-your-background-image.jpg')`, // Add your background image URL here
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-89 bg-inherit w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <StarsCanvas />

        {/* header */}
        <div className="mx-4 mt-4 flex item-center justify-between w-full px-4 max-w-screen-2xl mx-auto">
          <img
            className="invert brightness-0 h-10 w-10"
            src="/image/Icon.png"
            alt="logo"
          />
          <div className="flex gap-4 mt-4 pointer-events-auto">
            <a href="https://drive.google.com/file/d/1XP2AJG8FyRGRJHsTujxAnUCV0uadQWIy/view?usp=drive_link" target="_blank">
              <button className="bg-[#0c4fa7] cursor-pointer -py-1 px-3 rounded-[4px] font-extrabold h-9 bg-gradient-to-r from-sky-900 to-purple-500 relative hover:scale-110 ease-in-out duration-100 group mb-20 flex">
                <h4 className="p-1">Resume</h4>

                <svg
                  className="m-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  />
                </svg>
              </button>
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hidden"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
        </div>
        {/* header close */}
        {/* hero */}

        {/* main */}
        <div className="flex -mt-10 relative">
          <div className="w-full max-w-screen-xl mx-auto">
            <img
              className="w-[350px] h-[350px] ml-19 rounded-xl transition-transform duration-200 ease-out absolute top-0 left-1/2 -translate-y-1/6 -translate-x-1/2"
              src={Profile}
              alt="Profile"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            />
            <div className="relative ml-16 ">
              <h1 className="text-[64px] font-['Spartan']">Dhaval Patil</h1>
              <p className="font-[Merriweather] italic mb-8">
                Full Stack Web Developer
              </p>
              <button
                className="bg-[#4AA70C] py-2 px-5 rounded-[4px] font-extrabold h-11 bg-gradient-to-r from-lime-900 to-lime-500 relative hover:scale-110 ease-in-out duration-100 group cursor-pointer"
                onClick={toggleAboutMe}
              >
                About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  fill="currentColor"
                  class="bi bi-arrow-right absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
              {/* About Me Pop-up Card */}
              {showAboutMe && (
                <div
                  className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0b0321] text-white p-8 rounded-xl shadow-2xl shadow-[#221e2d] transition-transform duration-500 animate-fade-in w-122"
                  style={{ zIndex: 9999 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-lime-400">
                    ABOUT ME
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Hi, I'm Dhaval Patil, a Full-Stack Developer and Software
                    Developer, passionate about building dynamic, user-centric
                    web applications. With expertise in Data Structures and
                    Algorithms, I enjoy solving complex problems and creating
                    scalable solutions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "#Java (DSA)",
                      "#C",
                      "#C++",
                      "#JavaScript",
                      "#PHP",
                      "#SQL",
                      "#HTML5",
                      "#CSS3",
                      "#ReactJS",
                      "#Redux",
                      "#Node.js",
                      "#Express.js",
                      "#MongoDB",
                      "#Mongoose",
                      "#Cloudinary",
                      "#EJS",
                      "#Sass",
                      "#Bootstrap",
                      "#Tailwind CSS",
                      "#MongoDB",
                      "#Git",
                      "#GitHub",
                      "#AWS",
                      "#Terminal",
                      "#Adobe XD",
                      "#Figma",
                      "#Adobe Photoshop",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-lime-400 mb-2">
                    MERN STACK
                  </h3>
                  <div className="flex justify-around items-center mt-4 relative">
                    <img
                      src="/image/mongo.svg"
                      alt="MongoDB"
                      className="w-10 h-10"
                    />

                    <img
                      src="/image/express.svg"
                      alt="Express"
                      className="w-10 h-10 hover:opacity-80 transition duration-300"
                    />
                    <span className="mt-2 text-sm text-white hidden group-hover:block">
                      Express
                    </span>
                    <img
                      src="/image/react.svg"
                      alt="React"
                      className="w-10 h-10"
                    />
                    <img
                      src="/image/node.svg"
                      alt="Node.js"
                      className="w-10 h-10"
                    />
                  </div>

                  <button
                    onClick={toggleAboutMe}
                    className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition duration-300"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
          <ul className="ml-auto mr-8 space-y-5 text-[#b0b2c3] absolute right-8">
            <li className="w-7 hover:text-white">
              <a
                href="https://www.linkedin.com/in/dhaval-patill/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>
            <li className="w-7 hover:text-white">
              <a href="https://x.com/dhavalpatil8" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </li>
            <li className="w-7 hover:text-white">
              <a
                href="https://www.instagram.com/dhaval.patil_/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            <li className="w-7 hover:text-white">
              <a href="mailto:dhavalpatil365@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>
            <li className="w-7 hover:text-white">
              <a href="https://github.com/dhaval-patil" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className=" after:content-[''] after:absolute after:w-[2px] after:h-6 after:bg-[#4444] after:left-1/2 after:-translate-x-1/2 after:top-3/4 relative self-center">
     
          <button className="bg-[#4AA70C] py-2 px-5 rounded-[4px] font-extrabold h-11 bg-gradient-to-r from-lime-900 to-lime-500 relative hover:scale-110 ease-in-out duration-100 group mb-20">
            PROJECTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              class="bi bi-arrow-right absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default navbar;
