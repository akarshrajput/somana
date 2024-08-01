import { TrendUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const TrendingSongs = async ({ hostname }) => {
  const res = await fetch(`${hostname}/api/v1/music?limit=8`, {
    cache: "no-store",
  });
  const data = await res.json();
  const tracks = data.data.tracks;

  return (
    <div>
      <div>
        <p className="p-2 font-medium flex items-center gap-2">
          <TrendUp weight="bold" /> Trending music
        </p>
      </div>
      <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 text-sm md:text-base grid-cols-4 gap-2">
        {tracks.map((track) => (
          <Music track={track} key={track._id} />
        ))}
      </div>
    </div>
  );
};

const Music = ({ track }) => {
  const name = track.musicName.substring(0, 20);
  return (
    <Link href={`/music/${track._id}`}>
      <div className="border dark:border-stone-700 bg-stone-100 dark:bg-stone-800 flex flex-col gap-1  rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="aspect-square rounded-lg  object-cover"
            src={track.featuredImage}
          />
        </div>
        <div className="px-2 py-1 pb-2">
          <p className="font-semibold text-nowrap">
            {name} {name.length < track.musicName.length ? "..." : ""}
          </p>

          {/* <div className="flex items-center gap-1"> */}
          <p className="font-semibold text-nowrap text-sm text-stone-400">
            {track.credits}
          </p>
          {/* <p className="font-medium text-nowrap text-sm">{track.musicType}</p> */}

          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};

export default TrendingSongs;
