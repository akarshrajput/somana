import React from "react";
import BaseButton from "../buttons/BaseButton";
import { Star, Upload } from "@phosphor-icons/react/dist/ssr";
import SpecialButton from "../buttons/SpecialButton";
import SearchBlogs from "../blogsComponent/SearchBlogs";

const MusicNavigation = ({ hostname }) => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center">
      <div className="flex items-center gap-2">
        <SpecialButton
          className="bg-stone-800 text-stone-50"
          href="/music/upload"
        >
          <Upload />
          Upload music
        </SpecialButton>
        <SpecialButton className="bg-violet-700 text-stone-50">
          <Star weight="fill" />
          Use Minder AI
        </SpecialButton>
      </div>
      <div className="flex flex-col items-center">
        <SearchBlogs hostname={hostname} />
      </div>
      <div></div>
    </div>
  );
};

export default MusicNavigation;
