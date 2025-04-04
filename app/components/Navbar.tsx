"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type DropdownType = "profile" | "cart" | "login" | null;

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: DropdownType) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null); // Close dropdowns when toggling mobile menu
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white  shadow-md rounded-2xl  py-5 px-2 lg:px-1 md:px-0.5  sm:px-2 flex justify-between items-center relative">
      {/* Left - Brand Name */} 
      <div className="text-2xl md:text-3xl font-bold text-fuchsia-700">
        Kushi Styles
      </div>

      {/* Middle - Search Bar for md+ */}
      <div className="hidden md:flex items-center bg-fuchsia-200 rounded-full px-4 py-3 w-1/3 border-2 border-transparent hover:border-fuchsia-600 ml-0.5">
        <FaSearch className="text-gray-500 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-lg"
        />
      </div>

      {/* Right - Icons & Dropdowns */}
      <div className="hidden md:flex items-center space-x-6 gap-5" ref={dropdownRef}>
        {/* Profile Dropdown */}
        <div className="relative">
          <FaUser
            className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600"
            onClick={() => toggleDropdown("profile")}
          />
          {openDropdown === "profile" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2 z-50">
              <p className="cursor-pointer p-2 hover:bg-gray-100">Profile</p>
              <p className="cursor-pointer p-2 hover:bg-gray-100">Settings</p>
              <p className="cursor-pointer p-2 hover:bg-gray-100">Logout</p>
            </div>
          )}
        </div>

        {/* Cart Dropdown */}
        <div className="relative">
          <FaShoppingCart
            className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600"
            onClick={() => toggleDropdown("cart")}
          />
          {openDropdown === "cart" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2 z-50">
              <p className="p-2">Your Cart is Empty</p>
            </div>
          )}
        </div>

        {/* Login Dropdown */}
        <div className="relative">
          <button
            className="bg-fuchsia-700 text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-fuchsia-500 transition"
            onClick={() => toggleDropdown("login")}
          >
            Login
          </button>
          {openDropdown === "login" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2 z-50">
              <p className="cursor-pointer p-2 hover:bg-gray-100">Sign In</p>
              <p className="cursor-pointer p-2 hover:bg-gray-100">Register</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {mobileMenuOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 z-40 md:hidden">
          {/* Search for Mobile */}
          <div className="flex items-center gap-3 border px-3 py-2 rounded-full bg-fuchsia-100">
            <FaSearch className="text-gray-600 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full outline-none text-base"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <FaUser className="text-gray-700 text-xl" />
            <span>Profile</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <FaShoppingCart className="text-gray-700 text-xl" />
            <span>Your Cart</span>
          </div>

          {/* Login */}
          <button className="bg-fuchsia-700 text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-fuchsia-500 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
