import {
  Crown,
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
      <div className="flex items-center gap-2 mb-4">
        <div> {children}</div>
        <p className="font-medium">On {genre}</p>
      </div>
      <div className="flex items-center gap-2">
        <img className="size-5 rounded-full" src={blog.author.photo} />
        <p className="text-sm font-medium">{blog.author.name}</p>
        <p>
          {blog.author.verified ? (
            <UserCircleCheck weight="fill" className="size-4 text-blue-500" />
          ) : (
            ""
          )}
        </p>
        <div className="ml-auto flex items-center gap-1">
          <p className="text-sm font-medium py-0.5 px-1 rounded-md">
            {blog.numberOfViews} views
          </p>
          <p className="text-sm font-medium py-0.5 px-1 rounded-md">
            {blog.readTime} min
          </p>
          <p className="text-sm font-medium py-0.5 px-1 rounded-md">June 26</p>
        </div>
      </div>
      <p className="font-medium text-lg my-1">{blog.heading}</p>
      <div className="relative rounded-md overflow-hidden flex justify-center w-full h-64">
        <img
          src={blog.featuredImage}
          className="rounded-md w-full object-cover"
          alt="Featured Image"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
          <p>{blog.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CommonTrendBlog;
