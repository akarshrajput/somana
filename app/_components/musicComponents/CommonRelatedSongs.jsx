import { MusicNote } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const CommonRelatedSongs = async ({ hostname, musicType }) => {
  const res = await fetch(
    `${hostname}/api/v1/music?limit=8&musicType=${musicType}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const tracks = data.data.tracks;

  return (
    <div>
      <div>
        <p className="text-sm p-2  font-medium flex items-center gap-2">
          <MusicNote weight="bold" className="size-4" /> Related Songs
        </p>
      </div>
      <div className="grid  grid-cols-8 gap-2">
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
      <div className="border border-stone-700 bg-stone-800 flex flex-col gap-1 p-2 rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="aspect-square rounded-md object-cover"
            src={track.featuredImage}
          />
        </div>
        <div className="px-1">
          <p className="font-bold">
            {name} {name.length < track.musicName.length ? "..." : ""}
          </p>

          <div className="flex items-center gap-1">
            <p className="font-medium text-sm">{track.musicType} | </p>
            <p className="font-bold text-sm text-stone-500">{track.credits}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CommonRelatedSongs;
