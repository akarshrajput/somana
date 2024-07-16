import { GithubLogo, GoogleLogo, Lock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { signInAction, signInGithub } from "../_lib/actions";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mt-10 flex-col items-center border border-stone-600 p-10 text-stone-50 bg-stone-800 rounded-md">
        <h2 className="font-bold flex items-center gap-2 mb-4">
          <Lock weight="bold" className="text-emerald-600" /> Login to Somana
        </h2>

        <div className="flex flex-col items-center gap-4">
          <form action={signInAction}>
            <button className="flex items-center font-medium gap-2 bg-stone-700 py-2 px-20 rounded-md border border-stone-600">
              <GoogleLogo weight="bold" />
              Login using Google
            </button>
          </form>
          <form action={signInGithub}>
            <button className="flex items-center font-medium gap-2 bg-stone-700 py-2 px-20 rounded-md border border-stone-600">
              <GithubLogo weight="bold" />
              Login using GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
