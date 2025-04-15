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
      <div className="w-full xs:h-[1100px] md:h-[440px] bg-white text-[#272343] px-16 pt-10 flex flex-col justify-between xs:mt-[400px] md:mt-0">
        <div className="w-full md:h-[240px] flex md:gap-[20px] font-[Poppins] xs:flex-col md:flex-row">
          <div className="md:w-[20%] px-4 flex flex-col gap-4 py-3">
            <Link href="/">
              <Image
                src="/Images/Tactical.png"
                alt="Tactical Logo"
                width={220}
                height={80}
                className="cursor-pointer"
              />
            </Link>
            <p className="font-[Poppins] pt-8 text-[20px] w-[320px] font-light opacity-80">
            Located in beautiful Loveland CO. We have been in business since 2012 and are still going strong! We are open from 9AM to 4PM MST.
            </p>
            <span className="flex space-x-5 text-2xl font-bold pt-6">
              <FaFacebook className="w-[38px] h-[38px] text-blue-500 rounded-full hover:bg-white hover:text-black" />
              <FaTwitter className="w-[38px] h-[38px] text-blue-500 rounded-full hover:bg-white hover:text-black" />
              <FaInstagram className="w-[38px] h-[38px] text-red-500 rounded-full hover:bg-white hover:text-black" />
              <FaPinterest className="w-[38px] h-[38px] text-gray-600 rounded-full hover:bg-white hover:text-black" />
              <FaYoutube className="w-[38px] h-[38px] text-red-700 rounded-full hover:bg-white hover:text-black" />
            </span>
          </div>

          {/* Categories Section */}
          <div className="md:ml-auto md:w-[20%] py-3 px-4">
            <h2 className="font-[Poppins] text-[20px] font-light opacity-60 pb-6">
              CATEGORY
            </h2>
            {[
              "HP Products",
              "Video Game Accessories",
              "Wholesale Lots",
              "Dell Products",
              "KeyBoards & Mouse",
              "Apple Products",
            ].map((item) => (
              <p
                key={item}
                className="text-[18px] font-normal text-[#272343] hover:text-[#3eb8a4] hover:underline duration-200"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Support Section */}
          <div className="md:w-[20%] py-3 px-4 ">
            <h2 className="font-[Poppins] text-[20px] font-light opacity-60 pb-6">
              SUPPORT
            </h2>
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item) => (
              <p key={item} className="text-[18px] font-normal">
                {item}
              </p>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="md:w-[25%] py-3 px-4 space-y-3">
            <h2 className="font-[Poppins] text-[20px] font-light opacity-60 pb-6">
              NEWSLETTER
            </h2>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-[70%] px-4 py-2 bg-black border border-white rounded-md text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-[#3eb8a4] text-white rounded-md hover:bg-[#34a38b]">
                Subscribe
              </button>
            </div>
            <p className="text-[16px] font-light text-gray-900 opacity-60 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
      {/* Footer Bottom */}
      <p className=" bg-white  w-full text-black flex px-4 md:px-16 pb-3 pt-0 items-center justify-center text-[18px] font-[Poppins] font-bold mt-4">
        &#169; Copyright 2025.Designed & Developed by Atiq_Developer TechCraft.inc
      </p>
    </div>
  );
}
