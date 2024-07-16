import Footer from "@/app/_components/main/Footer";
import { auth } from "@/app/_lib/auth";
import { UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

const hostname = process.env.HOSTNAME;

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const fetchBlogData = async (slug, userId) => {
  const res = await fetch(
    `${hostname}/api/v1/blogs/slug/${slug}?userId=${userId}`
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.data;
};

export async function generateMetadata({ params }) {
  const session = await auth();
  let userId = session ? session.user.userId : "";

  const blog = await fetchBlogData(params.slug, userId);

  if (!blog) {
    return {
      title: "Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${blog.heading} - My Blog`,
    description: blog.description,
    openGraph: {
      title: blog.heading,
      description: blog.description,
      images: [blog.featuredImage],
      url: `${hostname}/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.heading,
      description: blog.description,
      image: blog.featuredImage,
    },
  };
}

const Page = async ({ params }) => {
  const session = await auth();
  let userId = session ? session.user.userId : "";

  const blog = await fetchBlogData(params.slug, userId);

  if (!blog) {
    notFound();
  }

  const contentWithLineBreaks = blog.content;

  const dateString = blog.createdAt;
  const dateObj = new Date(dateString);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = String(dateObj.getFullYear());

  return (
    <>
      <div className="flex justify-center py-6">
        <div>
          <div className="px-40">
            <p className="text-stone-200 text-xl font-bold">{blog.genre}</p>
            <div className="my-8 border-l-8 border-stone-200 pl-6 font-medium">
              <p className={`text-7xl leading-tight text-stone-200`}>
                {blog.heading}
              </p>
            </div>
          </div>
          <div className="flex px-40 text-stone-200 items-center gap-2">
            <img
              className="size-7 rounded-full"
              src={blog?.author?.photo}
              alt={`${blog.author.name} profile image of Somana`}
            />
            <p className="font-medium">{blog.author.name}</p>
            <p>
              {blog.author.verified ? (
                <UserCircleCheck weight="fill" className="size-5" />
              ) : (
                ""
              )}
            </p>
            <div className="flex items-center gap-1">
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.numberOfViews} views
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.readTime} min read
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {day}-{month}-{year}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <img src={blog.featuredImage} className="w-full" />
          </div>
          <div className="px-40">
            <p className="my-4 border-l-4 border-stone-200 text-stone-200 pl-2">
              {blog.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className={`content-custom-class w-3/6 leading-relaxed mt-10 tracking-wide text-stone-200 antialiased text-xl mb-10 `}
              dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
