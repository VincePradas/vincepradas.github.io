"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "./ui/shadcn-io/ToggleButton";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        event.target &&
        !(event.target as Element).closest("header")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="px-4 py-3 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="flex items-center gap-2 px-1">
          <div className="font-bold text-xl text-foreground">VP</div>
          <div className="text-sm text-foreground/70 hidden sm:block">
            Vince Pradas
          </div>
        </div>

        {/* NAV - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-8 px-1">
          <a
            href="#hero"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            Skills
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-foreground/80 transition-colors px-2 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 px-1">
          <ThemeToggleButton />

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-foreground/10 ${
              menuOpen ? "bg-foreground/10" : "hover:scale-105"
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <Menu
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        } overflow-hidden`}
      >
        <nav className="bg-background/95 backdrop-blur-xl border-t border-foreground/10 shadow-lg">
          <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <div
                key={item.href}
                className={`transform transition-all duration-300 delay-${
                  index * 50
                } ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 150);
                  }}
                  className="block w-full text-right py-2.5 px-3 text-base font-medium text-foreground hover:text-foreground/80 hover:bg-foreground/5 rounded-lg transition-all duration-200"
                >
                  <span className="inline-block transform hover:translate-x-1 transition-transform duration-200">
                    {item.label}
                  </span>
                </a>
              </div>
            ))}

            {/* Mobile Menu Footer */}
            <div className="pt-4 mt-4 border-t border-foreground/10">
              <div className="text-center">
                <div className="text-xs text-foreground/50">
                  Full-Stack Developer • Ready to build something amazing?
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
