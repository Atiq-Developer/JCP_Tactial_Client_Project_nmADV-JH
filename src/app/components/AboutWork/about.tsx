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
    { src: "/Images/12.jpg", alt: "Main Product"},
    { src: "/Images/12.jpg", alt: "Main Product"},

  ];

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        {/* Content Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-red-600 p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center md:items-start">
          <h1 className="title-font font-medium text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
            About Us - JCPTactical
          </h1>
          <p className="leading-relaxed mb-6 text-center md:text-left">
            JCPTactical is your trusted source for high-quality computer accessories, designed to support both everyday users and tech professionals. Whether you&apos;re upgrading your workspace or replacing a crucial part, we offer reliable gear that performs.
          </p>
          <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
            View Product
          </button>
        </div>

        {/* Hero Style Fanned Image Stack */}
        <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0 relative h-[400px] flex items-center justify-center">
          {featureImages.map((img, index) => {
            const angle = -15 + index * 7;
            const offsetX = index * 25 - 50;
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
                  alt={img.alt}
                  width={260}
                  height={180}
                  className="rounded-xl shadow-xl object-cover border border-white"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand Difference Section */}
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">
        What Makes Our Brand Different
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-48 py-8">
        {brandFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 p-6 md:p-8 rounded-lg shadow-md text-teal-600 flex flex-col justify-between"
          >
            <span className="block mb-4 text-lg font-semibold">
              {item.emoji}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {item.title}
            </h2>
            <p className="text-teal-600 text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
