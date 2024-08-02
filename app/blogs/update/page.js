import UpdateBlog from "@/app/_components/blogsComponent/UpdateBlog";
import { auth } from "@/app/_lib/auth";
import React from "react";
const hostname = process.env.HOSTNAME;

const page = async () => {
  const session = await auth();

  return (
    <div className="px-2 my-10 flex justify-center">
      <div className="w-6/6 md:w-5/6">
        <UpdateBlog session={session} hostname={hostname} />
      </div>
    </div>
  );
};

export default page;
