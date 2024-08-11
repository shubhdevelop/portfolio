"use client";

import React from "react";
import { BlogCard } from "./Blog/Blog";
import Link from "next/link";
type Props = {};

const FeaturedBlog = (props: Props) => {
  return (
    <div className="w-full ">
      <h1 className="text-5xl font-black text-center tracking-tighter leading-12 mb-24 underline underline-offset-4">
        Featured Blogs
      </h1>

      <div className="flex flex-wrap  w-[90%] mx-auto h-fit gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Link className="mx-auto    " href="/projects">
        <h1 className="text-xl font-black text-center tracking-tighter leading-12 mt-8 underline underline-offset-2 ">
          See more....
        </h1>
      </Link>
    </div>
  );
};

export default FeaturedBlog;
