import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const featureImages = [
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
  ];

  return (
    <section className="bg-gray-50 px-4 sm:px-8 md:px-16 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-red-500 text-lg sm:text-xl font-semibold tracking-widest">
            WELCOME TO JCPTactical
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            <span className="block">Best Computer</span>
            <span className="block">Accessories Collection For</span>
            <span className="block">Your SetUp</span>
          </h1>
          <Link
            href="/Card"
            className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300 text-sm sm:text-base"
          >
            Shop Now →
          </Link>
        </div>

        {/* Image Group */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] flex items-center justify-center">
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
                  alt={img.alt}
                  width={180}
                  height={120}
                  className="rounded-xl shadow-xl object-cover border border-white"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
