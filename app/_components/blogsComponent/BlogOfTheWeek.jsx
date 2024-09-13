import {
  Building,
  Crown,
  SealCheck,
  TextColumns,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DisabledInfoButton from "../buttons/DisabledInfoButton";

const BlogOfTheWeek = async () => {
  const hostname = process.env.HOSTNAME;
  const res = await fetch(`${hostname}/api/v1/blogs?sort=-views&limit=1`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog = data.data.blogs[0];
  return (
    <div>
      <div className="mb-2">
        <DisabledInfoButton>
          <Crown className="text-yellow-600" weight="fill" />
          <p className="font-medium">Blog of the week</p>
        </DisabledInfoButton>
      </div>
      <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-1">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="relative flex items-center">
                <img
                  className="h-6 w-6 z-10 rounded-full border-2 border-white shadow-sm"
                  src={blog.author.photo}
                  alt={blog.author.name}
                />
                {blog.author.accountType === "Organization" && (
                  <img
                    className="h-6 w-6 z-12 -ml-2 rounded-full border-2 border-white shadow-sm"
                    src={blog.featuredImage}
                    alt="Organization"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Link
                href={`user/${blog.author.email}`}
                className="text-[13px] hover:underline underline-offset-2 decoration-1"
              >
                {blog.author.name}
              </Link>
              {blog.author.verified && (
                <SealCheck className="text-black" weight="fill" />
              )}
              <p className="text-[12px] text-stone-600">on</p>
              <Link
                href={`/blogs/topic/${blog.genre}`}
                className="text-[13px] hover:underline underline-offset-2 decoration-1"
              >
                {blog.genre}
              </Link>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <DisabledInfoButton className="text-stone-950 text-[13px]">
                {blog.numberOfViews} views
              </DisabledInfoButton>
              <DisabledInfoButton className="text-stone-950 text-[13px]">
                {blog.readTime} min
              </DisabledInfoButton>
              <DisabledInfoButton className="text-stone-950 text-[13px]">
                June 26
              </DisabledInfoButton>
            </div>
          </div>
        </div>

        <p className="font-medium text-md">{blog.heading}</p>
        <div className="relative rounded-sm overflow-hidden flex justify-center w-full h-64">
          <img
            src={blog.featuredImage}
            className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-300"
            alt="Featured Image"
          />
          <div className="absolute text-sm top-0 left-0 bg-black bg-opacity-50 text-white p-2">
            <p>{blog.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogOfTheWeek;
