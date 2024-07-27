import React from "react";
import BaseButton from "../buttons/BaseButton";
import {
  ApplePodcastsLogo,
  Butterfly,
  Headphones,
  LinuxLogo,
  Monitor,
  Popcorn,
} from "@phosphor-icons/react/dist/ssr";

const Navigation = () => {
  return (
    <div className="flex items-center gap-4">
      <BaseButton
        className="dark:text-stone-50 ease-in duration-300 hover:scale-125 bg-stone-200  dark:bg-stone-700"
        href="/blogs"
      >
        Blogs
        <Butterfly />
      </BaseButton>
      <BaseButton
        className="dark:text-stone-50 ease-in duration-300 hover:scale-125 bg-stone-200  dark:bg-stone-700"
        href="/music"
      >
        Music
        <Headphones className="size-4" />
      </BaseButton>
      <BaseButton
        className="dark:text-stone-50 ease-in duration-300 hover:scale-125 bg-stone-200  dark:bg-stone-700"
        href="/movies"
      >
        Movies
        <Popcorn />
      </BaseButton>
      <BaseButton
        className="dark:text-stone-50 ease-in duration-300 hover:scale-125 bg-stone-200  dark:bg-stone-700"
        href="/podcasts"
      >
        Podcasts
        <ApplePodcastsLogo />
      </BaseButton>
      <BaseButton
        className="dark:text-stone-50 ease-in duration-300 hover:scale-125 bg-stone-200  dark:bg-stone-700"
        href="/news"
      >
        News
        <Monitor />
      </BaseButton>
      {/* <BaseButton>
        Anime
        <LinuxLogo />
      </BaseButton> */}
    </div>
  );
};

export default Navigation;
