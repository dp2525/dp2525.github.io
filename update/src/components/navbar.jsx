// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 bg-opacity-25 border-b-2 border-gray-300">
      <ul className="flex justify-start p-0 m-0 list-none overflow-hidden">
        <li className="float-left">
          <Link to="/" className="font-bold text-black block px-4 py-3 hover:text-teal-700">
            Home
          </Link>
        </li>
        <li className="float-left">
          <Link to="/about" className="font-bold text-black block px-4 py-3 hover:text-teal-700">
            About
          </Link>
        </li>
        <li className="float-left">
          <Link to="/contact" className="font-bold text-black block px-4 py-3 hover:text-teal-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
