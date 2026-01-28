"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { LogIn, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      setIsAtTop(false);
      return;
    }

    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    const onHashChange = () => {
      setActiveHash(window.location.hash.replace("#", ""));
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHashChange);

    onScroll();
    onHashChange();

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveHash(visibleSection.target.id);
        }
      },
      {
        threshold: 0.6, // section must be 60% visible
        rootMargin: "0px",
      },
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [pathname]);

  const navLink = (key) => {
    const isActive =
      pathname === key ||
      (pathname === "/" && activeHash === key) ||
      (key === "/" && pathname === "/" && isAtTop);

    return `font-semibold transition-colors ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fafafa]  dark:bg-[#070d17]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-gray-800 dark:text-gray-200"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>

          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src={"/logo.png"}
              alt="CrossCurrencyFX Logo"
              width={52}
              height={52}
              priority
            />
            <span className="hidden md:block text-lg font-bold text-blue-900 dark:text-blue-100">
              CrossCurrencyFX
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6 ">
          {" "}
          {/* CENTER: Desktop Links (lg+) */}
          <div className="hidden lg:flex gap-6 ">
            <Link href="/#home" className={navLink("home")}>
              Home
            </Link>
            <Link href="/#about" className={navLink("about")}>
              About Us
            </Link>
            <Link href="/#services" className={navLink("services")}>
              Services
            </Link>
            <Link href="/#faq" className={navLink("faq")}>
              FAQ
            </Link>
            <Link href="/blog" className={navLink("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={navLink("/contact")}>
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {" "}
          <button
            className="hidden md:flex px-3 py-1.5  items-center gap-2 gradient text-white rounded-md cursor-pointer transition-colors"
            onClick={() => {
              window.location.href = "https://crosscurrencyfx.com/";
            }}
          >
            <LogIn className="w-4 h-4" />
            Login / SignUp
          </button>
          {/* RIGHT: Dark Mode Toggle (ALWAYS right) */}
          <DarkModeToggle />
        </div>
      </nav>

      {/* MOBILE / TABLET DRAWER */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white dark:bg-[#070d17]
          p-6 flex flex-col gap-6 transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-900 dark:text-blue-100">
              CrossCurrencyFX
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={26} className="text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              href="/#home"
              onClick={() => setOpen(false)}
              className={navLink("home")}
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className={navLink("about")}
            >
              AboutUs
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className={navLink("services")}
            >
              Services
            </Link>
            <Link
              href="/#faq"
              onClick={() => setOpen(false)}
              className={navLink("faq")}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={navLink("/blog")}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={navLink("/contact")}
            >
              ContactUs
            </Link>
          </nav>

           <button
            className="w-fit px-3 py-1.5 flex md:hidden items-center gap-2 gradient text-white rounded-md cursor-pointer transition-colors"
            onClick={() => {
              window.location.href = "https://crosscurrencyfx.com/";
            }}
          >
            <LogIn className="w-4 h-4" />
            Login / SignUp
          </button>
        </div>
      </div>
    </header>
  );
}
