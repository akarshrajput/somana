import { BookOpen, UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
const hostname = process.env.HOSTNAME;

const CommonSpecialBlogs = async ({ genre }) => {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=6&genre=${genre}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  // console.log(blogs);
  return (
    <div>
      <div>
        <p className="mb-2 px-2 font-medium flex items-center gap-2">
          <BookOpen weight="fill" className="size-5" /> Latest on {genre}
        </p>
      </div>

      <div className="grid grid-cols-3  gap-2">
        {blogs.map((blog, index) => (
          <BlogComponent index={index + 1} blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

const BlogComponent = ({ blog, index }) => {
  const heading = blog.heading.substring(0, 100);
  const description = blog.description.substring(0, 100);
  return (
    <Link href={`/blogs/${blog.slug}`} className="p-2 flex gap-4 items-center">
      <div>
        <p className="text-4xl font-bold text-stone-300">{index}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm">
          <img
            src={blog.author.photo}
            alt={`${blog.author.name} profile photo`}
            className="rounded-full size-5"
          />
          <p className="font-medium">{blog.author.name}</p>
          {blog.author.verified ? (
            <UserCircleCheck className="text-stone-50" weight="fill" />
          ) : (
            ""
          )}
          <div className="">
            <p className="font-medium text-sm text-cyan-500">{blog.genre}</p>
          </div>
          <div className="text-sm font-medium py-0.5 px-1 ml-auto rounded-md">
            {blog.numberOfViews} views
          </div>
        </div>
        <div className="font-medium text-lg">{heading}.</div>
        <div className="text-sm">{description} ...</div>
      </div>
    </Link>
  );
};

export default CommonSpecialBlogs;
