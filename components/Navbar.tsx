import Link from "next/link";
import Image from "next/image";
import React from "react";

import github from "@/app/assets/GitHub.svg";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <div className="px-5 mb-16 w-full h-12 flex flex-row items-center justify-between">
        <Link href="/">
          <h3 className="font-black">{"<Shubham/>"}</h3>
        </Link>

        <div className="gap-2 flex justify-center items-center">
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Image src={github} width={20} height={20} alt="githubIcon" />
      </div>
    </nav>
  );
}

export default Navbar;
