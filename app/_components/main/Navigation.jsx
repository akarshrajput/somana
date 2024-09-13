import React from "react";
import {
  ApplePodcastsLogo,
  Butterfly,
  Headphones,
  LinuxLogo,
  Monitor,
  Popcorn,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={`flex justify-center mt-2 gap-3 md:flex-nowrap flex-wrap`}>
      <Link
        className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md"
        href="/blogs"
      >
        Blogs
      </Link>
      {/* <p className="sm:border-l-2 border-stone-950"></p> */}
      <Link
        className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md"
        href="/music"
      >
        Music
        {/* <Headphones className="size-4 " /> */}
      </Link>
      {/* <p className="sm:border-l-2 border-stone-950"></p> */}
      <Link
        className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md"
        href="/movies"
      >
        Movies
        {/* <Popcorn /> */}
      </Link>
      {/* <p className="sm:border-l-2 border-stone-950"></p> */}
      <Link
        className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md"
        href="/podcasts"
      >
        Podcasts
        {/* <ApplePodcastsLogo /> */}
      </Link>
      {/* <p className="sm:border-l-2 border-stone-950"></p> */}
      <Link
        className="bg-gray-100 text-sm hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md"
        href="/news"
      >
        News
        {/* <Monitor /> */}
      </Link>
      {/* <Link>
        Anime
        <LinuxLogo />
      </Link> */}
    </div>
  );
};

export default Navigation;
