import Footer from "@/app/_components/main/Footer";
import { auth } from "@/app/_lib/auth";
import { UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import DeleteButton from "@/app/_components/buttons/DeleteBlog";
import UpdateBlogButton from "@/app/_components/buttons/UpdateBlogButton";
import LikeButton from "@/app/_components/blogsComponent/LikeButton";
import RelatedBlogs from "@/app/_components/blogsComponent/RelatedBlogs";

const hostname = process.env.HOSTNAME;

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const fetchBlogData = async (slug, userId) => {
  const res = await fetch(
    `${hostname}/api/v1/blogs/slug/${slug}?userId=${userId}`,
    {
      cache: "no-store",
    }
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
      <div className="flex justify-center py-6 px-4 lg:px-0">
        <div className="w-full max-w-8xl">
          <div className="lg:px-40">
            <p className="dark:text-stone-200 text-stone-500 text-xl font-bold">
              {blog.genre}
            </p>
            <div className="my-8 border-l-8 border-stone-700 dark:border-stone-200 pl-6 font-medium">
              <p className="text-4xl md:text-5xl lg:text-7xl leading-tight text-stone-700 dark:text-stone-200">
                {blog.heading}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:px-40 dark:text-stone-200 text-stone-700">
            <img
              className="size-8 rounded-full"
              src={blog?.author?.photo}
              alt={`${blog.author.name} profile image`}
            />
            <p className="font-medium">{blog.author.name}</p>
            {blog.author.verified && (
              <UserCircleCheck weight="fill" className="w-5 h-5" />
            )}
            <div className="flex flex-wrap items-center gap-1">
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.numberOfViews} views
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {blog.readTime} min read
              </p>
              <p className="font-medium py-0.5 px-2 rounded-md">
                {day}-{month}-{year}
              </p>
              <LikeButton
                blogId={params.slug}
                initialLikes={blog.likes}
                userId={userId}
              />
            </div>
            <div className="md:ml-auto flex items-center gap-2">
              {userId === blog.author._id ? (
                <UpdateBlogButton blog={blog} />
              ) : (
                ""
              )}
              {userId === blog.author._id ? (
                <DeleteButton blogId={blog._id} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-4">
            <img src={blog.featuredImage} className="w-full rounded-xl" />
          </div>
          <div className="lg:px-40">
            <p className="my-4 border-l-4 border-stone-700 dark:border-stone-200 text-stone-700 dark:text-stone-200 pl-2">
              {blog.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="content-custom-class w-full lg:w-3/6 leading-relaxed mt-10 tracking-wide text-stone-700 dark:text-stone-200 antialiased text-xl mb-10"
              dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex mt-20 justify-center">
        <div className="w-3/6 pt-10">
          <RelatedBlogs genre={blog.genre} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
