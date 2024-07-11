import React from "react";
import MusicNavigation from "../_components/musicComponents/MusicNavigation";
import TrendingSongs from "../_components/musicComponents/TrendingSongs";
import FunkSongs from "../_components/musicComponents/FunkSongs";
const hostname = process.env.HOSTNAME;
const page = () => {
  return (
    <div>
      <div className="px-4 mt-2">
        <div className="mb-6">
          <MusicNavigation hostname={hostname} />
        </div>
        <TrendingSongs hostname={hostname} />
        <FunkSongs hostname={hostname} />
      </div>
    </div>
  );
};

export default page;
