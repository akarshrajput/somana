"use client";
import React, { useState } from "react";
import { LinkSimple } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const GetAnonFile = () => {
  const router = useRouter();
  const [fileLink, setFileLink] = useState("");

  const anonId = fileLink.split("/anonshare/file/")[1];
  console.log(anonId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (anonId) {
        router.push(`/anonshare/file/${anonId}`);
      }
    } catch (err) {
      toast.error("Error getting file");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[20rem] flex flex-col">
        <div className="flex gap-2 items-center my-4">
          <LinkSimple size={20} weight="bold" />
          <p>Enter File URL</p>
        </div>
        <form className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <textarea
              className="textarea textarea-bordered resize-none"
              placeholder="URL"
              onChange={(e) => setFileLink(e.target.value)}
              value={fileLink}
            ></textarea>
            <button
              href={`/anondata/${anonId}`}
              className="cursor-pointer bg-green-500 w-fit p-3 rounded-md text-slate-50"
              onClick={handleSubmit}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAnonFile;
