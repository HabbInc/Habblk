import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { assets } from "../assets/assets";

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.1 },
  }),
};

const Header = () => {
  const text =
    "Delivering IT Solutions That Enable You To Work Smarter.";

  return (
    <section>
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white pt-16 md:pt-0"
        style={{ backgroundImage: `url(${assets.bg})` }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <p className="text-sm uppercase tracking-widest text-white mb-2">
              We Are Dedicated
            </p>

            {/* Animated Heading */}
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.07, duration: 0.4 },
                    },
                  }}
                  className={
                    char === " "
                      ? "inline-block w-1"
                      : text.substring(i, i + 12).toLowerCase() ===
                        "work smarter"
                      ? "text-blue-700"
                      : ""
                  }
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-gray-300 mb-6"
            >
              At HABB, we specialize in cutting-edge software solutions that
              empower businesses and individuals to thrive in the digital age.
              We combine innovation, user-centric design, and AI-driven insights
              to build scalable and secure applications.
            </motion.p>

            {/* Animated Buttons */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {/* Contact Button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Contact
              </motion.a>

              {/* Play Button */}
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full hover:bg-gray-800 transition"
              >
                <FaPlay />
              </motion.button>

              {/* New POS Link with Blinking Effect */}
              <motion.a
                href="https://habblanka.com"
                className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: { repeat: Infinity, repeatType: "reverse", duration: 1 },
                }}
              >
                <span className="relative">
                  .COM
                  <span className="absolute top-0 right-0 text-xs bg-yellow-400 text-black rounded-full w-4 h-4 flex items-center justify-center animate-ping">!</span>
                </span>
              </motion.a>
            </div>
          </div>

          {/* Right Section (Animated Image) */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            <motion.img
              src={assets.girl}
              alt="IT Solutions"
              className="w-[95%] md:w-[90%] lg:w-[100%] rounded-lg  object-cover h-auto relative 
                         top-6 md:top-20 lg:top-28"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10, // Moves up slightly on hover
                scale: 1.05, // Slightly enlarges the image
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
