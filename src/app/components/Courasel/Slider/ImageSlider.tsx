"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/ImageSlider.css";

type ImageItem = {
  src: string;
  alt: string;
};

export default function ImageSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imageData: ImageItem[] = [
    { src: "/Images/amazon.png", alt: "Amazon" },
    { src: "/Images/apple.png", alt: "Apple" },
    { src: "/Images/discover.jpg", alt: "Discover" },
    { src: "/Images/ebay.png", alt: "eBay" },
    { src: "/Images/express.jpg", alt: "Express" },
    { src: "/Images/fed.png", alt: "FedEx" },
    { src: "/Images/google.png", alt: "Google" },
    { src: "/Images/hyper.png", alt: "Hyper" },
    { src: "/Images/mastercard.png", alt: "Mastercard" },
    { src: "/Images/microsoft.png", alt: "Microsoft" },
    { src: "/Images/stripe.png", alt: "Stripe" },
    { src: "/Images/ups.png", alt: "UPS" },
    { src: "/Images/visa.png", alt: "Visa" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return isClient ? (
    <section className="bg-gray-50 px-4 md:px-16 py-16">
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {imageData.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-32 bg-white p-4 rounded-md shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={120}
                height={80}
                className="object-contain h-20 w-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  ) : null;
}
