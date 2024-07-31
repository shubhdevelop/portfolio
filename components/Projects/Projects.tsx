import React from "react";
import github from "@/app/assets/GitHub.svg";
import infiniteDraw from "@/app/assets/infiniteDraw.jpg";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-full mb-24">
      <h1 className="text-5xl  font-black text-center tracking-tighter leading-12 mb-16 mt-24">
        Featured Projects
      </h1>
      <div className="flex flex-wrap justify-center w-full h-fit gap-8">
        <ProjectCard
          projectName="InfiniteCanvas"
          imgSrc={infiniteDraw}
          toolsUsed={["React", "Redux", "Toolkit", "HTMl", "Canvas"]}
          githubLink="https://github.com/infiniteCanvas"
          variant="yellow"
        />{" "}
        <ProjectCard
          projectName="Chat"
          imgSrc={github}
          toolsUsed={["React", "Redux", "Toolkit", "HTMl", "Canvas"]}
          githubLink="https://github.com/infiniteCanvas"
          variant="yellow"
        />
        <ProjectCard
          projectName="Lift Simulator"
          imgSrc={github}
          toolsUsed={["React", "Redux", "Toolkit", "HTMl", "Canvas"]}
          githubLink="https://github.com/infiniteCanvas"
          variant="yellow"
        />
      </div>
      <Link className="mx-auto underline" href="/projects">
        <h1 className="text-xl font-black text-center tracking-tighter leading-12 mt-8">
          More
        </h1>
      </Link>
    </div>
  );
};

export default Projects;
