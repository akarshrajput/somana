"use client";
import React from "react";
import AudioPlayer from "../player/AudioPlayer";
import { useMusicPlayer } from "@/app/_context/MusicPlayerContext";

const MusicPlayer = () => {
  const { track } = useMusicPlayer();
  return (
    <div className="bg-stone-100 dark:bg-stone-800 dark:border-stone-600 border-t border-stone-300 p-1 flex justify-center">
      <div className="w-4/6">
        <div className="flex items-center gap-2">
          <AudioPlayer audioFile={track.audioLink} />
          <div className="flex items-center gap-2">
            <div className="flex  w-fit bg-stone-100 dark:bg-stone-800 justify-center  rounded-sm h-10 overflow-hidden">
              <img
                src={track?.featuredImage}
                className="aspect-square w-10 rounded-sm object-cover"
                alt="Featured Image"
              />
            </div>
            <div className="text-[12px] w-96 flex flex-col overflow-hidden">
              <p className="text-nowrap">{track.musicName}</p>
              <p className="text-nowrap">{track.credits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
