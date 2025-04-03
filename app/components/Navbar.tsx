"use client"; // Required for useState & useEffect in Next.js

import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

type DropdownType = "profile" | "cart" | "login" | null;

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: DropdownType) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside
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
    <nav className="bg-white shadow-md py-5 px-8 md:px-16 flex justify-between items-center">
      {/* Left - Brand Name */}
      <div className="text-3xl font-bold text-fuchsia-700">Kushi Styles</div>

      {/* Middle - Search Bar */}
      <div className="hidden md:flex items-center bg-fuchsia-200 rounded-full px-4 py-3 w-1/3 border-2 border-transparent hover:border-fuchsia-600">
        <FaSearch className="text-gray-500 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-lg"
        />
      </div>

      {/* Right - Icons & Dropdowns */}
      <div className="flex items-center space-x-6 gap-5" ref={dropdownRef}>
        {/* Profile Dropdown */}
        <div className="relative">
          <FaUser
            className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600"
            onClick={() => toggleDropdown("profile")}
          />
          {openDropdown === "profile" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2">
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
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2">
              <p className="p-2">Your Cart is Empty</p>
            </div>
          )}
        </div>

        {/* Login Dropdown (Now Works Like a Dropdown!) */}
        <div className="relative">
          <button
            className="bg-fuchsia-700 text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-fuchsia-500 transition"
            onClick={() => toggleDropdown("login")}
          >
            Login
          </button>
          {openDropdown === "login" && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md p-2">
              <p className="cursor-pointer p-2 hover:bg-gray-100">Sign In</p>
              <p className="cursor-pointer p-2 hover:bg-gray-100">Register</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
