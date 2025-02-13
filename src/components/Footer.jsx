import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#121829] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold">Habb.</h2>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-2 md:mt-0">
          © 2025 Habb. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="p-2 rounded-lg bg-[#1E293B] hover:bg-primary transition"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg bg-[#1E293B] hover:bg-primary transition"
          >
            <BiLogoBehance className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg bg-[#1E293B] hover:bg-primary transition"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg bg-[#1E293B] hover:bg-primary transition"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-2 rounded-lg bg-[#1E293B] hover:bg-primary transition"
          >
            <FaEnvelope className="text-white text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
