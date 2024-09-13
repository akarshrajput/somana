import {
  CheckCircle,
  SealCheck,
  TrendUp,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DisabledInfoButton from "../buttons/DisabledInfoButton";
const hostname = process.env.HOSTNAME;

const CommonBlogs = async ({ children, genre }) => {
  const res = await fetch(`${hostname}/api/v1/blogs?genre=${genre}&limit=4`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;

  return (
    <div className="container mx-auto">
      <div className="mb-2">
        <DisabledInfoButton>
          {children} {genre}
        </DisabledInfoButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogComponent blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

const BlogComponent = ({ blog }) => {
  const heading = blog.heading.substring(0, 30);

  return (
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-2">
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
      {/* <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full border border-stone-200"
            src={blog.author.photo}
            alt={blog.author.name}
          />
          {blog.author.accountType === "Organization" && (
            <img
              className="w-8 h-8 -ml-2 rounded-full border border-stone-200"
              src={blog.featuredImage}
              alt={blog.heading}
            />
          )}
        </div>
        <p className="font-medium text-gray-800">{blog.author.name}</p>
        {blog.author.verified && (
          <UserCircleCheck className="text-gray-600" weight="fill" />
        )}
        <div className="ml-auto">
          <DisabledInfoButton>{blog.genre}</DisabledInfoButton>
        </div>
      </div> */}

      <div className="font-medium text-sm">
        {heading} {heading.length < blog.heading.length ? "..." : ""}
      </div>
      <div className="flex justify-center w-full overflow-hidden h-40 md:h-40 rounded-sm">
        <img
          src={blog?.featuredImage}
          className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-300"
          alt="Featured Image"
        />
      </div>
    </Link>
  );
};

export default CommonBlogs;
