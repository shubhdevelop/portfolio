"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import FeaturedBlog from "../components/FeaturedBlog";
import Projects from "../components/Projects/Projects";
import { StarsBackground } from "@/components/ui/stars-background";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Home() {
  return (
    <main className="min-h-screen  w-full p-8 pt-0 ">
      <h1 className="text-7xl font-black text-center tracking-tighter leading-12 mb-6 mt-16 ">
        AIN’T JUST A BUILDER, <br />
        BUT ALSO ENGINEERING COMPLEX PRODUCT
      </h1>
      <ShootingStars
        starColor="black"
        trailColor="yello"
        starHeight={3}
        starWidth={10}
        maxDelay={1000}
        minDelay={1000}
      />
      <StarsBackground starDensity={0.00009} />
      <p className="tracking-normal font-normal leading-5 text-gray-700 text-center">
        Welcome to my digital nook. I'm a frontend developer, technical writer.
        And here, I share what I've been working on recently <br />
        and things I learned along the way.
      </p>
      <div className="flex  justify-center items-center m-12 gap-4 underline-offset-2 underline ">
        <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">Contact</span>
        </button>

        <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
          <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative text-white">Resume</span>
        </button>
      </div>

      <Projects />
      <FeaturedBlog />
    </main>
  );
}
