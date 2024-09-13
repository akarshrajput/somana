import { signOutAction } from "@/app/_lib/actions";
import React from "react";
import SpecialButton from "../buttons/SpecialButton";
import { SignOut, Star } from "@phosphor-icons/react/dist/ssr";

const CurrentUserSettings = () => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center">
      <div className="flex items-center gap-2">
        <form action={signOutAction}>
          <button className="flex text-sm w-fit items-center gap-1 py-2 px-4 rounded-md text-stone-50 ease-in duration-300 bg-red-600  dark:bg-stone-700">
            <SignOut />
            Log Out
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center"></div>
      <div></div>
    </div>
  );
};

export default CurrentUserSettings;
