import {
  BookOpen,
  SealCheck,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DisabledInfoButton from "../buttons/DisabledInfoButton";
const hostname = process.env.HOSTNAME;

const CommonSpecialFourBlogs = async ({ genre }) => {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=4&genre=${genre}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;

  return (
    <div className="container mx-auto">
      <div className="mb-2">
        <DisabledInfoButton>
          <BookOpen weight="fill" className="" /> Latest on {genre}
        </DisabledInfoButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {blogs.map((blog, index) => (
          <BlogComponent index={index + 1} blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

const BlogComponent = ({ blog }) => {
  const heading = blog.heading.substring(0, 100);
  const description = blog.description.substring(0, 100);

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="flex flex-col gap-2">
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
          </div>
        </div>
        <div className="font-semibold text-gray-800 text-md">{heading}</div>
        <div className="text-gray-600 text-sm">{description}...</div>
      </div>
    </Link>
  );
};

export default CommonSpecialFourBlogs;
