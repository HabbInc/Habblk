import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const images = [
  { src: assets.about, name: "HABB Launched!" },
  { src: "/sliit0.jpg", name: "HABB at SLIIT" },
  { src: "/north44
    .jpg", name: "HABB at Northern Uni" },
  { src: "/north11.jpg", name: "HABB at Northern Uni" },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="bg-[#0D1321] text-white px-6 py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Image Slideshow Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].name}
            className="rounded-lg shadow-lg w-full max-w-md object-cover h-auto transition-all duration-500"
          />
          <p className="mt-2 text-sm text-gray-400">📷 {images[currentIndex].name}</p>
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
            {[
              "Advanced AI solutions",
              "Full-stack web & mobile apps",
              "Cloud computing & DevOps",
              "Secure & scalable platforms",
              "Seamless UI/UX design",
              "Agile & fast development cycle",
              "Data-driven insights",
              "Continuous product improvement",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 mr-3">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
