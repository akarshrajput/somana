import React from "react";
import TrendingBlogs from "./TrendingBlogs";
import BlogsNavigation from "./BlogsNavigation";

const BlogsHome = () => {
  return (
    <div>
      <TrendingBlogs />
      <div className="my-4">
        <BlogsNavigation />
      </div>
    </div>
  );
};

export default BlogsHome;
