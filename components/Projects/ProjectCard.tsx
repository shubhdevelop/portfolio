"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

type Props = {
  projectName: string;
  githubLink: string;
  toolsUsed: string[];
  imgSrc: string | StaticImageData;
  variant?: "blue" | "yellow";
};

function ProjectCard({
  toolsUsed,
  imgSrc,
  projectName,
  variant,
}: Props): JSX.Element {
  return (
    <>
      <div className={`w-[45%] border  bg-${variant}-500 bg-y p-3 `}>
        <CardContainer className="inter-var ">
          <CardBody
            className={` relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  `}
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {projectName}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {`This project utilizes the following tools: ${toolsUsed.join(
                ", "
              )}`}
            </CardItem>

            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4 border"
            >
              <Image
                src={imgSrc}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live Preview →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {toolsUsed.join(", ")}
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}

export default ProjectCard;
