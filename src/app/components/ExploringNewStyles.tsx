"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "LOT OF (50) - Backbone USB-C Gen 1 - Video Game Mobile Controller",
    products: "362 Products",
    image: "/Images/11.jpg",
  },
  {
    id: 2,
    title: "Dell KM5221W Wireless Combo Keyboard & Mouse - Black",
    products: "157 Products",
    image: "/Images/2.jpg",
  },
  {
    id: 3,
    title: "LOT OF (30) - Dell DA20 USB Type-C to HDMI/USB Type-A Adapter",
    products: "154 Products",
    image: "/Images/13.jpg",
  },
  {
    id: 4,
    title: "LOT OF (30) - Dell Laptop Charger 100W USB-C",
    products: "114 Products",
    image: "/Images/3.jpg",
  },
  {
    id: 5,
    title: "LOT OF (17) - Dell Laptop Charger 130W USB-C",
    products: "14 Products",
    image: "/Images/9.jpg",
  },
  {
    id: 6,
    title: "HP 970 Programmable Wireless Keyboard",
    products: "20 Products",
    image: "/Images/14.png",
  },
];

export default function TopCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= categories.length - visibleCards + 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">
          Top Selling Products
        </h2>

        {/* Slider viewport */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${(100 / visibleCards) * currentIndex}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ width: `${(100 / visibleCards) * categories.length}%` }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="w-[calc(100%/3)] flex-shrink-0 relative group overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={60}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                  <p className="text-xs">{category.products}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
