import Image from "next/image";
import React from "react";

import github from "@/app/assets/GitHub.svg";
import Link from "next/dist/client/link";

function Navbar() {
  return (
    <nav className="px-5 mb-16 w-full h-12 flex flex-row items-center justify-between sticky top-0 left-0 z-10 bg-white ">
      <Link className="font-black" href={"/"}>
        {"<Shubham/>"}
      </Link>

      <div className="gap-4 w-full flex justify-center items-center ">
        <Link className="cursor-pointer" href="/projects">
          Projects
        </Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Image src={github} width={20} height={20} alt="githubIcon" />
    </nav>
  );
}

export default Navbar;
