import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Experience" },
    { id: 5, title: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-5 text-white bg-black h-20 fixed">
      <div className="relative group">
        <h1 className="text-2xl">Bharat Suryavanshi.</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 relative group"
          >
            {title}
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl relative group"
              onClick={() => setNav(false)} // Close mobile menu on link click
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
