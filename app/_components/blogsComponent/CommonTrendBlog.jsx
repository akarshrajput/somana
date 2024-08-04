import {
  Building,
  Crown,
  Factory,
  TextColumns,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

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
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-1">
      <div className="flex  items-center gap-2 mb-4">
        <div>{children}</div>
        <p className="font-medium">On {genre}</p>
      </div>
      <div className="flex font-medium items-center gap-2">
        <div className="flex">
          <img
            className="size-6 z-10 rounded-full border border-stone-50 dark:border-stone-500"
            src={blog.author.photo}
          />
          {blog.author.accountType === "Organization" ? (
            <img
              className="size-6 z-4 -ml-2 rounded-full border border-stone-50 dark:border-stone-500"
              src={blog.featuredImage}
            />
          ) : (
            ""
          )}
        </div>
        <p className="text-sm">{blog.author.name}</p>
        {blog.author.verified && (
          <UserCircleCheck
            weight="fill"
            className="size-4 dark:text-stone-200"
          />
        )}
        {blog.author.accountType === "Organization" && (
          <Building weight="bold" className="size-4 dark:text-stone-200" />
        )}
        <div className="ml-auto flex items-center gap-1">
          <p className="text-sm py-0.5 px-1 rounded-md">
            {blog.numberOfViews} views
          </p>
          <p className="text-sm py-0.5 px-1 rounded-md">{blog.readTime} min</p>
          <p className="text-sm py-0.5 px-1 rounded-md">June 26</p>
        </div>
      </div>
      <p className="text-lg font-medium my-1">{blog.heading}</p>
      <div className="relative rounded-md overflow-hidden flex justify-center w-full h-64">
        <img
          src={blog.featuredImage}
          className="rounded-md w-full object-cover"
          alt="Featured Image"
        />
        <div className="absolute  top-0 text-sm left-0 bg-black bg-opacity-50 text-white p-2">
          <p>{blog.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CommonTrendBlog;
