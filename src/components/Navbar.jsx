import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-screen fixed left-0 top-0 flex justify-between items-center px-6 md:px-20 py-4 bg-white shadow-md z-50">
      {/* ✅ Fixed Logo */}
      <img src="/habbpr.jpg" alt="HABB Logo" className="h-10 md:h-12" />

      <h1 className="text-xl md:text-2xl font-bold text-primary">
        WELCOME TO HABB!
      </h1>

      {/* ✅ Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-gray-800 font-medium">
          {["Features", "About", "Services", "Blogs", "Team", "Contact"].map(
            (name, index) => (
              <li key={index} className="relative group cursor-pointer">
                <a
                  href={`#${name.toLowerCase()}`}
                  className="hover:text-primary relative"
                >
                  {name}
                  <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
          {/* HABB POS Link (New or Blinking) */}
          <li className="relative group cursor-pointer">
            <a
              href="https://pos.habb.lk"
              className="text-red-600 font-semibold relative"
            >
              HABB POS
              <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="absolute animate-blink left-[-10px] top-[-10px] w-3 h-3 bg-red-600 rounded-full"></span>
          </li>
        </ul>

        <a
          href="/#contact"
          className="bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* ✅ Mobile Menu Button */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        />
      </div>

      {/* ✅ Mobile Menu */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg flex flex-col gap-6 py-20 px-10 transition-transform duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <FaTimes
          className="absolute right-6 top-6 text-2xl cursor-pointer"
          onClick={closeMenu}
          aria-label="Close Menu"
        />

        <ul className="flex flex-col gap-4">
          {["Features", "About", "Services", "Blogs", "Team", "Contact"].map(
            (name, index) => (
              <li key={index} className="list-none">
                <a
                  className="relative text-lg font-medium block pb-1 hover:text-primary group"
                  onClick={closeMenu}
                  href={`#${name.toLowerCase()}`}
                >
                  {name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
          {/* HABB POS Link (Mobile) */}
          <li className="list-none relative group cursor-pointer">
            <a
              href="https://pos.habb.lk"
              className="text-red-600 font-semibold relative"
            >
              HABB POS
              <span className="absolute left-0 bottom-[-8px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="absolute animate-blink left-[-10px] top-[-10px] w-3 h-3 bg-red-600 rounded-full"></span>
          </li>
        </ul>

        <a
          href="/#contact"
          className="bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
