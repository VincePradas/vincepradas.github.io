"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "../components/ui/ToggleButton";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="p-2 flex justify-between items-center mx-2">
        {/* Logo / Title */}
        <div className="flex items-center gap-3 px-2">
          <div className="font-bold text-lg">Logo</div>
          <div className="text-sm text-muted-foreground">vinXwarren</div>
        </div>

        {/* NAV - Hidden on Mobile */}
        <nav className="hidden md:flex justify-between gap-10 px-2">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 px-2">
          <ThemeToggleButton />

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 flex justify-end mx-5 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-end text-right gap-4 py-4 bg-white dark:bg-background border-t border-gray-300 dark:border-zinc-700 px-4">
          <a
            href="#hero"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#services"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
        </nav>
      </div>
    </header>
  );
}
