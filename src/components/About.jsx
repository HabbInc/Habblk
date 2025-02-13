import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div id="about" className="bg-[#0D1321] text-white px-6 py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={assets.about}
            alt="Team"
            className="rounded-lg shadow-lg w-full max-w-md object-cover h-auto"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4 relative inline-block">
            ABOUT US
            <span className="absolute left-0 bottom-0 w-full h-1 bg-primary"></span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Welcome to HABB, where innovation meets technology. We are a
            cutting-edge software company dedicated to creating powerful,
            efficient, and user-friendly digital solutions. Our team of
            experienced developers and designers works closely with businesses
            to transform their ideas into reality.
          </p>

          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Advanced AI solutions
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Full-stack web & mobile apps
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Cloud computing & DevOps
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Secure & scalable platforms
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Seamless UI/UX design
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Agile & fast development cycle
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Data-driven insights
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-3">✔</span> Continuous product improvement
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
