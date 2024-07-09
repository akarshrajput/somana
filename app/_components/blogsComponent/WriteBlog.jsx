"use client";
import React, { useState } from "react";
import QuillEditor from "../editor/QuillEditor";
import supabase from "@/app/_lib/supabase";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Info, PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import LoaderSmall from "../main/LoaderSmall";
import toast from "react-hot-toast";

const WriteBlog = ({ supabaseURL, session, hostname }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!heading || !content || !description || !featuredImage || !tags) {
      toast.error("Please fill all fields");
      return;
    }

    if (featuredImage.type.split("/")[0] !== "image") {
      toast.error("Only image files are allowed");
      return;
    }

    try {
      setIsLoading(true);
      const imageName = `${Math.random()}-${Date.now()}-${featuredImage?.name}`;
      const imagePath = `${supabaseURL}/storage/v1/object/public/blog-featured-images/${imageName}`;
      const blogData = {
        heading: heading,
        description: description,
        content: content,
        tags: tags,
        author: session.user.userId,
        featuredImage: imagePath,
      };

      const response = await axios.post(`/api/v1/blogs`, blogData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const avatarFile = featuredImage;
      await supabase.storage
        .from("blog-featured-images")
        .upload(imageName, avatarFile);

      const slug = response?.data?.data?.newBlog?.slug;
      toast.success("Blog posted!");
      router.push(`/blogs/${slug}`);
      console.log(response);
      setHeading("");
      setDescription("");
      setContent("");
      setFeaturedImage("");
      setTags("");
    } catch (error) {
      toast.error("Error posting Blog, Server Error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHeadingChange = (e) => {
    if (e.target.value.length <= 100) {
      setHeading(e.target.value);
    }
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 300) {
      setDescription(e.target.value);
    }
  };

  const handleContentChange = (value) => {
    if (value.length <= 40000) {
      setContent(value);
    }
  };
  const handleTagsChange = (e) => {
    if (e.target.value.length <= 15) {
      setTags(e.target.value);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p className="flex text-sm my-2 items-center gap-1 text-yellow-600">
          <Info /> Please do not close window while posting
        </p>
      ) : (
        ""
      )}
      <form
        className="rounded-md overflow-hidden border-2 border-black"
        onSubmit={handleSubmit}
      >
        <p className="py-0.5 px-2">Write Blog content:</p>
        <QuillEditor value={content} onChange={handleContentChange} />
        <div className="flex items-center px-2 py-1">
          <div className="flex items-center gap-2">
            <label>Description photo: </label>
            <input
              onChange={(e) => setFeaturedImage(e.target.files[0])}
              type="file"
            />
          </div>
          <div className="flex items-center gap-2">
            <label>Tags: </label>
            <input
              value={tags}
              onChange={handleTagsChange}
              placeholder="Write heading"
              className="border py-0.5 px-2 outline-none rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <label>Heading:</label>
          <input
            value={heading}
            onChange={handleHeadingChange}
            placeholder="Write heading"
            className="border py-0.5 px-2 outline-none rounded-md w-full"
          />
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <label>Description:</label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write description"
            className="border py-0.5 px-2 outline-none resize-none rounded-md w-full"
          />
        </div>
        <div className="p-1 px-2">
          <button
            disabled={isLoading}
            className="bg-emerald-600 text-stone-50 flex items-center gap-1 py-1 px-2 rounded-md"
          >
            {isLoading ? (
              <LoaderSmall />
            ) : (
              <div className="flex items-center gap-1">
                <p>Post</p>
                <PaperPlaneRight className="size-4" weight="bold" />
              </div>
            )}
          </button>
        </div>
      </form>
      {isLoading ? (
        <p className="flex text-sm my-2 items-center gap-1 text-yellow-600">
          <Info /> Please do not close window while posting
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default WriteBlog;
