import React from "react";

import { Pen, Star, Upload } from "@phosphor-icons/react/dist/ssr";
import SpecialButton from "../buttons/SpecialButton";
// import SpecialButton from "../buttons/SpecialButton";

const HomePageNavigation = ({ hostname }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <SpecialButton
          className="bg-stone-100 border border-stone-300"
          href="/music/upload"
        >
          <Pen />
          Write Blog
        </SpecialButton>
        <SpecialButton
          className="bg-stone-100 border border-stone-300"
          href="/music/upload"
        >
          <Upload />
          Upload music
        </SpecialButton>
        <SpecialButton
          className="bg-stone-100 border border-stone-300"
          href="/music/upload"
        >
          <Upload />
          Get Movie
        </SpecialButton>
        <SpecialButton
          className="bg-stone-100 border border-stone-300"
          href="/music/upload"
        >
          <Upload />
          Add your Podcast
        </SpecialButton>
        <SpecialButton
          className="bg-stone-100 border border-stone-300"
          href="/music/upload"
        >
          <Upload />
          Upload news
        </SpecialButton>
        <SpecialButton className="bg-violet-700 text-stone-50">
          <Star weight="fill" />
          Use Minder AI
        </SpecialButton>
      </div>
    </div>
  );
};

export default HomePageNavigation;
