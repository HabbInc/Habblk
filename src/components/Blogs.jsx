import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
  {
    title: "Team HABB at SLIIT! 🚀",
    description: "A productive discussion at SLIIT on our projects and growth!",
    image: "/sliit_meetup.jpg",
    link: "https://www.linkedin.com/company/habbinc",
  },
  {
    title: "Exciting Beginnings! 🚀",
    description: "Thrilled to announce the launch of HABB Software Company!",
    image: "/sliit1.jpg",
    link: "https://www.facebook.com/habbinc",
  },
  {
    title: "Innovating at Northern Uni! 🚀",
    description: "Discussing HABB’s vision and future impact with aspiring minds!",
    image: "/north1.jpg",
    link: "https://www.instagram.com/habb_inc",
  },
  {
    title: "Building Our Future! 🚀",
    description: "Guidance & mentorship shaping our journey at HABB!",
    image: "/sliit2.jpg",
    link: "https://www.twitter.com/habb_inc",
  },
  {
    title: "Inspiring Collaboration! 🚀",
    description: "Exchanging ideas and pushing innovation forward!",
    image: "/north2.jpg",
    link: "https://g.co/kgs/W1ugHxc",
  },
  {
    title: "HABB Inc 🚀",
    description: "Go Beyond!",
    image: "/habb1.png",
    link: "https://www.habb.lk",
  },
];

const EventsBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-Slide Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextEvent();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="events-blogs" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 relative inline-block text-gray-900">
          Latest Events & Blogs
          <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevEvent}
            className="absolute left-8 bg-transparent text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition duration-300"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          {/* Event Content */}
          <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-6 overflow-hidden relative transition-all transform hover:scale-105 duration-500">
            {/* Event Image with Overlay */}
            <div className="relative">
              <img
                src={events[currentIndex].image}
                alt={events[currentIndex].title}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            </div>

            {/* Event Title */}
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">{events[currentIndex].title}</h3>

            {/* Event Description */}
            <p className="text-gray-600 mt-4 text-lg italic">{events[currentIndex].description}</p>

            {/* Read More Button */}
            <a
              href={events[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Learn More →
            </a>

            {/* Progress Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {events.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-yellow-500" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextEvent}
            className="absolute right-8 bg-transparent text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition duration-300"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsBlogs;
