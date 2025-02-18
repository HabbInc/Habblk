import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Event & Blog Data
const events = [
  {
    title: "HABB Launch Event",
    description:
      "Celebrating the grand launch of HABB (PVT) LTD, bringing innovation in software solutions.",
    image: "/sliit1.jpg",
    link: "https://habb.lk/launch",
  },
  {
    title: "Tech Meetup 2025",
    description:
      "An insightful meetup with tech enthusiasts discussing AI, cybersecurity, and cloud computing.",
    image: "/north1.jpg",
    link: "https://habb.lk/meetup",
  },
  {
    title: "Startup Pitch Fest",
    description:
      "Showcasing emerging startups and groundbreaking ideas in the tech industry.",
    image: "/sliit2.jpg",
    link: "https://habb.lk/startup-pitch",
  },
  {
    title: "Cybersecurity Workshop",
    description:
      "An interactive workshop on securing digital assets and preventing cyber threats.",
    image: "/north2.jpg",
    link: "https://habb.lk/cybersecurity-workshop",
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
