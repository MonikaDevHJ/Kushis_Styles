import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-5 px-8 md:px-16 flex justify-between items-center">
      {/* Left - Brand Name */}
      <div className="text-2xl font-extrabold text-gray-900">Kushi Styles</div>

      {/* Middle - Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3 w-1/3">
        <FaSearch className="text-gray-500 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-lg"
        />
      </div>

      {/* Right - Icons & Login Button */}
      <div className="flex items-center space-x-6">
        <FaUser className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600" />
        <FaShoppingCart className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600" />
        <button className="bg-blue-600 text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
