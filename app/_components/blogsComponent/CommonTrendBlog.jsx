import { Building, UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import DisabledInfoButton from "../buttons/DisabledInfoButton";

const CommonTrendBlog = async ({ children, genre }) => {
  const hostname = process.env.HOSTNAME;

  const res = await fetch(
    `${hostname}/api/v1/blogs?sort=-views&limit=1&genre=${genre}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const blog = data.data.blogs[0];

  return (
    <>
      <div className="flex w-fit bg-blue-100 text-blue-600 p-2 rounded-md items-center gap-2 mb-4 shadow-sm">
        <div>{children}</div>
        <p className="font-semibold">Trending in {genre}</p>
      </div>
      <Link
        href={`/blogs/${blog.slug}`}
        className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
              src={blog.author.photo}
              alt={blog.author.name}
            />
            {blog.author.accountType === "Organization" && (
              <img
                className="h-6 w-6 -ml-3 rounded-full border-2 border-white shadow-sm"
                src={blog.featuredImage}
                alt="Organization"
              />
            )}
          </div>
          <p className="text-gray-700 font-medium">{blog.author.name}</p>
          {blog.author.verified && (
            <UserCircleCheck weight="fill" className="text-blue-500 text-lg" />
          )}
          {blog.author.accountType === "Organization" && (
            <Building weight="bold" className="text-blue-500 text-lg" />
          )}
          <div className="ml-auto flex items-center gap-2">
            <DisabledInfoButton>{blog.numberOfViews} views</DisabledInfoButton>
            <DisabledInfoButton>{blog.readTime} min read</DisabledInfoButton>
            <DisabledInfoButton>June 26</DisabledInfoButton>
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-800">{blog.heading}</p>
        <div className="relative rounded-md overflow-hidden w-full h-64">
          <img
            src={blog.featuredImage}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
            alt="Featured Image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4">
            <p className="text-sm text-center">{blog.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CommonTrendBlog;
