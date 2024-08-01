import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import liftSim from "@/app/assets/liftSimulator.png";
import shoppingCart from "@/app/assets/shopping-cart.png";
import infiniteDraw from "@/app/assets/InfiniteDraw.png";
import github from "@/app/assets/GitHub.svg";

import ProjectCard from "@/components/Projects/ProjectCard";
type Props = {};

const Projects = (props: Props) => {
  return (
    <TracingBeam className="px-6">
      <h1 className="text-5xl  font-black text-center tracking-tighter leading-12 mb-16 mt-24 underline underline-offset-4">
        All Projects
      </h1>
      <div className="max-w-2xl w-full antialiased pt-4 relative flex-col items-center flex ">
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
    </TracingBeam>
  );
};

export default Projects;

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
