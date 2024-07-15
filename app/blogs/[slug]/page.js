import Footer from "@/app/_components/main/Footer";
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
    <>
      <div className="flex justify-center py-6">
        <div className="w-4/6">
          <p className="text-stone-50 text-xl font-bold">{blog.genre}</p>
          <div className="my-8 border-l-8 border-stone-50 pl-6 font-medium">
            <p className={`text-7xl leading-tight text-stone-50`}>
              {blog.heading}
            </p>
          </div>
          <div className="flex text-stone-50 items-center gap-2">
            <img
              className="size-7 rounded-full"
              src={blog?.author?.photo}
              alt={`${blog.author.name} profile image of Somana`}
            />
            <p className="font-medium">{blog.author.name}</p>
            <p>
              {blog.author.verified ? (
                <UserCircleCheck weight="fill" className="size-5" />
              ) : (
                ""
              )}
            </p>
            <div className="ml-auto flex items-center gap-1">
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.numberOfViews} views
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.readTime} min read
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {day}-{month}-{year}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <img src={blog.featuredImage} className="w-full rounded-md" />
          </div>
          <div>
            <p className="my-4 border-l-4 border-stone-50 text-stone-50 pl-2">
              {blog.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className={`content-custom-class w-4/6 leading-relaxed mt-10 tracking-wide text-stone-50 antialiased text-xl mb-10 `}
              dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default page;
