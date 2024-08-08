"use client";

import React from "react";
import { useMusicPlayer } from "@/app/_context/MusicPlayerContext"; // Import correctly

const MusicInfo = ({ track }) => {
  const { setTrack } = useMusicPlayer(); // Call the hook to get the context values
  const name = track.musicName.substring(0, 20);

  function handlePlay() {
    setTrack(track); // Send the entire track object to the context
  }

  return (
    <div onClick={handlePlay} className="cursor-pointer">
      <div className="  p-0 sm:p-1   flex flex-col gap-1 rounded-sm overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="aspect-square rounded-md object-cover"
            src={track.featuredImage}
            alt={track.musicName}
          />
        </div>
        <div className="py-1 overflow-hidden flex flex-col gap-1">
          <p className="font-medium  leading-none text-[13px] text-nowrap">
            {track.musicName}
          </p>
          <p className="text-nowrap  leading-none text-[12px]">
            {track.credits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicInfo;
