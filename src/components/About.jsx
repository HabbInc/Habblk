import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const images = [
  { src: assets.about },
  { src: assets.sliitfeb4 },
  { src: assets.sliitfeb1 },
  { src: assets.sliit0 },
  { src: assets.north11 },
  { src: assets.sliitfeb3 },
  { src: assets.sliitfeb2 },
  { src: assets.sliitfeb6 },
  { src: assets.north44 },
  { src: assets.sliitfeb5 },
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
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg shadow-lg w-full max-w-md object-cover h-auto transition-all duration-500"
          />
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B94701111055&text=Hello+Senth%2C+I+found+your+contact+on+your+website+and+I+would+like+to+talk+to+you+about+your+services."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 transform hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.994 7.994 0 0 0 8.001 0C3.582 0 0 3.582 0 8c0 1.409.369 2.722 1.006 3.875L0 16l4.219-1.104A7.964 7.964 0 0 0 8.001 16c4.418 0 8-3.582 8-8a7.96 7.96 0 0 0-2.399-5.674zM8.001 14.5a6.455 6.455 0 0 1-3.396-.946l-.243-.144-2.502.654.668-2.438-.158-.25a6.469 6.469 0 0 1-.999-3.376c0-3.584 2.916-6.5 6.5-6.5 1.737 0 3.367.675 4.598 1.902A6.465 6.465 0 0 1 14.501 8c0 3.584-2.916 6.5-6.5 6.5z" />
          <path d="M11.603 9.61c-.173-.087-1.02-.502-1.178-.558-.157-.058-.272-.087-.387.087-.115.173-.445.558-.546.673-.101.115-.202.13-.375.043-.173-.087-.729-.268-1.39-.856-.514-.46-.86-1.03-.961-1.203-.101-.173-.011-.267.076-.354.078-.077.173-.202.26-.303.087-.101.115-.173.173-.288.058-.115.029-.216-.014-.303-.043-.087-.387-.93-.531-1.272-.14-.336-.281-.29-.387-.295-.101-.006-.216-.007-.331-.007-.115 0-.303.043-.46.216-.157.173-.616.601-.616 1.463s.63 1.698.717 1.812c.087.115 1.24 1.896 3.005 2.657.42.181.748.29 1.003.371.421.134.804.115 1.106.07.337-.05 1.02-.417 1.164-.82.144-.403.144-.748.101-.82-.043-.072-.158-.115-.331-.202z" />
        </svg>
      </a>
    </div>
  );
};

export default AboutUs;
