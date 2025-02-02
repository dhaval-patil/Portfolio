import React from "react";
import StarsCanvas from "./starBackground";

const Mainpart = () => {
  return (
    <>
      <StarsCanvas/>
      <section className=" text-white max-w-screen-xl mx-auto px-4 relative">
        <h2 className="text-4xl bg-[#111] relative z-10 w-max mx-auto text-center text-[#71e81c] border-b-2 border-[#5c9f1c]">
          Latest Works
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[2px]  left-1/4 right-1/2 bg-[#63a01d] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px]  border-[#88ff00] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 cursor-pointer ease-in-out duration-100 hidden sm:block"></div>

          <a href="https://github.com/dhaval-patil/ShopMate" className="w-full flex relative sm:justify-start">
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 ">
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2  after:rotate-45 after:-bottom-2">
                Shopmate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              
              <img
                className="max-w-[400px] w-full mr-auto relative z-10  drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)"
                src="/image/Shopmate.webp"
                alt=""
              />
              
            </div>
          </a>
          
          <div class="w-full">
            <h3 class="text-[#7bd527] font-bold text-2xl md:text-4xl">ShopMate</h3>
            <span class="text-[#7ad927] text-base md:text-lg">(Ecommerce-Website)</span>
            <p class="text-justify text-sm md:text-base mt-2">
            • Developed an e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js)<br />
• Features include product browsing, search, user authentication and secure payments. Implemented user authentication and role-based access control using JWT and bcrypt.<br />
• Integrated PayPal Braintree Payment Gateway.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #express.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #node.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind CSS
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoose
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #render
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="w-full">
            <h3 class="text-[#71d526] font-bold text-2xl md:text-4xl">Hostel Addmission System</h3>
            <span class="text-[#6ed217] md:text-lg text-base">(Hostel Addmission)</span>
            <p class="text-justify text-sm md:text-base mt-2">
            • Developed a dynamic Hostel Management System using HTML, CSS, and PHP.<br/>
            • Features includes room allocation, fee management and admin dashboard.<br/>
            • Optimized SQL queries and indexing strategies to enhance database performance, reducing data retrieval
times by 30%.<br/>
            • Automated room assignment based on availability.

            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #HTML
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #CSS
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #PHP
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #MySQL
              </li>
              
            </ul>
          </div>
          <div className="h-[2px]  left-1/2 right-1/4 bg-[#63a01d] absolute top-1/2 "></div>
        <div className="w-4 h-4 rounded-full border-[3px]  border-[#8aff24] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 cursor-pointer ease-in-out duration-100"></div>

          <a href="#" class="w-full flex">
            <div className="relative group hover:scale-105 ease-in-out duration-200 ml-auto">
            <span className="flex group-hover:-top-15 ease-in-out duration-100 bg-[#cab302] px-4 absolute left-1/2 -translate-x-1/2 top-5 py-2 rounded w-max gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Hostel Addmission System
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              <img
                class="max-w-[400px]  relative"
                src="/image/hostel.webp"
                alt=""
              />
              
            </div>
          </a>
        </div>
        <div className="w-[2px]  bg-[#63a01d] hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
      
    </>
  );
};

export default Mainpart;
