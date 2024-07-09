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
      <BaseButton href="/blogs">
        Blogs
        <Butterfly />
      </BaseButton>
      <BaseButton href="/music">
        Music
        <Headphones className="size-4" />
      </BaseButton>
      <BaseButton href="/movies">
        Movies
        <Popcorn />
      </BaseButton>
      <BaseButton href="/podcasts">
        Podcasts
        <ApplePodcastsLogo />
      </BaseButton>
      <BaseButton href="/news">
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
