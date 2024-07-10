import React from "react";
import BaseButton from "../buttons/BaseButton";
import { Pen, Star } from "@phosphor-icons/react/dist/ssr";
import SearchBlogs from "./SearchBlogs";
const hostname = process.env.HOSTNAME;

const BlogsNavigation = () => {
  return (
    <div className="flex items-center gap-2">
      <SearchBlogs hostname={hostname} />
      <div className="ml-auto flex items-center gap-2">
        <BaseButton href="/blogs/write">
          <Pen />
          Write Blog
        </BaseButton>
        <BaseButton>
          <Star weight="fill" className="text-violet-500" />
          Use Minder AI
        </BaseButton>
      </div>
    </div>
  );
};

export default BlogsNavigation;
