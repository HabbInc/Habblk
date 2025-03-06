import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "HiTech Creations",
    image: "/hitech.png",
    rating: 5,
    review:
      "HABB revolutionized our operations with their AI-driven solutions, enhancing efficiency, streamlining processes, and boosting productivity. Their innovative approach has made a significant impact on our business, allowing us to make smarter, faster decisions.",
  },
  {
    id: 2,
    name: "Multivisa Service, Canada",
    image: "/multivisa.png",
    rating: 4.5,
    review:
      "HABB provided top-notch IT support services, ensuring our systems run smoothly with minimal downtime. Their proactive troubleshooting and quick response have greatly improved operational efficiency.",
  },
  {
    id: 3,
    name: "tharaa.ch",
    image: "/tharaa.png",
    rating: 5,
    review:
      "The team at HABB delivers outstanding web and mobile applications, perfectly aligned with our vision. Their attention to detail and seamless execution has significantly enhanced our user experience.",
  },
  {
    id: 4,
    name: "Karunya Sarees",
    image: "/karunya.png",
    rating: 4.8,
    review:
      "HABB designed a stunning and user-friendly e-commerce platform for us. Our customers love the seamless shopping experience! The platform's smooth navigation and fast performance have helped increase customer satisfaction and sales.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateTestimonial((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const rotateTestimonial = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating > i) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const visibleTestimonials = [
    ...testimonials.slice(currentIndex),
    ...testimonials.slice(0, currentIndex),
  ].slice(0, 3);

  return (
    <div className="py-10 px-5 text-center">
      <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2">
        Read Trusted Reviews from Our Customers
      </h2>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            onClick={() => rotateTestimonial((currentIndex + index) % testimonials.length)}
            className={`p-6 rounded-lg shadow-lg w-full md:w-80 transition-transform cursor-pointer transform ${
              index === 1 ? "scale-110 bg-white shadow-xl" : "scale-95 opacity-60 bg-gray-200"
            }`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center space-x-6">
        <button
          onClick={() => rotateTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)}
          className="text-gray-500 hover:text-black text-xl"
          aria-label="Previous Testimonial"
        >
          &#8249;
        </button>
        <span className="text-gray-600 text-lg">
          {currentIndex + 1} / {testimonials.length}
        </span>
        <button
          onClick={() => rotateTestimonial((currentIndex + 1) % testimonials.length)}
          className="text-gray-500 hover:text-black text-xl"
          aria-label="Next Testimonial"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}