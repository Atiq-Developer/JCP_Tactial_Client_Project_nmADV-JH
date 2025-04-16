import Image from "next/image";
import React from "react";

export default function About() {
  const brandFeatures = [
    {
      emoji: "🚍",
      title: "Next Day as Standard",
      text: "Order before 3 pm to get standard delivery the next day.",
    },
    {
      emoji: "💹",
      title: "Fast Shipping",
      text: "Enjoy fast and reliable shipping for all your orders.",
    },
    {
      emoji: "💯",
      title: "Quality Assurance",
      text: "We ensure the highest quality for all our products.",
    },
    {
      emoji: "👍",
      title: "Customer Support",
      text: "We provide excellent customer support 24/7.",
    },
  ];

  const featureImages = [
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
  ];

  return (
    <section className="text-gray-600 body-font py-12">
      {/* About Section */}
      <div className="container px-4 sm:px-6 md:px-12 lg:px-20 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 bg-red-600 text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
            About Us - JCPTactical
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            JCPTactical is your trusted source for high-quality computer accessories, designed to support both everyday users and tech professionals. Whether you&apos;re upgrading your workspace or replacing a crucial part, we offer reliable gear that performs.
          </p>
          <button className="px-6 py-2 bg-teal-800 hover:bg-teal-900 transition duration-300 text-white font-semibold rounded">
            View Product
          </button>
        </div>

        {/* Fanned Image Stack */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-center">
          {featureImages.map((img, index) => {
            const angle = -15 + index * 7;
            const offsetX = index * 20 - 40;
            const offsetY = Math.abs(index - 2) * 10;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500"
                style={{
                  zIndex: 100 - index,
                  transform: `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt || "Product Image"}
                  width={240}
                  height={160}
                  loading="lazy"
                  className="rounded-xl shadow-xl object-cover border border-white"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand Feature Section */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8 mt-20">
        What Makes Our Brand Different
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-32">
        {brandFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 p-6 sm:p-8 rounded-lg shadow-md text-teal-600 flex flex-col"
          >
            <span className="block text-3xl mb-4">{item.emoji}</span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {item.title}
            </h2>
            <p className="text-red-600 text-base sm:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
