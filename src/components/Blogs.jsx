import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Event & Blog Data
const events = [
  {
    title: "Exciting Beginnings! 🚀",
    description:
      "We are thrilled to announce the initiation of HABB Software Company! Our journey began with an insightful mentorship session with Ms. Jenny Krishara (Senior Lecturer, SLIIT) and Ms. Vethurja Kugathasan (Instructor, Faculty of Computing | IT, SLIIT) and our crew Thanushan Vijayaratnam, Thenujan Amirthanathan, Thulaxan Uthayakumar & Senthalan Vyravanathan!",
    image: "/sliit1.jpg",
    link: "https://www.linkedin.com/company/habbinc",
  },
  {
    title: "Exciting times ahead! 🚀",
    description:
      "Today, we had the opportunity to visit Northern Uni and share our vision for HABB. We discussed our plans, innovations, and the impact we aim to create in the tech industry. Connecting with aspiring minds and exchanging ideas was truly inspiring!",
    image: "/north1.jpg",
    link: "https://www.facebook.com/habbinc",
  },
  {
    title: "Building Our Future! 🚀",
    description:
      "Their valuable guidance and expertise have set the foundation for our vision, and we are eager to embark on this entrepreneurial adventure. Stay tuned for more updates as we shape the future of HABB!",
    image: "/sliit2.jpg",
    link: "https://www.instagram.com/habb_inc",
  },
  {
    title: "Inspiring Collaboration! 🚀",
    description:
      "Looking forward to more collaborations and growth as we continue our journey. The exchange of ideas at Northern Uni was invaluable, and we are excited for what’s next!",
    image: "/north2.jpg",
    link: "https://g.co/kgs/W1ugHxc",
  },
  {
    title: "HABB Inc 🚀",
    description:
      "Go Beyond!",
    image: "/habb1.png",
    link: "https://www.habb.lk",
  },
];

const EventsBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to Previous Event
  const prevEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  // Navigate to Next Event
  const nextEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="events-blogs" className="py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          Latest Events & Blogs
          <span className="block w-16 h-1 bg-primary mx-auto mt-2"></span>
        </h2>

        {/* Slideshow Container */}
        <div className="relative mt-8 flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevEvent}
            className="absolute left-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Event Content */}
          <div className="w-full max-w-3xl text-center bg-white shadow-md rounded-xl p-6">
            {/* Event Image */}
            <img
              src={events[currentIndex].image}
              alt={events[currentIndex].title}
              className="w-full h-64 object-cover rounded-md"
            />

            {/* Event Title */}
            <h3 className="text-2xl font-semibold mt-4">
              {events[currentIndex].title}
            </h3>

            {/* Event Description */}
            <p className="text-gray-600 mt-2">{events[currentIndex].description}</p>

            {/* Read More Link */}
            <a
              href={events[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Next Button */}
          <button
            onClick={nextEvent}
            className="absolute right-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsBlogs;