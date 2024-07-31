"use client";

import React from "react";
import { BlogCard } from "./Blog/Blog";
type Props = {};

const FeaturedBlog = (props: Props) => {
  return (
    <div className="w-full mb-48 ">
      <h1 className="text-5xl font-black text-center tracking-tighter leading-12 mb-24">
        Featured Blogs
      </h1>

      <div className="flex flex-wrap  w-full h-fit gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default FeaturedBlog;
