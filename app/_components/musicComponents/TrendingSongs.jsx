import Link from "next/link";
import React from "react";

const TrendingSongs = async ({ hostname }) => {
  const res = await fetch(`${hostname}/api/v1/music?limit=8`, {
    cache: "no-store",
  });
  const data = await res.json();
  const tracks = data.data.tracks;

  return (
    <div className="grid grid-cols-8 gap-2">
      {tracks.map((track) => (
        <Music track={track} />
      ))}
    </div>
  );
};

const Music = ({ track }) => {
  return (
    <Link href={`/music/${track._id}`}>
      <div className="border flex flex-col gap-1 p-2 rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="aspect-square rounded-md object-cover"
            src={track.featuredImage}
          />
        </div>
        <div className="px-1">
          <p className="font-bold text-lg">{track.musicName}</p>
          <div className="flex items-center gap-1">
            <p className="font-medium text-sm">Song .</p>
            <p className="font-bold text-sm text-stone-500">{track.credits}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingSongs;
