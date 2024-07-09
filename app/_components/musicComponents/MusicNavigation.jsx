import React from "react";
import BaseButton from "../buttons/BaseButton";
import { Star, Upload } from "@phosphor-icons/react/dist/ssr";

const MusicNavigation = () => {
  return (
    <div className="flex items-center gap-2">
      <BaseButton href="/music/upload">
        <Upload />
        Upload music
      </BaseButton>
      <BaseButton>
        <Star weight="fill" className="text-violet-500" />
        Use Minder AI
      </BaseButton>
    </div>
  );
};

export default MusicNavigation;
