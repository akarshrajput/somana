import {
  AppleLogo,
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  Lock,
  WarningOctagon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { signInAction, signInFacebook, signInGithub } from "../_lib/actions";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mt-10 sm:w-96 w-72 flex-col items-center border border-stone-300 dark:border-stone-600 p-10 dark:text-stone-50 dark:bg-stone-800 bg-stone-100 rounded-md">
        <h2 className="font-bold flex items-center gap-2 mb-4">
          <Lock weight="bold" className="text-emerald-600" /> Login to Somana
        </h2>

        <div className="flex w-full flex-col items-center gap-4">
          <form className="w-full" action={signInAction}>
            <button
              disabled={true}
              className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-stone-200 py-2 rounded-md border border-stone-300 dark:border-stone-600"
            >
              <div className="flex items-center gap-2">
                <GoogleLogo weight="bold" />
                Login using Google
              </div>
            </button>
          </form>
          <form className="w-full" action={signInGithub}>
            {/* <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 my-1 text-sm  text-yellow-700">
                <WarningOctagon />
                <p>Please use GitHub for Login</p>
              </div>
            </div> */}

            <button className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-stone-200 py-2 rounded-md border border-stone-300 dark:border-stone-600">
              <div className="flex items-center gap-2">
                <GithubLogo weight="bold" />
                Login using GitHub
              </div>
            </button>
          </form>
          <form className="w-full" action={signInAction}>
            <button
              disabled={true}
              className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-stone-200 py-2 rounded-md border border-stone-300 dark:border-stone-600"
            >
              <div className="flex items-center gap-2">
                <AppleLogo weight="bold" />
                Login using Apple
              </div>
            </button>
          </form>
          <form className="w-full" action={signInFacebook}>
            <button className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-stone-200 py-2 rounded-md border border-stone-300 dark:border-stone-600">
              <div className="flex items-center gap-2">
                <FacebookLogo weight="bold" />
                Login using FaceBook
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
