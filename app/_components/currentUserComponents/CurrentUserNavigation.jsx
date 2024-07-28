import { signOutAction } from "@/app/_lib/actions";
import React from "react";
import SpecialButton from "../buttons/SpecialButton";
import { Star } from "@phosphor-icons/react/dist/ssr";

const CurrentUserNavigation = () => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center">
      <div className="flex items-center gap-2">
        <form action={signOutAction}>
          <button className="flex w-fit items-center gap-1 py-1 px-2 rounded-md dark:text-stone-50 ease-in duration-300 bg-stone-200  dark:bg-stone-700">
            Sign Out
          </button>
        </form>
        <SpecialButton className="dark:text-stone-50 ease-in duration-300 bg-stone-200  dark:bg-stone-700">
          <Star weight="fill" />
          Use Minder AI
        </SpecialButton>
      </div>
      <div className="flex flex-col items-center">
        {/* <SearchBlogs hostname={hostname} /> */}
      </div>
      <div></div>
    </div>
  );
};

export default CurrentUserNavigation;
