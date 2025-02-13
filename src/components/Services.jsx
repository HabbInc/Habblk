import React from "react";
import { FaCode, FaBrain, FaCloud, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "We build high-quality, scalable applications tailored to your business needs, leveraging the latest technologies.",
      icon: <FaCode className="text-primary text-4xl" />,
      bgIcon: FaCode,
    },
    {
      title: "AI & Automation",
      description:
        "Harness the power of AI and automation to optimize workflows, enhance decision-making, and drive innovation.",
      icon: <FaBrain className="text-primary text-4xl" />,
      bgIcon: FaBrain,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Seamlessly integrate cloud services and DevOps practices for scalability, reliability, and performance.",
      icon: <FaCloud className="text-primary text-4xl" />,
      bgIcon: FaCloud,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Secure your digital assets with our advanced cybersecurity strategies, ensuring data protection and compliance.",
      icon: <FaShieldAlt className="text-primary text-4xl" />,
      bgIcon: FaShieldAlt,
    },
  ];

  return (
    <section id="services" className="py-12  text-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          What We Offer
          <span className="block w-16 h-1 bg-primary mx-auto mt-2"></span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          At HABB, we deliver cutting-edge software solutions tailored to meet
          your business needs. From AI-powered automation to scalable cloud
          services, we help businesses thrive in the digital era.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 overflow-hidden"
            >
              {/* Background Icon Always Visible */}
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

export default Services;
