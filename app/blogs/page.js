import React from "react";
import BlogsNavigation from "../_components/blogsComponent/BlogsNavigation";
import TrendingBlogs from "../_components/blogsComponent/TrendingBlogs";
import BlogOfTheWeek from "../_components/blogsComponent/BlogOfTheWeek";

const page = () => {
  return (
    <div className="px-20 mt-6">
      <div className="mb-6">
        <BlogsNavigation />
      </div>
      <TrendingBlogs />
      <div className="grid grid-cols-3 gap-2 my-4">
        <BlogOfTheWeek />
      </div>
    </div>
  );
};

export default page;
