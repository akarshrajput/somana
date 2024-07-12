import {
  AirplaneTaxiing,
  City,
  ShieldChevron,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
const hostname = process.env.HOSTNAME;

const LatestBlogs = async () => {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=6`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  return (
    <div>
      <div>
        <p className="text-sm mb-2 px-2 font-medium flex items-center gap-2">
          <City weight="fill" className="text-orange-600 size-4" /> Latest on
          earth
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
      <div>
        <div className="flex items-center gap-1 text-sm">
          <img
            src={blog.author.photo}
            alt={`${blog.author.name} profile photo`}
            className="rounded-full size-4"
          />
          <p>{blog.author.name}</p>
          {blog.author.verified ? (
            <UserCircleCheck className="text-rose-600" weight="fill" />
          ) : (
            ""
          )}
          <div className="ml-2">
            <p className="font-medium text-sm text-emerald-600">{blog.genre}</p>
          </div>
        </div>
        <div className="font-medium">{heading}.</div>
        <div className="text-sm">{description} ...</div>
      </div>
    </Link>
  );
};

export default LatestBlogs;
