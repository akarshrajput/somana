import React from "react";
import BlogsNavigation from "../_components/blogsComponent/BlogsNavigation";
import TrendingBlogs from "../_components/blogsComponent/TrendingBlogs";
import CommonBlogs from "../_components/blogsComponent/CommonBlogs";
import {
  Crown,
  FlagBanner,
  FlagBannerFold,
  Heartbeat,
  Mountains,
  Robot,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import CommonSpecialBlogs from "../_components/blogsComponent/CommonSpecialBlogs";
import CommonTrendBlog from "../_components/blogsComponent/CommonTrendBlog";
import BlogOfTheWeek from "../_components/blogsComponent/BlogOfTheWeek";
import Footer from "../_components/main/Footer";
import CommonSpecialFourBlogs from "../_components/blogsComponent/CommonSpecialFourBlogs";
import BlogTopics from "../_components/blogsComponent/BlogTopics";
import BlogTopicsSmall from "../_components/blogsComponent/BlogTopicsSmall";

const page = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-5/6 px-4 mt-2">
          <BlogTopicsSmall />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 dark:text-stone-200">
              <TrendingBlogs />
            </div>
            {/* <div className="my-2">
              <p className="mb-2 bg-stone-50 p-1 px-2 w-fit rounded-md font-medium flex items-center gap-2">
                <Mountains weight="bold" />
                Advertisement
              </p>
              <div
                className="border border-dashed p-1 my-1 rounded-md bg-stone-100"
                id="container-2a23f44d708874fffe31b49e3f5cd5d5"
              ></div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <BlogOfTheWeek />
            </div>
            <div className="flex flex-col gap-4 dark:text-stone-200">
              <CommonBlogs genre="History">
                <FlagBanner weight="fill" />
              </CommonBlogs>
            </div>
            <div className="col-span-2">
              <CommonSpecialFourBlogs genre="Story" />
            </div>
            <div className="flex flex-col gap-4 dark:text-stone-200">
              <CommonBlogs genre="Health">
                <Heartbeat weight="fill" />
              </CommonBlogs>
            </div>
            <div className="col-span-2">
              <CommonSpecialFourBlogs genre="Tips" />
            </div>
            <div className="flex flex-col gap-4 dark:text-stone-200">
              <CommonBlogs genre="Technology">
                <Robot weight="fill" />
              </CommonBlogs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
