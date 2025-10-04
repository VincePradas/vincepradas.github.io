"use client";

import { RotatingText } from "@/components/ui/shadcn-io/rotating-text/index";
import { useTheme } from "next-themes";
import Image from "next/image.js";
import me from "@/assets/imgs/asdsa.png";
import meHover from "@/assets/imgs/asdsa1.png";
import arrow from "@/assets/imgs/Me.png";
import ScrollVelocity from "@/components/ScrollVelocity";
import AutoMovingCursor from "@/components/AutoMovingCursor";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <section
      id="hero"
      className="text-sans relative overflow-hidden snap-start scrollbar-hide"
    >
      <AutoMovingCursor
        size={28}
        color="#3b82f6"
        speed={10}
        label="Developer"
        triangleSize={30} 
      />
      <div className=" min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-20 py-8 gap-8 lg:gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-4 lg:gap-0 lg:items-start text-center lg:text-left w-full lg:w-auto mt-8 lg:mt-0 ">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium">
            Hi, I&apos;m Vince Pradas
          </p>
          <div className="w-full max-w-xl flex justify-center lg:justify-start">
            <RotatingText
              text={["Full-Stack Developer", "UI/UX Designer", "Freelancer"]}
            />
          </div>
          <p className="max-w-xl opacity-75 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Building web apps and mobile apps is my jam — from clicking buttons
            on the frontend to handling data on the backend, I like seeing ideas
            come to life.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-4 justify-center lg:justify-start">
            <button className="py-2 px-5 sm:px-6 border border-black bg-black text-white dark:bg-white dark:text-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200">
              Download CV
            </button>
            <button className="py-2 px-5 sm:px-6 border border-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-30 left-[55%] transform -translate-x-1/2 dark:invert hidden lg:block">
          {" "}
          <Image src={arrow} alt="me" width={180} height={180} />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 w-full lg:w-auto items-center">
          <div className="relative h-65 w-85 sm:h-75 sm:w-100 lg:h-95 lg:w-125 border-2 border-dashed border-primary/25 rounded-lg">
            <Image
              src={isDarkMode ? me : meHover}
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
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Projects Made
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2">
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Satisfied Clients
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2">
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Years of honing my skills
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">3+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 hidden lg:block ">
          <ScrollVelocity
            texts={["SOFTWARE DEVELOPER", "SCROLL DOWN"]}
            velocity={50}
            className="custom-scroll-text"
          />
        </div>
      </div>
    </section>
  );
}
