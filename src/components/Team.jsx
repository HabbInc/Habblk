import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const teamMembers = [
  {
    name: "Thenujan Amirthanathan",
    role: "Managing Director",
    image: assets.thenu,
    linkedin: "http://linkedin.com/in/thenujan-amirthanathan-52034a1b3",
  },
  {
    name: "Thulaxan Uthayakumar",
    role: "Full Stack Developer",
    image: assets.thulaxan,
    linkedin: "http://linkedin.com/in/thulaxan",
  },
  {
    name: "Senthalan Vyravanathan",
    role: "Software Engineer",
    image: assets.sentha,
    linkedin: "http://linkedin.com/in/senthvyra",
  },
  {
    name: "Sanjeev Vijayaratnam",
    role: "UI/UX Designer",
    image: assets.sanje,
    linkedin: "http://linkedin.com/in/sanjeevvijay",
  },
  {
    name: "Thanushan Vijayaratnam",
    role: "DevOps Engineer",
    image: assets.thanu,
    linkedin: "http://linkedin.com/in/thanushanvijayaratnam",
  },
  {
    name: "Raj Puvan",
    role: "Mentor",
    image: assets.raj,
    linkedin: "http://linkedin.com/in/rajpuvan",
  },
  {
    name: "Ulageeswaran Kajanthan",
    role: "Intern Software Engineer",
    image: assets.kajanthan,
    linkedin: "http://linkedin.com/in/kajanthu7",
  },
  {
    name: "Vithusa Pathmanathan",
    role: "Intern Frontend Developer",
    image: assets.vithu,
    linkedin: "http://linkedin.com/in/vithusha-pathmanathan-8b356828a",
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section id="team" className="py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-primary inline-block mb-6">
        Our Team
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
        Meet our talented professionals dedicated to bringing innovative solutions.
      </p>
      <div className="relative w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="w-64 h-64 flex items-center justify-center bg-blue-50">
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-4">
            {teamMembers[currentIndex].name}
          </h3>
          <p className="text-gray-700 text-sm">{teamMembers[currentIndex].role}</p>
          <a
            href={teamMembers[currentIndex].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-primary font-semibold hover:underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6 mr-2"
            />
            LinkedIn Profile
          </a>
        </div>
        <button
          onClick={prevMember}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ◀
        </button>
        <button
          onClick={nextMember}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Team;