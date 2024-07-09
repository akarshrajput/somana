import React from "react";
import BlogsNavigation from "../_components/blogsComponent/BlogsNavigation";
import TrendingBlogs from "../_components/blogsComponent/TrendingBlogs";

const page = () => {
  return (
    <div className="px-20 mt-6">
      <div className="mb-6">
        <BlogsNavigation />
      </div>
      <TrendingBlogs />
    </div>
  );
};

export default page;
