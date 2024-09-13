// import {
//   ArrowElbowDownRight,
//   ArrowElbowRightDown,
//   ArrowRight,
//   BookOpen,
//   Briefcase,
//   HandArrowDown,
//   SealCheck,
//   UserCircleCheck,
// } from "@phosphor-icons/react/dist/ssr";
// import Link from "next/link";
// import React from "react";
// import DisabledInfoButton from "../buttons/DisabledInfoButton";
// const hostname = process.env.HOSTNAME;

import Link from "next/link";
import BlogDate from "./BlogDate";

// const CommonSpecialBlogs = async ({ genre }) => {
//   const res = await fetch(`${hostname}/api/v1/blogs?limit=8&genre=${genre}`, {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   const blogs = data.data.blogs;

//   return (
//     <div className="">
//       <div>
//         <DisabledInfoButton>
//           {genre}
//           <ArrowElbowRightDown weight="bold" className="text-stone-500" />
//         </DisabledInfoButton>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
//         {blogs.map((blog, index) => (
//           <BlogComponent index={index + 1} blog={blog} key={blog._id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const BlogComponent = ({ blog, index }) => {
//   const heading = blog.heading.substring(0, 100);
//   const description = blog.description.substring(0, 100);
//   return (
//     <Link href={`/blogs/${blog.slug}`} className="p-1 flex gap-4">
//       {/* <div className="flex justify-center">
//         <p className="text-4xl font-bold text-stone-300">{index}</p>
//       </div> */}
//       <div className="flex flex-col gap-2">
//         <div className="flex items-center gap-2 text-sm">
//           <div className="relative flex items-center">
//             <img
//               className="h-6 w-6 z-10 rounded-full border-2 border-white shadow-sm"
//               src={blog.author.photo}
//               alt={blog.author.name}
//             />
//             {blog.author.accountType === "Organization" && (
//               <img
//                 className="h-6 w-6 z-12 -ml-2 rounded-full border-2 border-white shadow-sm"
//                 src={blog.featuredImage}
//                 alt="Organization"
//               />
//             )}
//           </div>
//           {blog.author.accountType === "Organization" && (
//             <Briefcase className="text-black" weight="fill" />
//           )}
//           <div className="flex gap-1 items-center">
//             <Link
//               href={`user/${blog.author.email}`}
//               className="text-[13px] hover:underline underline-offset-2 decoration-1"
//             >
//               {blog.author.name}
//             </Link>
//             {blog.author.verified && (
//               <SealCheck className="text-black" weight="fill" />
//             )}
//             <p className="text-[12px] text-stone-600">on</p>
//             <Link
//               href={`/blogs/topic/${blog.genre}`}
//               className="text-[13px] hover:underline underline-offset-2 decoration-1"
//             >
//               {blog.genre}
//             </Link>
//           </div>
//           <div className="ml-auto flex items-center gap-2">
//             {/* <DisabledInfoButton>{blog.numberOfViews} views</DisabledInfoButton> */}
//           </div>
//         </div>
//         <div className="font-semibold text-gray-800 text-md">{heading}</div>
//         <div className="text-gray-600 text-sm">{description}...</div>
//       </div>
//     </Link>
//   );
// };

// export default CommonSpecialBlogs;

const hostname = process.env.HOSTNAME;

export default async function CommonSpecialBlogs({ genre }) {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=6&genre=${genre}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data.blogs;
  return (
    <div className="bg-white py-8">
      <div className="mx-auto lg:max-w-[90rem] px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post._id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="relative flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.photo}
                  className="h-8 w-8 rounded-full bg-gray-50"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">
                    <Link href={`user/${post.author.email}`}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  {}
                  {/* <p className="text-gray-600">{post.author.occupation}</p> */}
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.createdAt} className="text-gray-500">
                  <BlogDate blogDate={post.createdAt} />
                </time>
                <Link
                  href={`/blogs/topic/${post.genre}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.genre}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blogs/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.heading}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
