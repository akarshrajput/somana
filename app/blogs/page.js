import React from "react";
import BlogsNavigation from "../_components/blogsComponent/BlogsNavigation";
import TrendingBlogs from "../_components/blogsComponent/TrendingBlogs";
import BlogOfTheWeek from "../_components/blogsComponent/BlogOfTheWeek";

const page = () => {
  return (
    <div className="px-4 mt-2">
      <div className="mb-6">
        <BlogsNavigation />
      </div>
      <div className="grid grid-cols-3 gap-2 my-4">
        <BlogOfTheWeek />
      </div>
      <TrendingBlogs />
    </div>
  );
};

export default page;
