"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import FeaturedBlog from "../components/FeaturedBlog";
import Projects from "../components/Projects/Projects";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="min-h-screen  w-full p-8 pt-0 ">
      <h1 className="text-7xl font-black text-center tracking-tighter leading-16 mb-6 mt-24 ">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-black dark:text-white">
              AIN’T JUST A BUILDER,
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        BUT ALSO AN <br /> ENGINEERING MAKING COMPLEX PRODUCT
      </h1>

      <p className="tracking-normal font-normal leading-5 text-gray-700 text-center">
        {` Welcome to my digital nook. I'm a frontend developer, technical writer.
        And here, I share what I've been working on recently <br />
        and things I learned along the way.`}
      </p>
      <div className="flex  justify-center items-center m-12 gap-4 underline-offset-2 underline ">
        <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">Contact</span>
        </button>
        <a href="https://google.com/resume" target="blank">
          <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative text-white">Resume</span>
          </button>
        </a>
      </div>

      <Projects />
      <FeaturedBlog />
    </main>
  );
}
