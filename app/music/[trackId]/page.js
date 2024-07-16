import CommonRelatedSongs from "@/app/_components/musicComponents/CommonRelatedSongs";
import AudioPlayer from "@/app/_components/player/AudioPlayer";
import React from "react";

const hostname = process.env.HOSTNAME; // Ensure you are using NEXT_PUBLIC_ for environment variables

const Page = async ({ params }) => {
  const res = await fetch(`${hostname}/api/v1/music/${params.trackId}`);
  const data = await res.json();
  const track = data.data;

  if (!track) {
    return (
      <div className="text-center mt-20 text-red-500">Music not found</div>
    );
  }

  return (
    <>
      <div className="text-stone-200 px-4">
        <CommonRelatedSongs hostname={hostname} musicType={track.musicType} />
      </div>
      <div className="w-full absolute bottom-0 p-4 mt-10 ">
        <div className="flex flex-col md:flex-row items-center text-stone-200 overflow-hidden">
          <img
            className="aspect-square w-96 border border-stone-700 rounded-lg object-cover"
            src={track.featuredImage}
            alt={track.musicName}
          />
          <div className="w-full self-end px-6">
            <h2 className="text-2xl font-bold text-stone-200">
              {track.musicName}
            </h2>
            <p className="text-stone-200 mt-2">{track.musicType}</p>
            <p className="text-stone-200 mt-2">Album: {track.album}</p>
            <p className="text-stone-200 mt-2">Credits: {track.credits}</p>
            <p className="text-stone-200 mt-2">
              Released: {new Date(track.releaseDate).toLocaleDateString()}
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-stone-200">Author</h3>
              <div className="flex items-center mt-2 gap-2">
                <img
                  className="w-6 h-6 rounded-full"
                  src={track.author.photo}
                  alt={track.author.name}
                />
                <div>
                  <p className="text-stone-200">{track.author.name}</p>
                </div>
                {/* <div>
                  <p className="text-stone-200">{track.author.email}</p>
                </div> */}
              </div>
            </div>
            {/* <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">Lyrics</h3>
            <pre className="whitespace-pre-wrap text-gray-600 mt-2">
              {track.lyrics}
            </pre>
          </div> */}
            <div className="mt-4">
              {/* <audio controls className="w-full">
                <source
                  src={track.audioLink}
                  type="audio/mpeg"
                  className="text-stone-200 bg-inherit"
                />
                Your browser does not support the audio element.
              </audio> */}
              <AudioPlayer audioFile={track.audioLink} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
