import { GithubLogo, GoogleLogo, Lock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { signInAction } from "../_lib/actions";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mt-10 flex-col items-center border p-10 bg-stone-50 rounded-md">
        <h2 className="font-bold flex items-center gap-2">
          <Lock weight="bold" className="text-emerald-600" /> Login to Somana
        </h2>

        <div className="flex flex-col items-center gap-2">
          <form action={signInAction}>
            <button className="flex items-center gap-2 bg-stone-100 py-2 px-20 rounded-md border">
              <GoogleLogo weight="bold" />
              Login using Google
            </button>
          </form>
          <button className="flex items-center gap-2 bg-stone-100 py-2 px-20 rounded-md border">
            <GithubLogo weight="bold" />
            Login using GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
