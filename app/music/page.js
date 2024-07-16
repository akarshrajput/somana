import React from "react";
import MusicNavigation from "../_components/musicComponents/MusicNavigation";
import TrendingSongs from "../_components/musicComponents/TrendingSongs";
import FunkSongs from "../_components/musicComponents/FunkSongs";
const hostname = process.env.HOSTNAME;
const page = () => {
  return (
    <div>
      <div className="px-4 mt-2 text-stone-200">
        <div className="mb-6">
          <MusicNavigation hostname={hostname} />
        </div>
        <div className="flex flex-col gap-4">
          <TrendingSongs hostname={hostname} />
          <FunkSongs hostname={hostname} />
        </div>
      </div>
    </div>
  );
};

export default page;
