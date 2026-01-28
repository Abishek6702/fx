import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#070d17]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – IMAGES */}
          <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/about11.jpg"
                  alt="Product"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="group rounded-3xl overflow-hidden shadow-lg border translate-y-16">
                <Image
                  src="/about22.jpg"
                  alt="Product"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <span className="text-sm tracking-widest text-blue-500 font-semibold">
              A BIT
            </span>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              ABOUT US
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded incommode. Why kept very ever home mrs. Considered
              sympathize ten uncommonly occasional assistance sufficient not.
            </p>

            <Link href="/about">
              <button className="px-8 py-4 bg-blue-600 text-white hover:text-blue-600 font-semibold dark:hover:text-white rounded-xl shadow-lg cursor-pointer hover:border-2  border-blue-600 hover:bg-transparent ">
                <p className="flex items-center gap-1">
                  {" "}
                  Explore More <MoveUpRight className="w-5 h-5" />
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
