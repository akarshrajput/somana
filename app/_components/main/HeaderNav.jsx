import { auth } from "@/app/_lib/auth";
import { Lock, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DarkModeButton from "../buttons/DarkModeButton";
import LoginButton from "../buttons/LoginButton";

const HeaderNav = async () => {
  const session = await auth();
  return (
    <div className="flex dark:text-stone-50 items-center gap-2 ml-auto">
      {/* <DarkModeButton /> */}
      {session ? (
        ""
      ) : (
        <div className="flex items-center gap-2 ml-auto">
          <LoginButton />
        </div>
      )}
      {session ? (
        <Link href="/me" className="flex items-center gap-2">
          <img src={session?.user?.image} className="size-9 rounded-full" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderNav;
