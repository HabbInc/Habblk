import { Icon } from "@iconify/react";
import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
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
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      <div className="w-full max-w-7xl flex flex-wrap gap-6">
        {/* Contact Info Section */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold uppercase text-gray-900 border-b-4 border-primary inline-block">
              Contact Us
            </h3>
            <h5 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
              Let's Get in Touch.
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                { icon: "mdi:phone", label: "Phone", value: "+94 701 111 484" },
                { icon: "mdi:email", label: "Email", value: "habblanka@gmail.com" },
                { icon: "mdi:map-marker", label: "Location", value: "Colombo, Sri Lanka" },
                { icon: "mdi:clock-time-four", label: "Office Hours", value: "Mon-Fri: 9AM - 5PM\nSat-Sun: 9AM - 3PM" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 border-b pb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center rounded-full shadow-md transform hover:scale-110 transition">
                    <Icon icon={item.icon} width={28} />
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-sm">{item.label}</p>
                    <p className="text-gray-900 font-semibold text-lg whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/3 p-6">
          <div className="backdrop-blur-lg bg-white/30 border border-white/20 p-8 md:p-12 shadow-xl rounded-xl">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h4>
            <form onSubmit={onSubmit} className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none" name="name" required />
              <input type="email" placeholder="Your Email" className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none" name="email" required />
              <input type="text" placeholder="Phone Number" className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none" name="contact Number" required />
              <textarea placeholder="Your Message" className="w-full p-4 border-b border-gray-300 rounded-lg focus:outline-none" name="message" rows="4" required></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition">
                Send Message
              </button>
              <p className="text-gray-700 mt-2 text-center">{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
