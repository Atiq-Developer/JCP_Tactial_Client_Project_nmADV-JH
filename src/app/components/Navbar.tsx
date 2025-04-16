"use client";

import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { RiErrorWarningLine } from "react-icons/ri";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for main menu
  const [cartCount] = useState(2); // Cart count state

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle hamburger menu

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#272343] h-[48px] w-full text-gray-300 flex justify-between items-center px-4 md:px-16">
        <div className="flex items-center space-x-2">
          <TiTick className="text-2xl" />
          <p className="text-xs md:text-sm">
            Free shipping on all orders over $15
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/Contact" className="flex gap-1 items-center">
            <RiErrorWarningLine size={24} color="#6b7280" />
            Need Help
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b-[1px] border-r-4 bg-white border-gray-300 font-[Poppins] flex items-center justify-between px-4 md:px-16 py-1">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Images/Tactical.png"
            alt="Logo"
            width={220}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Wishlist & Cart Icons */}
        <div className="flex items-center space-x-4 text-lg bg-white border-2 p-2 border-gray-200 rounded-lg">
          <Link href="/Card">
            <BsCartDash className="cursor-pointer text-red-500 hover:text-red-600" />
          </Link>
          <p className="text-gray-800 font-[Poppins]">
            Cart{" "}
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">
              {cartCount}
            </span>
          </p>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden ml-4"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Links Section */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center justify-between px-4 md:px-16 bg-white shadow-md md:shadow-none absolute md:static top-[60px] left-0 w-full z-10`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu after click
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block px-4 py-2 text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu after click
          >
            About
          </Link>
          <Link
            href="/Product"
            className="block px-4 py-2 text-gray-800 hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu after click
          >
            Shop
          </Link>
          {/* Contact Number for Small Devices */}
          <div className="block md:hidden px-4 py-2 text-gray-800">
            Contact: (808)-5550111
          </div>

          {/* Additional Links for Small Devices */}
          <div className="block md:hidden">
            <Link
              href="/Contact"
              className="sm:block md:block lg:block px-4 py-2 text-gray-800 hover:underline flex items-center"
              onClick={() => setMenuOpen(false)} // Close menu after click
            >
              <RiErrorWarningLine size={20} />
              Need Help
            </Link>
          </div>
        </div>

        {/* Contact Number for Large Devices */}
        <div className="hidden md:block text-gray-800">
          Contact: (808)-5550111
        </div>
      </div>
    </div>
  );
}
