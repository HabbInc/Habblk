import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { assets } from "../assets/assets";

const testimonials = [
  {
    id: 1,
    name: "Vishwakarma Builders (Pvt) Ltd",
    image: assets.vb,
    rating: 5,
    review:
      "We worked with HABB to create a user-friendly website for Vishwakarma Builders. The team delivered a beautifully designed, easy-to-navigate site that perfectly showcases our projects. Their attention to detail and timely delivery made the experience great.",
  },
  {
    id: 2,
    name: "Multivisa Service, Canada",
    image: assets.multivisa,
    rating: 5,
    review:
      "HABB provided top-notch IT support services, ensuring our systems run smoothly with minimal downtime. Their proactive troubleshooting and quick response have greatly improved operational efficiency.",
  },
  {
    id: 3,
    name: "tharaa.ch",
    image: assets.tharaa,
    rating: 5,
    review:
      "The team at HABB delivers outstanding web and mobile applications, perfectly aligned with our vision. Their attention to detail and seamless execution has significantly enhanced our user experience.",
  },
  {
    id: 4,
    name: "Karunya Sarees",
    image: assets.karunya,
    rating: 5,
    review:
      "HABB designed a stunning and user-friendly e-commerce platform for us. Our customers love the seamless shopping experience! The platform's smooth navigation and fast performance have helped increase customer satisfaction and sales.",
  },
  {
    id: 5,
    name: "Jaffna Business",
    image: assets.jb,
    rating: 5,
    review:
      "Jaffna Business played a crucial role in helping us register our company, guiding us through the process with expertise and professionalism. Their support laid the foundation for HABB's growth.",
  },
  {
    id: 6,
    name: "iTek Solutions, Australia",
    image: assets.itek,
    rating: 5,
    review:
      "iTek Solutions has been an invaluable partner, collaborating with us on various projects. Their expertise in technology and innovation has significantly contributed to our project's success and scalability.",
  },
  {
    id: 7,
    name: "HiTech Creations",
    image: assets.hitech,
    rating: 5,
    review:
      "HABB revolutionized our operations with their AI-driven solutions, enhancing efficiency, streamlining processes, and boosting productivity. Their innovative approach has made a significant impact on our business, allowing us to make smarter, faster decisions.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the index and rotate testimonials
  const rotateTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Create a new array where testimonials are rotated based on the currentIndex
  const rotatedTestimonials = [
    ...testimonials.slice(currentIndex),
    ...testimonials.slice(0, currentIndex),
  ];

  // Auto-rotation effect to change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds (5000ms)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 px-5 text-center">
      <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-primary pb-2">
        Read trusted reviews from our customers
      </h2>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
        {rotatedTestimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={testimonial.id}
            onClick={() =>
              rotateTestimonial((currentIndex + index) % testimonials.length)
            }
            className={`p-6 rounded-lg shadow-lg w-full md:w-80 transition-all duration-500 cursor-pointer transform ${
              index === 1
                ? "opacity-100 bg-white scale-110 shadow-xl rotate-3"
                : "opacity-50 bg-gray-200 scale-95"
            }`}
            style={{ height: "350px" }} // Fixed height for uniformity
          >
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="flex text-green-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center space-x-6">
        <button
          onClick={() =>
            rotateTestimonial(
              (currentIndex - 1 + testimonials.length) % testimonials.length
            )
          }
          className="text-gray-500 hover:text-black transition-all transform hover:scale-110"
        >
          {"<"}
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {testimonials.length}
        </span>
        <button
          onClick={() =>
            rotateTestimonial((currentIndex + 1) % testimonials.length)
          }
          className="text-gray-500 hover:text-black transition-all transform hover:scale-110"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
