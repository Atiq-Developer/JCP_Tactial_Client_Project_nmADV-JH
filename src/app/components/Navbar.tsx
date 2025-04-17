"use client";

import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { RiErrorWarningLine } from "react-icons/ri";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#272343] h-[48px] w-full text-gray-300 flex justify-between items-center px-4 md:px-16 text-sm">
        <div className="flex items-center space-x-2">
          <TiTick className="text-2xl text-green-400" />
          <p>Free shipping on all orders over $15</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <RiErrorWarningLine size={20} />
          <Link href="/Contact">Need Help</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 font-[Poppins] flex items-center justify-between px-4 md:px-16 py-2 shadow-sm">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Images/Tactical.png"
            alt="JCPTactical Logo"
            width={220}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Cart Section */}
        <div className="flex items-center space-x-4">
          <Link href="/Card" className="relative group">
            <BsCartDash className="text-red-500 text-xl hover:text-red-600" />
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </Link>
          <span className="hidden sm:inline-block text-gray-800 font-medium">Cart</span>

          {/* Hamburger Button */}
          <button
            className="md:hidden ml-4"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile & Desktop Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center justify-between bg-white shadow-md md:shadow-none md:static absolute top-[100%] left-0 w-full transition-all duration-300`}
      >
        <div className="flex flex-col md:flex-row md:space-x-8 px-4 md:px-16 py-4 md:py-0">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/About" },
            { label: "Shop", href: "/Product" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block px-4 py-2 text-gray-800 hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Extra on Mobile */}
          <div className="block md:hidden px-4 py-2 text-gray-800">
            Contact: +1 (505) 350-0696
          </div>
          <div className="block md:hidden px-4 py-2 text-gray-800 flex items-center gap-2">
            <RiErrorWarningLine size={20} />
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              Need Help
            </Link>
          </div>
        </div>

        {/* Contact on Desktop */}
        <div className="hidden md:block px-4 md:px-16 text-gray-800 font-medium">
          Contact: +1 (505) 350-0696
        </div>
      </div>
    </div>
  );
}
