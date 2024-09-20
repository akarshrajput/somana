import React from "react";
import {
  ApplePodcastsLogo,
  Butterfly,
  Headphones,
  LinuxLogo,
  Monitor,
  Popcorn,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={`flex justify-center mt-2 gap-3 md:flex-nowrap flex-wrap`}>
      <Link
        className="flex items-center gap-1 text-pink-500 bg-pink-100 text-sm hover:bg-pink-200 px-3 py-1.5 rounded-md"
        href="/ai"
      >
        AI
        <Sparkle weight="fill" />
      </Link>
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

      <Link
        className="flex items-center gap-1 text-violet-500 bg-violet-100 text-sm hover:bg-violet-200 px-3 py-1.5 rounded-md"
        href="/anonshare"
      >
        Anon share
      </Link>
      {/* <Link>
        Anime
        <LinuxLogo />
      </Link> */}
    </div>
  );
};

export default Navigation;
