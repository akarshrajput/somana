import {
  BookOpen,
  Butterfly,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
const hostname = process.env.HOSTNAME;

const RelatedBlogs = async ({ genre }) => {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=10&genre=${genre}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;

  return (
    <div>
      <div>
        <p className="mb-4 px-2  flex items-center gap-2">
          <Butterfly weight="bold" className="size-5" /> Related Blogs on{" "}
          {genre}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    <Link href={`/blogs/${blog.slug}`} className="p-2 flex gap-4">
      <div>
        <p className="text-4xl font-bold text-stone-300">{index}</p>
      </div>
      <div className="flex  flex-col gap-1">
        <div className="flex font-medium items-center gap-2 text-sm">
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
          <p className="">{blog.author.name}</p>
          {blog.author.verified && (
            <UserCircleCheck className="dark:text-stone-200" weight="fill" />
          )}
          <p className="text-sm text-blue-400">{blog.genre}</p>
          <p className="text-sm py-0.5 px-1 ml-auto rounded-md">
            {blog.numberOfViews} views
          </p>
        </div>
        <div className=" font-medium">{heading}.</div>
        <div className="text-sm">{description} ...</div>
      </div>
    </Link>
  );
};

export default RelatedBlogs;
