import Link from "next/link";
import BlogDate from "./BlogDate";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

const hostname = process.env.HOSTNAME;

export default async function CommonSpecialBlogs() {
  const res = await fetch(`${hostname}/api/v1/blogs?limit=6`, {
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
        <div className="mx-auto mt-10 flex flex-col max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
          {blogs.map((post) => (
            <div key={post._id} className="flex items-center gap-4">
              <div className="flex justify-center overflow-hidden size-52 rounded-lg border">
                <img
                  src={post?.featuredImage}
                  className="object-cover aspect-square rounded-sm transition-transform duration-300"
                  alt="Featured Image"
                />
              </div>
              <article className="flex max-w-xl flex-col items-start justify-between">
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
                  {post.usedAI ? (
                    <Sparkle className="text-rose-600 size-4" weight="fill" />
                  ) : (
                    ""
                  )}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
