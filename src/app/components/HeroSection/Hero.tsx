import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const featureImages = [
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product" },
    { src: "/Images/12.jpg", alt: "Main Product"},
    { src: "/Images/12.jpg", alt: "Main Product"},

  ];
  return (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-red-500 text-[24px] font-semibold tracking-widest">
            WELCOME TO JCPTactical
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug space-y-2">
            <span className="block">Best Computer</span>
            <span className="block">Accessories Collection For</span>
            <span className="block">Your SetUp</span>
          </h1>
          <Link
            href="/Card"
            className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300"
          >
            Shop Now →
          </Link>
        </div>

        {/* Image */}
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
    </section>
  );
}
