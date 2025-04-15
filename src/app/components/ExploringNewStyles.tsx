'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  { src: "/Images/1.jpg", alt: "Main Product" },
  { src: "/Images/3.jpg", alt: "Image 1" },
  { src: "/Images/4.jpg", alt: "Dell 65W Charger" },
  { src: "/Images/5.jpg", alt: "Dell Charger" },
  { src: "/Images/6.jpg", alt: "Accessories" },
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-0 pb-[40%] bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
