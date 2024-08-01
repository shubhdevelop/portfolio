import React from "react";
import github from "@/app/assets/GitHub.svg";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import liftSim from "@/app/assets/liftSimulator.png";
import shoppingCart from "@/app/assets/shopping-cart.png";
import infiniteDraw from "@/app/assets/InfiniteDraw.png";

const Projects = () => {
  return (
    <div className="w-full mb-24">
      <h1 className="text-5xl  font-black text-center tracking-tighter leading-12  mt-24 underline underline-offset-4">
        Featured Projects
      </h1>
      <div className="flex flex-wrap justify-center w-full h-fit gap-8">
        <ProjectCard
          projectName="InfiniteCanvas"
          imgSrc={infiniteDraw}
          toolsUsed={[
            "React",
            "Redux_Toolkit",
            "Typescript",
            "HTMl_Canvas5 , tailwindcss",
          ]}
          githubLink="https://github.com/shubhdevelop/infiniteDraw"
          livePreview="https://infinite-draw.vercel.app/"
          description=""
        />
        <ProjectCard
          projectName="GRSSP"
          imgSrc={github}
          toolsUsed={["RUST"]}
          githubLink="https://github.com/shubhdevelop/grssp"
          livePreview=""
          description=""
        />
        <ProjectCard
          projectName="Lift Simulator"
          imgSrc={liftSim}
          toolsUsed={["JS", "CSS", "HTMl_Canvas"]}
          githubLink="https://github.com/shubhdevelop/Lift-Simulation"
          livePreview="https://lift-simulation-six.vercel.app/"
          description=""
        />
        <ProjectCard
          projectName="Shopping Cart"
          imgSrc={shoppingCart}
          toolsUsed={["React", "Context_API", "typescript, React_router"]}
          githubLink="https://github.com/shubhdevelop/styx-shopping-cart"
          livePreview="https://styx-shopping-cart.vercel.app/"
          description=""
        />
      </div>
      <Link className="mx-auto underline" href="/projects">
        <h1 className="text-xl font-black text-center tracking-tighter leading-12 mt-8 underline underline-offset-2">
          More
        </h1>
      </Link>
    </div>
  );
};

export default Projects;
