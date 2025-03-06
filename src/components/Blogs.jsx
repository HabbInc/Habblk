import { useEffect, useState } from "react";
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
    title: "Team HABB at SLIIT! 🚀",
    description: "A productive discussion at SLIIT on our projects and growth!",
    image: "/sliitfeb3.jpg",
    link: "https://www.linkedin.com/company/habbinc",
  },
  {
    title: "Building Our Future! 🚀",
    description: "Guidance & mentorship shaping our journey at HABB!",
    image: "/sliit2.jpg",
    link: "https://www.twitter.com/habb_inc",
  },
  {
    title: "Team HABB at SLIIT! 🚀",
    description: "A productive discussion at SLIIT on our projects and growth!",
    image: "/sliitfeb4.1.jpg",
    link: "https://www.linkedin.com/company/habbinc",
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
    <section id="events-blogs" className="py-12 text-center bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          Latest Events & Blogs
          <span className="block w-16 h-1 bg-primary mx-auto mt-2"></span>
        </h2>

        <div className="relative mt-8 flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevEvent}
            className="absolute left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition shadow-lg"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Event Content */}
          <div className="w-full max-w-3xl text-center bg-white shadow-md rounded-xl p-6 overflow-hidden relative">
            {/* Event Image with Overlay */}
            <div className="relative">
              <img
                src={events[currentIndex].image}
                alt={events[currentIndex].title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
            </div>

            {/* Event Title */}
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">
              {events[currentIndex].title}
            </h3>

            {/* Event Description */}
            <p className="text-gray-600 mt-2 text-lg italic">{events[currentIndex].description}</p>

            {/* Read More Button */}
            <a
              href={events[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Learn More →
            </a>

            {/* Progress Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {events.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-400"}`}
                ></span>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextEvent}
            className="absolute right-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition shadow-lg"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsBlogs;