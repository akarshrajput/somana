import React from "react";
import TrendingBlogs from "./TrendingBlogs";
import BlogsNavigation from "./BlogsNavigation";

const BlogsHome = () => {
  return (
    <div>
      <div className="mb-6">
        <BlogsNavigation />
      </div>
      {/* <TrendingBlogs /> */}
    </div>
  );
};

export default BlogsHome;
