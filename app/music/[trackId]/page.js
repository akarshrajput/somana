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
      <div className="dark:text-stone-200 px-4">
        <CommonRelatedSongs hostname={hostname} musicType={track.musicType} />
      </div>
      <div className="w-full absolute bottom-0 p-4 mt-10 ">
        {/* <div className="dark:text-stone-200 overflow-hidden"> */}
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 w-fit items-center justify-center">
            <div className="flex w-fit bg-stone-100 justify-center border p-2 rounded-lg h-72 overflow-hidden">
              <img
                src={track?.featuredImage}
                className="aspect-square w-72 rounded-md object-cover"
                alt="Featured Image"
              />
            </div>
            <div className="w-full px-6">
              <h2 className="text-2xl font-bold dark:text-stone-200">
                {track.musicName}
              </h2>
              <p className=" mt-2">{track.musicType}</p>
              <p className="mt-2">Album: {track.album}</p>
              <p className=" mt-2">Credits: {track.credits}</p>
              <p className="mt-2">
                Released: {new Date(track.releaseDate).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <h3 className="font-bold ">Author</h3>
                <div className="flex items-center mt-2 gap-2">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={track.author.photo}
                    alt={track.author.name}
                  />
                  <div>
                    <p className="">{track.author.name}</p>
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
            </div>
          </div>
          <div className="flex items-center w-full">
            {track.lyrics ? (
              <div className="flex flex-col gap-1 w-full">
                <p className="px-2 font-medium">Lyrics</p>
                <textarea
                  rows={10}
                  className="border dark:border-stone-700 dark:bg-stone-800 rounded-md p-2 flex w-full resize-none"
                  value={track.lyrics}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mt-4">
          <AudioPlayer audioFile={track.audioLink} />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Page;
