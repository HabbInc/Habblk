import React from 'react';
import { FaLightbulb, FaUsers, FaChartLine, FaLock } from 'react-icons/fa';

const Features = () => {
  const services = [
    {
      title: "Innovation at Core",
      description: "We leverage cutting-edge technology to deliver intelligent and scalable solutions.",
      icon: <FaLightbulb className="text-primary text-4xl" />,
      bgIcon: FaLightbulb,
    },
    {
      title: "Client-Focused Approach",
      description: "Our solutions are designed to enhance user experience and business performance.",
      icon: <FaUsers className="text-primary text-4xl" />,
      bgIcon: FaUsers,
    },
    {
      title: "Data-Driven Decisions",
      description: "We integrate analytics and AI to make informed decisions and optimize workflows.",
      icon: <FaChartLine className="text-primary text-4xl" />,
      bgIcon: FaChartLine,
    },
    {
      title: "Security & Compliance",
      description: "Ensuring your digital assets are protected with industry-standard security measures.",
      icon: <FaLock className="text-primary text-4xl" />,
      bgIcon: FaLock,
    },
  ];

  return (
    <section id="features" className="py-12  text-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          Features
          <span className="block w-16 h-1 bg-primary mx-auto mt-2"></span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Partner with our highly skilled engineers, perfectly aligned with your vision, to empower your business and achieve unparalleled growth.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute bottom-2 right-2 opacity-30 group-hover:opacity-70 transition duration-300">
                <service.bgIcon className="text-gray-300 text-[90px]" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-full inline-block group-hover:bg-blue-100 group-hover:translate-y-1 transition">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 hover:text-primary cursor-pointer transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
