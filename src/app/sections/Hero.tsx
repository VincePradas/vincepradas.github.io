"use client";

import { RotatingText } from "@/components/ui/shadcn-io/rotating-text/index";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import me from "@/assets/imgs/asdsa.png";
import meHover from "@/assets/imgs/asdsa1.png";
import { useTheme } from "next-themes";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  const imageSrc = !mounted
    ? me
    : isHovered
    ? isDarkMode
      ? meHover
      : me
    : isDarkMode
    ? me
    : meHover;

  return (
    <section id="hero" className="text-sans">
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-20 py-8 gap-8 lg:gap-10 border border-black">
        
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:gap-3 items-center lg:items-start text-center lg:text-left w-full lg:w-auto mt-8 lg:mt-0">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium">Hi, I&apos;m Vince Pradas</p>

          <div className="w-full max-w-xl flex justify-center lg:justify-start">
            <RotatingText
              text={["Full-Stack Developer", "UI/UX Designer", "Freelancer"]}
            />
          </div>

          <p className="max-w-xl opacity-75 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Building web apps and mobile apps is my jam — from clicking buttons on the frontend
            to handling data on the backend, I like seeing ideas come to life.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-5 mt-4 justify-center lg:justify-start">
            <button className="py-2 px-5 sm:px-6 border border-black bg-black text-white dark:bg-white dark:text-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200">
              Download CV
            </button>
            <button className="py-2 px-5 sm:px-6 border border-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              Contact
            </button>
          </div>
        </div>

        {/* Right Content - Image & Stats */}
        <div className="flex flex-col gap-6 w-full lg:w-auto items-center">
          {/* Image Container */}
          <div
            className="relative h-65 w-85 sm:h-75 sm:w-100 lg:h-95 lg:w-125 border-2 border-dashed border-primary/25 rounded-lg"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <Image
              src={imageSrc}
              alt="Vince Pradas - Full Stack Developer"
              fill
              style={{ objectFit: "contain" }}
              className="p-2"
              priority
            />
          </div>

          {/* Stats Section */}
          <div className="w-full lg:border-t-2 lg:border-dashed border-primary/25 py-4 lg:py-3">
            <div className="flex flex-row justify-between items-center px-4 sm:px-8 lg:px-0">
              <div className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2">
                <p className="text-xs sm:text-sm text-center lg:text-left">Projects Made</p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2">
                <p className="text-xs sm:text-sm text-center lg:text-left">Satisfied Clients</p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2">
                <p className="text-xs sm:text-sm text-center lg:text-left">Years of Experience</p>
                <p className="text-2xl sm:text-3xl font-semibold">3+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}