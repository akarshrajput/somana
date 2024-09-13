// components/DeleteButton.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Trash } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import LoaderSmall from "../main/LoaderSmall";

const DeleteButton = ({ blogId, onDeleteSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!blogId) {
      toast.error("Blog ID is required");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/v1/blogs/${blogId}`);
      if (response.status === 200) {
        router.push("/");
        toast.success("Blog deleted successfully");
        if (onDeleteSuccess) {
          onDeleteSuccess();
        } else {
          router.reload();
        }
      }
    } catch (error) {
      //   toast.error("Error deleting blog");
      console.error("Error deleting blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="bg-red-600 text-sm text-stone-50 flex items-center gap-1 py-1 px-2 rounded-md"
    >
      {isLoading ? (
        <LoaderSmall />
      ) : (
        <div className="flex items-center gap-1">
          <p>Delete</p>
          <Trash weight="bold" />
        </div>
      )}
    </button>
  );
};

export default DeleteButton;
