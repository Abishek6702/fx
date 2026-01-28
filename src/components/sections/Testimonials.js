"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Your app brings so much peace and tolerance to our home.",
      author: "Rachael, UK",
      note: "on meditation's positive effect on family life",
    },
    {
      text: "I came to learn that the storyline in my head was holding me back.",
      author: "Peter, Belgium",
      note: "on what he learned when sitting with himself",
    },
    {
      text: "Headspace provides me with a connection to myself and a disconnection from negative thoughts.",
      author: "Keri, UK",
      note: "on finding her happy place",
    },
    {
      text: "Using Headspace changed how I handle stress every day.",
      author: "David, London",
      note: "on using meditation daily",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#070d17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-16">
          Headspace Stories
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.2}
          spaceBetween={32}
          centeredSlides
          loop
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 rounded-3xl p-10 h-full
                    ${
                      isActive
                        ? "bg-[#f2f2fa] dark:bg-[#111827] scale-100 opacity-100"
                        : "bg-[#faf7f2]/50 dark:bg-[#111827]/50 scale-95 opacity-40 blur-[1.5px]"
                    }
                  `}
                >
                  {/* Quote */}
                  <div className="text-6xl text-orange-400 leading-none mb-6">
                    <Image
                      src="/testimonial.svg"
                      alt="Quote"
                      width={64}
                      height={64}
                    />
                  </div>

                  <p className="text-lg text-gray-800 dark:text-gray-200 mb-10">
                    {item.text}
                  </p>

                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium">{item.author}</p>
                    <p className="text-xs">{item.note}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-end gap-6 mt-12">
          <button className="testimonial-prev cursor-pointer w-12 h-12 rounded-full border flex items-center justify-center  hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <ChevronLeft />
          </button>
          <button className="testimonial-next cursor-pointer w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
