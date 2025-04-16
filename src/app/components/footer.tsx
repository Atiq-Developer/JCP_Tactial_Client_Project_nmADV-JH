import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <div>
      <div className="w-full bg-white text-[#272343] px-4 sm:px-8 md:px-16 pt-10 flex flex-col gap-8">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 font-[Poppins]">
          {/* Logo + Info */}
          <div className="w-full md:w-1/3 px-2 flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/Images/Tactical.png"
                alt="Tactical Logo"
                width={220}
                height={80}
                className="cursor-pointer"
              />
            </Link>
            <p className="text-base text-gray-700 max-w-[320px]">
              Located in beautiful Loveland CO. We have been in business since
              2012 and are still going strong! We are open from 9AM to 4PM MST.
            </p>
            <div className="flex gap-4 text-2xl pt-4">
              <FaFacebook className="text-blue-500 hover:text-black" />
              <FaTwitter className="text-blue-500 hover:text-black" />
              <FaInstagram className="text-pink-500 hover:text-black" />
              <FaPinterest className="text-gray-600 hover:text-black" />
              <FaYoutube className="text-red-700 hover:text-black" />
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/4 px-2">
            <h2 className="text-lg font-semibold text-gray-600 mb-4">SUPPORT</h2>
            <ul className="space-y-2">
              {[
                "Help & Support",
                "Terms & Conditions",
                "Privacy Policy",
                "Help",
              ].map((item) => (
                <li key={item} className="text-base text-gray-800 hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-2/5 px-2 space-y-4">
            <h2 className="text-lg font-semibold text-gray-600">NEWSLETTER</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="text"
                placeholder="Your email"
                className="w-full sm:w-[70%] px-4 py-2 bg-black border border-white rounded-md text-white placeholder-gray-400"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Bottom Footer */}
        <p className="text-center text-sm sm:text-base text-gray-700 py-4 font-semibold">
          © Copyright 2025. Designed & Developed by Atiq_Developer | TechCraft.inc
        </p>
      </div>
    </div>
  );
}
