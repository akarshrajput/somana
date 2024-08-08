import { MusicNote } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import MusicInfo from "./MusicInfo";

const CommonSongs = async ({ hostname, musicType, description = "Songs" }) => {
  const res = await fetch(
    `${hostname}/api/v1/music?limit=10&musicType=${musicType}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const tracks = data.data.tracks;

  return (
    <div className="py-6">
      <div>
        <p className="mb-1  font-medium flex items-center gap-2">
          <MusicNote weight="bold" /> {description}
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

const Music = ({ track }) => {
  const name = track.musicName.substring(0, 20);
  return (
    <Link href={`/music/${track._id}`}>
      <div className="border bg-stone-100 dark:border-stone-700 p-0 md:p-1 dark:bg-stone-800 flex flex-col gap-1 rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="aspect-square rounded-lg object-cover"
            src={track.featuredImage}
          />
        </div>
        <div className="px-1 pb-2">
          <p className="font-medium text-sm md:text-base text-nowrap">
            {name} {name.length < track.musicName.length ? "..." : ""}
          </p>

          {/* <div className="flex items-center gap-1"> */}
          <p className="text-nowrap font-medium text-sm text-stone-500">
            {track.credits}
          </p>
          {/* <p className="text-nowrap font-medium text-sm">{track.musicType}</p> */}

          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};

export default CommonSongs;
