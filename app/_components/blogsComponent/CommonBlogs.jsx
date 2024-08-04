import {
  CheckCircle,
  TrendUp,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const hostname = process.env.HOSTNAME;
const CommonBlogs = async ({ children, genre }) => {
  const res = await fetch(`${hostname}/api/v1/blogs?genre=${genre}&limit=4`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  return (
    <div>
      <div>
        <p className="font-medium mb-2 flex items-center gap-2">
          {children} {genre}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogComponent blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

const BlogComponent = ({ blog }) => {
  const heading = blog.heading.substring(0, 70);
  const description = blog.description.substring(0, 100);
  return (
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-1">
      <div className="flex  items-center gap-1 text-sm">
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
        <p className="font-medium">{blog.author.name}</p>
        {blog.author.verified ? (
          <UserCircleCheck className="dark:text-stone-200" weight="fill" />
        ) : (
          ""
        )}
        <p className="text-sm font-medium text-blue-400 mx-1">{blog.genre}</p>
        <div className="ml-auto flex items-center gap-1">
          <p className="text-sm font-medium py-0.5 px-1 ml-auto rounded-md">
            {blog.readTime} min
          </p>
          <p className="text-sm font-medium py-0.5 px-1 ml-auto rounded-md">
            June 26
          </p>
        </div>
      </div>

      <div className="leading-5 antialiased">
        <p className="font-medium h-14 overflow-hidden text-ellipsis">
          {heading}
          {heading.length < blog.heading.length ? "..." : ""}
        </p>
      </div>

      <div className="flex justify-center w-full overflow-hidden h-48">
        <img
          src={blog?.featuredImage}
          className="rounded-md w-full object-cover"
          alt="Featured Image"
        />
      </div>
      <div>
        <p className="text-sm antialiased">{description} ...</p>
      </div>
    </Link>
  );
};

export default CommonBlogs;
