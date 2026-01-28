"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MoveUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative w-full min-h-[calc(100vh-130px)] flex items-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
        style={{ paddingBottom: "4rem" }}
      >
        {/* ================= SLIDE 1 ================= */}
        <SwiperSlide>
          <div className="min-h-[calc(100vh-130px)] flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* LEFT */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-white text-gray-700">
                    Become a<span className="text-blue-500"> Pro </span>
                    with real-time insights and strategies
                  </h1>

                  <ul className="mt-6 space-y-3 text-sm sm:text-base dark:text-gray-300">
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
                <div className="flex flex-col justify-center items-center text-center dark:text-white text-gray-700">
                  <p className="text-base sm:text-lg md:text-2xl font-semibold mb-6">
                    Start your financial journey with confidence today!
                  </p>

                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 cursor-pointer rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-semibold"
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
          <div className="min-h-[calc(100vh-130px)] flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* LEFT */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-white text-gray-700">
                    Turn
                    <span className="text-orange-500"> knowledge </span>
                    into consistent trading performance
                  </h1>

                  <ul className="mt-6 space-y-3 text-sm sm:text-base dark:text-gray-300">
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

                {/* RIGHT */}
                <div className="flex flex-col justify-center items-center text-center dark:text-white text-gray-700">
                  <p className="text-base sm:text-lg md:text-2xl font-semibold mb-6">
                    Upgrade your trading skills with expert guidance!
                  </p>

                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 cursor-pointer rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white  transition font-semibold"
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
          <div className="min-h-[calc(100vh-130px)] flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* LEFT */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-white text-gray-700">
                    Make
                    <span className="text-yellow-500"> faster, smarter </span>
                    decisions with CrossCurrencyFX tools
                  </h1>

                  <ul className="mt-6 space-y-3 text-sm sm:text-base dark:text-gray-300">
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

                {/* RIGHT */}
                <div className="flex flex-col justify-center items-center text-center dark:text-white text-gray-700">
                  <p className="text-base sm:text-lg md:text-2xl font-semibold mb-6">
                    Trade smarter. Trade faster. Trade better.
                  </p>

                  <button
                    onClick={() =>
                      (window.location.href = "https://crosscurrencyfx.com/")
                    }
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer transition font-semibold"
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
