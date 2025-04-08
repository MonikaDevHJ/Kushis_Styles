"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes
} from "react-icons/fa";

type DropdownType = "profile" | "cart" | "login" | null;

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: DropdownType) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileSubmenu = (menu: DropdownType) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
    setMobileSubmenu(null);
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
    <nav className="bg-white shadow-md rounded-2xl py-4 px-1 lg:px-2.5 md:px-0.5 sm:px-2 flex justify-between items-center relative">
      {/* Left - Brand Name */}
      <Link
        href="/"
        className="text-2xl md:text-3xl font-bold text-fuchsia-700 hover:underline"
      >
        Kushi Styles
      </Link>

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
      <div
        className="hidden md:flex items-center space-x-6 gap-5"
        ref={dropdownRef}
      >
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
              <Link href="/signin" className="block p-2 hover:bg-gray-100">
                Sign In
              </Link>
              <Link href="/register" className="block p-2 hover:bg-gray-100">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {mobileMenuOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        ) : (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
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
          <div>
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => toggleMobileSubmenu("profile")}
            >
              <div className="flex items-center gap-2">
                <FaUser className="text-gray-700 text-xl" />
                <span>Profile</span>
              </div>
              <span>{mobileSubmenu === "profile" ? "▲" : "▼"}</span>
            </div>
            {mobileSubmenu === "profile" && (
              <div className="ml-8 mt-1 flex flex-col gap-2 text-sm">
                <p className="hover:underline cursor-pointer">Profile</p>
                <p className="hover:underline cursor-pointer">Settings</p>
                <p className="hover:underline cursor-pointer">Logout</p>
              </div>
            )}
          </div>

          {/* Cart */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => toggleMobileSubmenu("cart")}
            >
              <div className="flex items-center gap-2">
                <FaShoppingCart className="text-gray-700 text-xl" />
                <span>Your Cart</span>
              </div>
              <span>{mobileSubmenu === "cart" ? "▲" : "▼"}</span>
            </div>
            {mobileSubmenu === "cart" && (
              <div className="ml-8 mt-1 text-sm text-gray-700">
                Your Cart is Empty
              </div>
            )}
          </div>

          {/* Login */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer bg-fuchsia-700 text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-fuchsia-500 transition"
              onClick={() => toggleMobileSubmenu("login")}
            >
              <span>Login</span>
              <span>{mobileSubmenu === "login" ? "▲" : "▼"}</span>
            </div>
            {mobileSubmenu === "login" && (
              <div className="ml-8 mt-2 flex flex-col gap-2 text-sm">
                <Link href="/signin" className="hover:underline">
                  Sign In
                </Link>
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
