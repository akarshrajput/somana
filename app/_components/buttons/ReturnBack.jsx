"use client";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ReturnBack = ({ text = "Back" }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="text-white bg-green-600 rounded-md text-sm px-3 py-1.5 gap-1 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <ArrowLeft weight="bold" />
      {text}
    </button>
  );
};

export default ReturnBack;
