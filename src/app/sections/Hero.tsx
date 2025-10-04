import { RotatingText } from "@/components/ui/rotating-text";
import Image from "next/image.js";
import me from "@/assets/imgs/asdsa.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-sans"
    >
      {/* Left */}
      <div className="min-h-screen justify-center flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-20 py-10 gap-10 text-sans">
      <div className="flex flex-col gap-3 lg:mt-0 items-center lg:items-start">
        <p className="text-xl lg:text-2xl">Hi, I’m Vince Pradas</p>

        <div className="max-w-xl flex">
          <RotatingText
            text={["Full-Stack Developer", "UI/UX Designer", "Freelancer"]}
          />
        </div>

        <p className="max-w-xl opacity-75 text-sm lg:text-base leading-relaxed text-center lg:text-left">
          Building web apps is my jam — from clicking buttons on the frontend to
          handling data on the backend, I like seeing ideas come to life.
        </p>

        <div className="flex flex-wrap gap-5 mt-5">
          <button className="py-2 px-6 border border-black bg-black text-white dark:bg-white dark:text-black">
            Download CV
          </button>
          <button className="py-2 px-6 border border-black dark:border-white">
            Contact
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-y-6">
        <div className="relative h-75 w-100 lg:h-95 lg:w-125 center lg:block border-2 border-dashed border-primary/25">
          <Image
            src={me}
            alt="me"
            fill
            style={{ objectFit: "contain" }}
            className="p-2"
          />
        </div>

<div className="border-t-2 border-dashed border-primary/25 py-3 flex flex-row justify-around lg:justify-between items-center">
          <div className="">
            <p className="text-sm">Projects Made</p>
            <p className="text-3xl">10+</p>
          </div>
          <div>
            <p className="text-sm">Satisfied Clients</p>
            <p className="text-3xl">10+</p>
          </div>
          <div>
            <p className="text-sm">Years of Experience</p>
            <p className="text-3xl">3+</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
