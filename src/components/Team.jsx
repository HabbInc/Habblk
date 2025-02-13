import React from "react";
import { assets } from "src/assets/assets";
// import Teams from "../assets/assets.js"; // Ensure assets.js has correct exports

const teamMembers = [
  {
    name: "Thenujan Amirthanathan",
    role: "Co-Founder & Lead Engineer",
    image: assets.thenu,
    linkedin: "#",
  },
  {
    name: "Thulaxan Uthayakumar",
    role: "Co-Founder & Full Stack Developer",
    image: assets.thulaxan,
    linkedin: "#",
  },
  {
    name: "Senthalan Vyravanathan",
    role: "Co-Founder & Software Engineer",
    image: assets.sentha,
    linkedin: "#",
  },
  {
    name: "Sanjeev Vijayaratnam",
    role: "Co-Founder & Managing Director",
    image: assets.kajanthan,
    linkedin: "#",
  },
  {
    name: "Thanushan Vijayaratnam",
    role: "Co-Founder",
    image: assets.vithu,
    linkedin: "#",
  },
  {
    name: "Raj Puvan",
    role: "Mentor",
    image: assets.raj,
    linkedin: "#",
  },
  {
    name: "Ulageeswaran Kajanthan",
    role: "Software Engineering Intern",
    image: assets.thanu,
    linkedin: "#",
  },
  {
    name: "Vithusa Pathmanathan",
    role: "Frontend Developer Intern",
    image: assets.kajanthan,
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 inline-block border-b-4 border-primary">
          Our Team
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Meet our talented professionals dedicated to bringing innovative
          solutions.
        </p>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6"
            >
              {/* Image Section (Square, Visible, Centered) */}
              <div className="w-64 h-64 flex items-center justify-center bg-blue-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{member.role}</p>

                {/* LinkedIn Profile (Below Everything) */}
                <a
                  href={member.linkedin}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
