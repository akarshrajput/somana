import React from "react";
import BlogsNavigation from "../_components/blogsComponent/BlogsNavigation";
import TrendingBlogs from "../_components/blogsComponent/TrendingBlogs";
// import BlogOfTheWeek from "../_components/blogsComponent/CommonTrendBlog";
// import LatestBlogs from "../_components/blogsComponent/CommonSpecialBlogs";
import CommonBlogs from "../_components/blogsComponent/CommonBlogs";
import {
  Crown,
  FlagBannerFold,
  Heartbeat,
  Robot,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import CommonSpecialBlogs from "../_components/blogsComponent/CommonSpecialBlogs";
import CommonTrendBlog from "../_components/blogsComponent/CommonTrendBlog";
import BlogOfTheWeek from "../_components/blogsComponent/BlogOfTheWeek";
import Footer from "../_components/main/Footer";

const page = () => {
  return (
    <>
      <div className="px-4 mt-2">
        <div className="mb-6">
          <BlogsNavigation />
        </div>
        <div className="grid text-stone-50 grid-cols-3 gap-2 gap-x-4 my-4">
          <BlogOfTheWeek />

          <div className="col-span-2">
            <CommonSpecialBlogs genre="Story" />
          </div>
        </div>
        <div className="flex text-stone-50 flex-col gap-2">
          <TrendingBlogs />
        </div>
        <div className="grid text-stone-50 grid-cols-3 gap-2 gap-x-4 my-4">
          <div className="col-span-2">
            <CommonSpecialBlogs genre="Space" />
          </div>
          <CommonTrendBlog genre="Space">
            <FlagBannerFold className="text-red-600" weight="fill" />
          </CommonTrendBlog>
        </div>
        <div className="flex flex-col gap-2 text-stone-50">
          <CommonBlogs genre="Health">
            <Heartbeat weight="bold" />
          </CommonBlogs>
        </div>
        <div className="grid grid-cols-3 gap-2 text-stone-50 gap-x-4 my-4">
          <CommonTrendBlog genre="History">
            <FlagBannerFold className="text-red-600" weight="fill" />
          </CommonTrendBlog>
          <div className="col-span-2">
            <CommonSpecialBlogs genre="History" />
          </div>
        </div>
        <div className="flex text-stone-50 flex-col gap-2">
          <CommonBlogs genre="Technology">
            <Robot weight="bold" />
          </CommonBlogs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
