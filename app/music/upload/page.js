import UploadMusic from "@/app/_components/musicComponents/UploadMusic";
import { auth } from "@/app/_lib/auth";
import React from "react";
const hostname = process.env.HOSTNAME;
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const page = async () => {
  const session = await auth();
  return (
    <div className="px-40 mt-10">
      <UploadMusic
        session={session}
        supabaseURL={supabaseURL}
        hostname={hostname}
      />
    </div>
  );
};

export default page;
