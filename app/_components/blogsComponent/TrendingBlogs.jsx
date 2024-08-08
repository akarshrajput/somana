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
  const res = await fetch(`${hostname}/api/v1/blogs?limit=4`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  // console.log(blogs);
  return (
    <div>
      <div>
        <p className="font-medium mb-2 flex items-center gap-2">
          <TrendUp weight="bold" /> Latest
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
  const description = blog.description.substring(0, 70);
  return (
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-2">
      <div className="flex text-nowrap items-center gap-1 text-sm">
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
        <p className="text-sm font-medium  text-blue-400 mx-1">{blog.genre}</p>
        <div className="ml-auto flex items-center gap-1">
          {/* <p className="text-sm font-medium py-0.5 px-1 ml-auto rounded-md">
            {blog.numberOfViews} views
          </p> */}
          {/* <p className="bg-stone-100 text-sm border py-0.5 px-1 rounded-md">
            {blog.readTime} min
          </p> */}
          {/* <p className="text-sm font-medium py-0.5 px-1 ml-auto rounded-md">
            June 26
          </p> */}
        </div>
      </div>

      <div className="leading-5 antialiased">
        <p className="font-medium text-nowrap overflow-hidden text-ellipsis">
          {blog.heading}
        </p>
      </div>
      <div>
        <p className="text-sm antialiased">
          {description}{" "}
          {description.length < blog.description.length ? "..." : ""}
        </p>
      </div>
      <div className="flex justify-center w-full overflow-hidden h-56">
        <img
          src={blog?.featuredImage}
          className="rounded-md w-full object-cover"
          alt="Featured Image"
        />
      </div>
    </Link>
  );
};

export default TrendingBlogs;
