import Footer from "@/app/_components/main/Footer";
import { auth } from "@/app/_lib/auth";
import {
  AsteriskSimple,
  Cross,
  LineVertical,
  Mountains,
  SealCheck,
  UserCircleCheck,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import DeleteButton from "@/app/_components/buttons/DeleteBlog";
import UpdateBlogButton from "@/app/_components/buttons/UpdateBlogButton";
import LikeButton from "@/app/_components/blogsComponent/LikeButton";
import RelatedBlogs from "@/app/_components/blogsComponent/RelatedBlogs";
import BlogComments from "@/app/_components/blogsComponent/BlogComments";
import AddComment from "@/app/_components/blogsComponent/AddComment";
import DisabledInfoButton from "@/app/_components/buttons/DisabledInfoButton";
import UserLoginError from "@/app/_components/main/UserLoginError";
import LoginButton from "@/app/_components/buttons/LoginButton";
import BlogInfoPopUp from "@/app/_components/blogsComponent/BlogInfoPopUp";
import BlogDate from "@/app/_components/blogsComponent/BlogDate";

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
  const oneThirdContent = blog.content.substring(0, blog.content.length / 3);

  return (
    <>
      <div className="flex justify-center py-6 px-4">
        <div className="w-3/6">
          <div>
            <BlogInfoPopUp session={session} blog={blog} />
            <div className="flex items-center gap-2  text-stone-600">
              {/* <AsteriskSimple weight="bold" className="text-yellow-500" /> */}

              <p className="dark:text-stone-200 text-green-800 text-sm font-medium">
                {blog.genre}
              </p>
              <LineVertical weight="bold" />
              <BlogDate blogDate={blog.createdAt} />
            </div>
            <div className="my-4 font-medium">
              <p className="text-4xl leading-tight  dark:text-stone-200">
                {blog.heading}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2  dark:text-stone-200 text-stone-700">
            <img
              className="w-8 h-8 rounded-full"
              src={blog?.author?.photo}
              alt={`${blog.author.name} profile image`}
            />
            <p className="">{blog.author.name}</p>
            {blog.author.verified && (
              <SealCheck className="text-black" weight="fill" />
            )}
            <div className="ml-2 flex flex-wrap gap-0 items-center">
              <LikeButton
                blogId={params.slug}
                initialLikes={blog.likes}
                userId={userId}
              />
              <LineVertical weight="bold" />

              <DisabledInfoButton>
                {blog.numberOfViews} views
              </DisabledInfoButton>
              <LineVertical weight="bold" />

              <DisabledInfoButton>{blog.readTime} min read</DisabledInfoButton>
            </div>
            {userId === blog.author._id && (
              <div className="md:ml-auto flex items-center gap-2">
                <UpdateBlogButton blog={blog} />
                <DeleteButton blogId={blog._id} />
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            <img
              src={blog.featuredImage}
              className="w-full max-w-8xl rounded-sm"
              alt="Featured image"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="my-4  lg:w-full border-stone-700 dark:border-stone-200 text-stone-600 dark:text-stone-200">
              {blog.description}
            </p>
            {/* <div className="my-2 w-full max-w-3xl">
              <p className="mb-2 bg-stone-50 p-1 px-2 w-fit rounded-md font-medium flex items-center gap-2">
                <Mountains weight="bold" />
                Advertisement
              </p>
              <div
                className="border border-dashed p-1 my-1 rounded-md bg-stone-100"
                id="container-2a23f44d708874fffe31b49e3f5cd5d5"
              ></div>
            </div> */}
          </div>
          <div className="flex justify-center">
            {session?.user ? (
              <div
                className={`w-5/6  hyphens-auto  text-sm md:text-lg overflow-hidden leading-loose mt-10 tracking-wider text-stone-700 dark:text-stone-200 antialiased mb-10`}
                dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}
              ></div>
            ) : (
              <div className="flex flex-col items-center">
                <div
                  className={`w-5/6 hyphens-auto text-sm md:text-lg overflow-hidden relative content-custom-class leading-loose mt-10 tracking-wider text-stone-700 dark:text-stone-200 antialiased mb-10`}
                  dangerouslySetInnerHTML={{ __html: oneThirdContent }}
                ></div>
                <UserLoginError>
                  <p>To continue reading, please Login</p>
                  <LoginButton />
                </UserLoginError>
              </div>
            )}
          </div>
          <div className="lg:px-40 flex flex-col items-center">
            {/* <div className="my-2 w-full max-w-3xl">
              <p className="mb-2 bg-stone-50 p-1 px-2 w-fit rounded-md font-medium flex items-center gap-2">
                <Mountains weight="bold" />
                Advertisement
              </p>
              <div
                className="border border-dashed p-1 my-1 rounded-md bg-stone-100"
                id="container-2a23f44d708874fffe31b49e3f5cd5d5"
              ></div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex mt-20 justify-center">
        <div className="w-full max-w-3xl pt-10 flex flex-col gap-4">
          {session?.user ? (
            <AddComment
              hostname={hostname}
              blogId={blog._id}
              authorId={userId}
            />
          ) : (
            <UserLoginError>
              <p>Login to comment on this blog.</p>
              <LoginButton />
            </UserLoginError>
          )}
          <BlogComments hostname={hostname} blogId={blog._id} />
        </div>
      </div>
      <div className="flex mt-20 justify-center">
        <div className="w-full max-w-3xl pt-10">
          <RelatedBlogs genre={blog.genre} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
