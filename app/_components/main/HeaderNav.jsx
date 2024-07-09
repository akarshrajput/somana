import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import React from "react";

const HeaderNav = async () => {
  const session = await auth();
  return (
    <div className="flex items-center gap-2 ml-auto">
      {session ? (
        ""
      ) : (
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/login" className="text-sm px-2 py-1.5 rounded-md">
            Login
          </Link>
          <Link href="" className="border text-sm px-2 py-1.5 rounded-md">
            Sign up
          </Link>

          <Link
            href=""
            className="bg-stone-800 text-sm text-stone-50 px-2 py-1.5 rounded-md"
          >
            Get Started
          </Link>
        </div>
      )}
      {session ? (
        <Link href="/me">
          <img
            src={session?.user?.image}
            className="size-8 rounded-full border border-stone-800"
          />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderNav;
