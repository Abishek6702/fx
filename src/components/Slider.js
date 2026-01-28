"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MoveUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative min-h-screen md:h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {/* ================= SLIDE 1 ================= */}
        <SwiperSlide>
          <div className="h-full  flex items-center justify-center  md:py-0 ">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2  ">
              {/* LEFT */}
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight dark:text-white">
                  Become a
                  <span className="text-blue-500"> Pro Forex Trader </span>
                  with real-time insights and smart strategies
                </h1>

                <ul className="mt-6 space-y-3 text-base dark:text-gray-300">
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full hidden lg:block" />
                    Learn market structure, price action, and risk management
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full hidden lg:block" />
                    Access real-time forex analysis and strategies
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full hidden lg:block" />
                    Trade confidently with expert-backed insights
                  </li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-center items-center text-center dark:text-white">
                <p className="text-lg sm:text-xl md:text-3xl font-semibold mb-6">
                  Start your financial journey with confidence today!
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-semibold"
                  >
                    Get Started <MoveUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 ================= */}
        <SwiperSlide>
          <div className="h-full flex items-center justify-center  md:py-0">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white">
                  Turn
                  <span className="text-orange-500"> knowledge </span>
                  into consistent trading performance
                </h1>

                <ul className="mt-6 space-y-3 text-base dark:text-gray-300">
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full hidden lg:block" />
                    Beginner to advanced forex learning programs
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full hidden lg:block" />
                    Live mentorship and psychology guidance
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full hidden lg:block" />
                    Proven strategies by professionals
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center text-center dark:text-white">
                <p className="text-lg sm:text-xl md:text-3xl font-semibold mb-6">
                  Upgrade your trading skills with expert guidance!
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition font-semibold"
                  >
                    Explore Programs <MoveUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 3 ================= */}
        <SwiperSlide>
          <div className="h-full flex items-center justify-center  md:py-0">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white">
                  Make
                  <span className="text-yellow-500"> faster, smarter </span>
                  decisions with CrossCurrencyFX tools
                </h1>

                <ul className="mt-6 space-y-3 text-base dark:text-gray-300">
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full hidden lg:block" />
                    Real-time market updates and setups
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full hidden lg:block" />
                    Risk-managed strategies
                  </li>
                  <li className="flex gap-3 justify-center lg:justify-start">
                    <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full hidden lg:block" />
                    Community-driven support
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center text-center dark:text-white">
                <p className="text-lg sm:text-xl md:text-3xl font-semibold mb-6">
                  Trade smarter. Trade faster. Trade better.
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition font-semibold"
                  >
                    Join Now <MoveUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
