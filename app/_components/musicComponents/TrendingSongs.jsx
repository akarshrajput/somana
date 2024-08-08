import { useMusicPlayer } from "@/app/_context/MusicPlayerContext";
import { TrendUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import MusicInfo from "./MusicInfo";

const TrendingSongs = async ({ hostname }) => {
  const res = await fetch(`${hostname}/api/v1/music?limit=12`, {
    cache: "no-store",
  });
  const data = await res.json();
  const tracks = data.data.tracks;

  return (
    <div>
      <div>
        <p className="my-1  font-medium flex items-center gap-2">
          <TrendUp weight="bold" /> Trending music
        </p>
      </div>
      <div className="grid xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 text-sm md:text-base grid-cols-4 gap-2">
        {tracks.map((track) => (
          <MusicInfo track={track} key={track._id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;
