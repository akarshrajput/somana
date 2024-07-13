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
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import CommonSpecialBlogs from "../_components/blogsComponent/CommonSpecialBlogs";
import CommonTrendBlog from "../_components/blogsComponent/CommonTrendBlog";
import BlogOfTheWeek from "../_components/blogsComponent/BlogOfTheWeek";

const page = () => {
  return (
    <div className="px-4 mt-2">
      <div className="mb-6">
        <BlogsNavigation />
      </div>
      <div className="grid grid-cols-3 gap-2 gap-x-4 my-4">
        <BlogOfTheWeek />

        <div className="col-span-2">
          <CommonSpecialBlogs genre="Story" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <TrendingBlogs />
        <CommonBlogs genre="Health">
          <Heartbeat weight="bold" />
        </CommonBlogs>
      </div>
      <div className="grid grid-cols-3 gap-2 gap-x-4 my-4">
        <div className="col-span-2">
          <CommonSpecialBlogs genre="History" />
        </div>
        <CommonTrendBlog genre="History">
          <FlagBannerFold className="text-red-600" weight="fill" />
        </CommonTrendBlog>
      </div>
    </div>
  );
};

export default page;
