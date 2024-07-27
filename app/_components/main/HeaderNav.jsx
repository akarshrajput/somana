import { auth } from "@/app/_lib/auth";
import { Lock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DarkModeButton from "../buttons/DarkModeButton";

const HeaderNav = async () => {
  const session = await auth();
  return (
    <div className="flex text-stone-50 items-center gap-2 ml-auto">
      <DarkModeButton />
      {session ? (
        ""
      ) : (
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/login" className="text-sm px-2 py-1.5 rounded-md">
            Login
          </Link>
          <Link href="" className="text-sm px-2 py-1.5 rounded-md">
            Sign up
          </Link>

          {/* <Link
            href=""
            className="bg-stone-100 text-sm text-stone-800 px-2 py-1.5 rounded-md"
          >
            Get Started
          </Link> */}
        </div>
      )}
      {session ? (
        <Link href="/me" className="flex items-center gap-2">
          {/* <Lock weight="bold" className="size-5" /> */}
          <img src={session?.user?.image} className="size-9 rounded-full" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderNav;
