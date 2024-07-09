import connectMongoDB from "@/app/_lib/mongodb";
import Blog from "@/app/_models/blogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();
    const slug = request.url.split("blogs/slug/")[1];

    const blog = await Blog.findOne({ slug: slug });
    if (blog) {
      return NextResponse.json(
        {
          status: "success",
          message: "Blog found successfully",
          data: blog,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: `Blog not found with slug ${slug}`,
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { statusText: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
