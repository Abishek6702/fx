"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        cursor-pointer p-1.5 rounded-full
        border border-gray-300 dark:border-none
        bg-white dark:bg-gray-700
        text-gray-700 dark:text-white
        transition-colors
        hover:bg-gray-100 dark:hover:bg-gray-600
      "
    >
      {currentTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
