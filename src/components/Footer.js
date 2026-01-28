import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FaFaFA] dark:bg-[#070d17] text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700  ">
      <div className=" w-[95%] mx-auto px-6 py-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
        {/* Brand */}
        <div className="lg:col-span-1 space-y-4">
          <Link href="/" className="lg:flex items-center  gap-2">
            <Image
              src={"/logo.png"}
              alt="CrossCurrencyFX Logo"
              width={52}
              height={52}
              priority
              className=" lg:m-0     m-auto"
            />
            <span className=" text-lg font-bold text-blue-900 dark:text-blue-100">
              CrossCurrencyFX
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            OurStudio is a digital agency <br />
            UI / UX Design and Website <br />
            Development located in Ohio, <br />
            United States of America
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Service</h3>
          <ul className="space-y-3 text-sm">
            <li>Illustration</li>
            <li>Mobile Design</li>
            <li>Motion Graphic</li>
            <li>Web Design</li>
            <li>Development</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>Service</li>
            <li>Features</li>
            <li>Our Team</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start justify-center md:justify-start gap-3">
              <MapPin size={18} className="text-blue-600 mt-1" />
              <span>8819 Ohio St. South Gate, CA 90280</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={18} className="text-blue-600" />
              <span>ourstudio@hello.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={18} className="text-blue-600" />
              <span>+1 386-688-3295</span>
            </li>
          </ul>
        </div>
        {/* Social */}
        <div className="hidden">
          <div className="flex gap-4 mb-6">
            {["Dr", "Be", "Ig"].map((item) => (
              <div
                key={item}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div className="text-center text-sm py-6 border-t border-gray-300 dark:border-gray-700">
        © 2024 CrossCurrencyFX. All rights reserved.
      </div>
    </footer>
  );
}
