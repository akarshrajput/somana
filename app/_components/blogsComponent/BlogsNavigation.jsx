import React from "react";
import BaseButton from "../buttons/BaseButton";
import { Pen, Sparkle, Star } from "@phosphor-icons/react/dist/ssr";
import SearchBlogs from "./SearchBlogs";
import SpecialButton from "../buttons/SpecialButton";
const hostname = process.env.HOSTNAME;

const BlogsNavigation = () => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center">
      <div>
        <div className="ml-auto flex items-center gap-2">
          <SpecialButton
            className="dark:text-stone-50 ease-in duration-300 bg-stone-200  dark:bg-stone-700"
            href="/blogs/write"
          >
            <Pen weight="bold" />
            Write Blog
          </SpecialButton>
          {/* <SpecialButton className="bg-lime-600 text-stone-100" href="">
            <Sparkle weight="bold" />
            Somana AI
          </SpecialButton> */}
          {/* <SpecialButton className="bg-indigo-600 text-stone-50">
            <Star weight="fill" />
            Use Minder AI
          </SpecialButton> */}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <SearchBlogs hostname={hostname} />
      </div>
      <div></div>
    </div>
  );
};

export default BlogsNavigation;
