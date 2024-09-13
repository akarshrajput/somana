"use client";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import LoginButton from "../buttons/LoginButton";
import Link from "next/link";

const BlogInfoPopUp = ({ session, blog }) => {
  const [showPop, setShowPop] = useState(true);
  return (
    <>
      {showPop && (
        <div className="flex  items-center bg-stone-50 py-2 px-0.5 mb-2 text-sm ">
          {session?.user ? (
            <div className="flex flex-col gap-1">
              <div>
                <mark className="bg-transparent font-md text-green-800">
                  {session.user.name}{" "}
                </mark>
                currently watching paper on{" "}
                <mark className="bg-transparent text-green-800 font-md">
                  {blog.genre}.
                </mark>{" "}
              </div>
              <p>
                Watch more on{" "}
                <Link
                  href={`/blogs/topic/${blog.genre}`}
                  className="underline underline-offset-2 text-green-800"
                >
                  {blog.genre}
                </Link>
              </p>
            </div>
          ) : (
            <div>
              <LoginButton /> Login to watch full paper
            </div>
          )}
          <X
            onClick={() => setShowPop(false)}
            weight="bold"
            className="ml-auto cursor-pointer"
          />
        </div>
      )}
    </>
  );
};
export default BlogInfoPopUp;
