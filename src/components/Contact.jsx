import { Icon } from "@iconify/react";
import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bdf268ee-d880-4321-b758-d04bda1c24fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl flex flex-wrap">
        {/* Contact Info Section */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="bg-white p-10 rounded-lg">
            <h3 className="text-lg font-semibold  uppercase text-gray-900 inline-block border-b-4 border-primary">
              Contact Us
            </h3>
            <h5 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
              Our creative design solutions are for people. Contact Our Office.
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                {
                  icon: "mdi:phone",
                  label: "Contact Phone",
                  value: "+94 701 111 484",
                },
                {
                  icon: "mdi:email",
                  label: "Contact Mail",
                  value: "habblanka@gmail.com",
                },
                {
                  icon: "mdi:map-marker",
                  label: "Contact Location",
                  value:
                    "Colombo, Sri Lanka",
                },
                {
                  icon: "mdi:clock-time-four",
                  label: "Office Time",
                  value: "Mon-Fri: 9:00 - 17:00\nSat-Sun: 9:00 - 15:00",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 border-b pb-4"
                >
                  <div className="w-12 h-12 bg-blue-300 text-white flex items-center justify-center rounded-full transition-transform transform hover:scale-110">
                    <Icon icon={item.icon} width={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-sm">
                      {item.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-lg whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/3 p-6">
          <div className="bg-gray-50 p-10 shadow-lg rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h4>
            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none "
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none "
                name="email"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none "
                name="contact Number"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none "
                name="message"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-second transition"
              >
                Send Message
              </button>
              <p>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
