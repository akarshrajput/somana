"use client";
import { ArrowClockwise } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const UpdateBlogButton = ({ blog }) => {
  const router = useRouter();
  console.log(blog);

  const navigateToUpdate = () => {
    router.push(`/blogs/update?blogId=${blog._id}`);
  };

  return (
    <div>
      <button
        onClick={navigateToUpdate}
        className="bg-green-600 text-sm text-stone-50 flex items-center gap-1 py-1 px-2 rounded-md"
      >
        Update <ArrowClockwise weight="bold" />
      </button>
    </div>
  );
};

export default UpdateBlogButton;
