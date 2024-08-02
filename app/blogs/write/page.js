import WriteBlog from "@/app/_components/blogsComponent/WriteBlog";
import { auth } from "@/app/_lib/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hostname = process.env.HOSTNAME;

  return (
    <div className="px-2 my-10 flex justify-center">
      <div className="w-6/6 md:w-5/6">
        <WriteBlog
          session={session}
          supabaseURL={supabaseURL}
          hostname={hostname}
        />
      </div>
    </div>
  );
};

export default page;
