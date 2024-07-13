import { auth } from "@/app/_lib/auth";
import { UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import { Roboto_Slab } from "next/font/google";

import Image from "next/image";
import React from "react";
const hostname = process.env.HOSTNAME;

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const page = async ({ params }) => {
  let session = await auth();
  let userId;
  if (session == null) {
    userId = "";
  } else {
    userId = session.user.userId;
  }
  // const userId = session.user.userId;
  const res = await fetch(
    `${hostname}/api/v1/blogs/slug/${params.slug}?userId=${userId}`
  );
  const data = await res.json();
  const blog = await data.data;
  //   console.log(blog);
  const contentWithLineBreaks = blog.content;

  const dateString = blog.createdAt;
  const dateObj = new Date(dateString);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based, so add 1
  const year = String(dateObj.getFullYear());

  return (
    <div className="px-40 py-2">
      <div className="">
        <p className="text-stone-500 text-lg font-bold">{blog.genre}</p>
        <div className="my-8 border-l-8 border-stone-600 pl-2 font-medium">
          <p className="text-7xl leading-tight text-stone-600">
            {blog.heading}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="size-7 rounded-full"
            src={blog?.author?.photo}
            alt={`${blog.author.name} profile image of Somana`}
          />
          <p>{blog.author.name}</p>
          <p>
            {blog.author.verified ? (
              <UserCircleCheck weight="fill" className="size-5" />
            ) : (
              ""
            )}
          </p>
          <p className="bg-stone-50 border py-0.5 px-2 rounded-md">
            {blog.readTime} min read
          </p>
          <p className="bg-stone-50 border py-0.5 px-2 rounded-md">
            {day}-{month}-{year}
          </p>
        </div>
        <div className="mt-4">
          <img src={blog.featuredImage} className="w-full rounded-lg" />
        </div>
        <div>
          <p className="my-4 border-l-4 border-stone-600 pl-2">
            {blog.description}
          </p>
        </div>
        <div
          className={`px-36 tracking-wide text-stone-700 antialiased text-xl mb-10 ${robotoSlab.className}`}
          dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}
        ></div>
      </div>
    </div>
  );
};

export default page;
