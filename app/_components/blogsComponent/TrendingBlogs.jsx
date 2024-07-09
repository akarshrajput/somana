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
  let blogs;
  try {
    const res = await fetch(`${hostname}/api/v1/blogs?limit=5`, {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(data);
    blogs = data.data.blogs;
    // console.log(blogs);
  } catch (err) {
    console.log("Error");
  }
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
  const heading = blog.heading.substring(0, 60);
  const description = blog.description.substring(0, 100);
  return (
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-1 pl-2 p-1">
      <div className="flex items-center gap-1 text-sm">
        <img
          src={blog.author.photo}
          alt={`${blog.author.name} profile photo`}
          className="rounded-full size-4"
        />
        <p>{blog.author.name}</p>
        <UserCircleCheck className="text-rose-600" weight="fill" />
        <div className="ml-auto flex items-center gap-1">
          <p className="bg-stone-100 text-sm border  py-0.5 px-1 rounded-md">
            {blog.readTime} min
          </p>
          <p className="bg-stone-100 border text-sm  py-0.5 px-1 rounded-md">
            June 26
          </p>
        </div>
      </div>
      <p className="text-sm font-medium text-emerald-700">{blog.genre}</p>

      <div className="leading-5 antialiased">
        <p className="font-medium">{heading} ...</p>
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
