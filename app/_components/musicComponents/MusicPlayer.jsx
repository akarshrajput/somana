"use client";
import React from "react";
import AudioPlayer from "../player/AudioPlayer";
import { useMusicPlayer } from "@/app/_context/MusicPlayerContext";

const MusicPlayer = () => {
  const { track } = useMusicPlayer();
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-100 dark:bg-stone-900 dark:border-stone-700 border-t border-stone-300 p-2 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <img
              src={track?.featuredImage}
              className="w-10 h-10 rounded-md object-cover"
              alt="Featured Image"
            />
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">
                {track.musicName}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 truncate">
                {track.credits}
              </p>
            </div>
          </div>
        </div>
        <AudioPlayer audioFile={track.audioLink} />
      </div>
    </div>
  );
};

export default MusicPlayer;
