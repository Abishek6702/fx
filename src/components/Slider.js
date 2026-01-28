"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide className="h-full">
          <div className="h-full  flex items-center justify-center">
            Slide 1
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="h-full  flex items-center justify-center">
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className="h-full  flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
