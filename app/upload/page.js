import Link from "next/link";
import React from "react";
import CommonLinkButton from "../_components/buttons/CommonLinkButton";
import {
  ArrowRight,
  Info,
  Pen,
  Pencil,
  Plus,
  Sparkle,
  Upload,
} from "@phosphor-icons/react/dist/ssr";
import { auth } from "../_lib/auth";
import UserLoginError from "../_components/main/UserLoginError";
import LoginButton from "../_components/buttons/LoginButton";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    return (
      <UserLoginError>
        <p>You have to logged in to upload your data.</p>
        <LoginButton />
      </UserLoginError>
    );
  }
  return (
    <div className="flex justify-center mt-10">
      <div className="w-5/6 rounded-md p-4 my-2 flex flex-col">
        <div className="flex  p-4 flex-col gap-1">
          <p className=" font-medium text-lg">
            1) Share your ideas, stories, blogs and research to the world!
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore somana Editor</span>
            <ArrowRight weight="bold" />
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/blogs/write"
              className="flex items-center gap-2 w-fit text-sm text-stone-50 bg-green-600 rounded-full p-1 px-3"
            >
              <Pen weight="bold" />
              Write Blog
            </Link>
            <p className="text-sm text-pink-800 bg-pink-100 rounded-full py-1 px-4 flex items-center gap-1">
              <Info weight="bold" />
              Somana AI <Sparkle weight="fill" /> available here!
            </p>
          </div>
        </div>
        <p className="border-t border-stone-200"></p>
        <div className="flex flex-col  p-4 gap-1">
          <p className=" font-medium text-lg">
            2) Share your music to the world to make someone day special!
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore somana Player</span>
            <ArrowRight weight="bold" />
          </div>
          <Link
            href="/music/upload"
            className="flex items-center gap-2 w-fit text-stone-50 text-sm bg-green-600 rounded-full p-1 px-3"
          >
            <Upload weight="bold" />
            Upload Music
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore playlist maker</span>
            <ArrowRight weight="bold" />
          </div>
          <Link
            href="/music/upload"
            className="flex items-center gap-2 w-fit text-stone-50 text-sm bg-green-600 rounded-full p-1 px-3"
          >
            <Plus weight="bold" /> Create Music Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
