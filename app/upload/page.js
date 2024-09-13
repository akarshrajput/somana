import Link from "next/link";
import React from "react";
import CommonLinkButton from "../_components/buttons/CommonLinkButton";
import {
  ArrowRight,
  Pen,
  Pencil,
  Plus,
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
    <div className="flex justify-center">
      <div className="w-5/6 border border-stone-200 rounded-md p-4 my-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p>1) Share your ideas, stories, blogs and research to the world!</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore somana Editor</span>
            <ArrowRight weight="bold" />
          </div>

          <Link
            href="/blogs/write"
            className="flex items-center gap-2 w-fit text-stone-50 bg-green-600 rounded-md p-1 px-3"
          >
            <Pen weight="bold" />
            Write Blog
          </Link>
        </div>
        <p className="border-t border-stone-200"></p>
        <div className="flex flex-col gap-1">
          <p>2) Share your music to the world to make someone day special!</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore somana Player</span>
            <ArrowRight weight="bold" />
          </div>
          <Link
            href="/music/upload"
            className="flex items-center gap-2 w-fit text-stone-50 bg-green-600 rounded-md p-1 px-3"
          >
            <Upload weight="bold" />
            Upload Music
          </Link>
          <Link
            href="/music/upload"
            className="flex items-center gap-2 w-fit text-stone-50 bg-green-600 rounded-md p-1 px-3"
          >
            <Plus weight="bold" /> Create Music Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
