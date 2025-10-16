"use client";
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text/index";
import { useTheme } from "next-themes";
import { useRef } from "react";
import Image from "next/image.js";
import me from "@/assets/imgs/asdsa.png";
import meHover from "@/assets/imgs/asdsa1.png";
import arrow from "@/assets/imgs/Me.png";
import ScrollVelocity from "@/components/ScrollVelocity";
import AutoMovingCursor from "@/components/AutoMovingCursor";
import { motion } from "framer-motion";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="text-sans relative overflow-hidden scrollbar-hide"
      ref={heroRef}
    >
      <AutoMovingCursor
        size={28}
        color="#3b82f6"
        speed={10}
        label="Developer"
        triangleSize={30}
        containerRef={heroRef}
      />
      <div className=" min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-20 py-8 gap-8 lg:gap-10 relative z-10">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-center gap-4 lg:gap-0 lg:items-start text-center lg:text-left w-full lg:w-auto mt-8 lg:mt-0 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hi, I&apos;m Vince Pradas
          </motion.p>
          <motion.div 
            className="w-full max-w-xl flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <RotatingText
              text={["Web Developer", "Freelancer"]}
            />
          </motion.div>
          <motion.p 
            className="max-w-xl opacity-75 text-sm sm:text-base leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Building web apps and mobile apps is my jam — from clicking buttons
            on the frontend to handling data on the backend, I like seeing ideas
            come to life.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-5 mt-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="py-2 px-5 sm:px-6 border border-black bg-black text-white dark:bg-white dark:text-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200">
              Download CV
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  console.log("Contact section not found");
                }
              }}
              className="py-2 px-5 sm:px-6 border border-black dark:border-white text-sm sm:text-base rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Arrow */}
        <motion.div 
          className="absolute top-30 left-[55%] transform -translate-x-1/2 dark:invert hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {" "}
          <Image src={arrow} alt="me" width={180} height={180} />
        </motion.div>

        {/* Right */}
        <motion.div 
          className="flex flex-col gap-6 w-full lg:w-auto items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="relative h-65 w-85 sm:h-75 sm:w-100 lg:h-95 lg:w-125 border-2 border-dashed border-primary/25 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={isDarkMode ? me : meHover}
              alt="Vince Pradas - Full Stack Developer"
              fill
              style={{ objectFit: "contain" }}
              className="p-2"
              priority
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="w-full lg:border-t-2 lg:border-dashed border-primary/25 py-4 lg:py-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row justify-between items-center px-4 sm:px-8 lg:px-0">
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Projects Made
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Satisfied Clients
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">10+</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-y-1 lg:gap-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-xs sm:text-sm text-center lg:text-left">
                  Years of honing my skills
                </p>
                <p className="text-2xl sm:text-3xl font-semibold">3+</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 left-0 hidden lg:block "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ScrollVelocity
            texts={["WEB DEVELOPER", "SCROLL DOWN"]}
            velocity={50}
            className="custom-scroll-text"
          />
        </motion.div>
      </div>
    </section>
  );
}
