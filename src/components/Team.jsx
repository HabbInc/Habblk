import React from "react";
import { assets } from "../assets/assets";

// import Teams from "../assets/assets.js"; // Ensure assets.js has correct exports

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
