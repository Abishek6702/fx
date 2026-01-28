"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";

const blogs = [
  {
    id: "1",
    title: "Motherhood is the hardest and the best job ever",
    image: "/blog1.jpg",
    author: "Admin",
    date: "Jun 20, 2024",
  },
  {
    id: "2",
    title: "How to protect your family from carbon monoxide",
    image: "/blog2.jpg",
    author: "Admin",
    date: "Jun 18, 2024",
  },
  {
    id: "3",
    title: "Future of data in modern technology",
    image: "/blog3.jpg",
    author: "Admin",
    date: "Jun 15, 2024",
  },
  {
    id: "4",
    title: "Mobile devices and digital lifestyle",
    image: "/blog4.jpg",
    author: "Admin",
    date: "Jun 10, 2024",
  },
  {
    id: "5",
    title: "Future of data in modern technology",
    image: "/blog5.jpg",
    author: "Admin",
    date: "Jun 15, 2024",
  },
  {
    id: "6",
    title: "Mobile devices and digital lifestyle",
    image: "/blog6.jpg",
    author: "Admin",
    date: "Jun 10, 2024",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 w-full px-4 dark:bg-[#070d17]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Latest Articles
          </h2>

          <Link
            href="/blog"
            className="text-sm font-medium px-4 py-2  flex items-center gap-1 text-blue-600 hover:underline"
          >
            View All <MoveUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrows */}
          <button className="blog-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#fafafa] cursor-pointer text-[#0b1220] dark:text-[#fafafa] dark:bg-[#0b1220] shadow rounded-full w-10 h-10 flex items-center justify-center">
            <MoveLeft className=" w-5 h-5" />
          </button>
          <button className="blog-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#fafafa] cursor-pointer text-[#0b1220] dark:text-[#fafafa] dark:bg-[#0b1220] shadow rounded-full w-10 h-10 flex items-center justify-center">
            <MoveRight className=" w-5 h-5" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <div className="group relative h-80 rounded-2xl overflow-hidden bg-black cursor-pointer">
                    {/* Image */}
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="text-lg font-semibold leading-snug mb-2">
                        {blog.title}
                      </h3>

                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{blog.author}</span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
