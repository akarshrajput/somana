import {
  CheckCircle,
  TrendUp,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const hostname = process.env.HOSTNAME;

const TrendingBlogs = async () => {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=8`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  return (
    <div>
      <div>
        <p className="text-sm font-medium mb-2 flex items-center gap-2">
          <TrendUp weight="bold" /> Trending
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
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-1 pl-2 p-1">
      <div className="flex items-center gap-1 text-sm">
        <img
          src={blog.author.photo}
          alt={`${blog.author.name} profile photo`}
          className="rounded-full aspect-square w-5"
        />
        <p>{blog.author.name}</p>
        {blog.author.verified ? (
          <UserCircleCheck className="text-rose-600" weight="fill" />
        ) : (
          ""
        )}
        <p className="text-sm font-medium text-emerald-700 mx-1">
          {blog.genre}
        </p>
        <div className="ml-auto flex items-center gap-1">
          <p className="bg-stone-100 text-sm border py-0.5 px-1 rounded-md">
            {blog.readTime} min
          </p>
          <p className="bg-stone-100 border text-sm py-0.5 px-1 rounded-md">
            June 26
          </p>
        </div>
      </div>

      <div className="leading-5 antialiased">
        <p className="font-medium h-10 overflow-hidden text-ellipsis">
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

export default TrendingBlogs;
