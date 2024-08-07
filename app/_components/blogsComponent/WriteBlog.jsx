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
  const [genre, setGenre] = useState("Blog");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !heading ||
      !content ||
      !description ||
      !featuredImage ||
      !tags ||
      !genre
    ) {
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
        genre: genre,
        author: session.user.userId,
        featuredImage: imagePath,
      };

      const response = await axios.post(`/api/v1/blogs`, blogData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response);

      const avatarFile = featuredImage;
      await supabase.storage
        .from("blog-featured-images")
        .upload(imageName, avatarFile);

      const slug = response?.data?.data?.newBlog?.slug;
      toast.success("Blog posted!");
      router.push(`/blogs/${slug}`);

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

  const handleGenreChange = (e) => {
    if (e.target.value.length <= 15) {
      setGenre(e.target.value);
    }
  };

  return (
    <div>
      <form
        className="rounded-md p-4 overflow-hidden border-2 bg-stone-100 dark:bg-stone-800 dark:border-stone-700 border-stone-300 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-2  py-1">
          {/* <label>Heading:</label> */}
          <input
            value={heading}
            onChange={handleHeadingChange}
            placeholder="Write heading"
            className="border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:placeholder:text-stone-200  bg-stone-200 placeholder-stone-600 py-1 px-2 outline-none rounded-md w-full"
          />
        </div>
        <div className="flex items-center gap-2  py-1">
          {/* <label>Description:</label> */}
          <input
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write description"
            className="border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:placeholder:text-stone-200  bg-stone-200 placeholder-stone-600 py-1 px-2 outline-none rounded-md w-full"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 py-1">
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
              className="border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:placeholder:text-stone-200  bg-stone-200 placeholder-stone-600 py-1 px-2 outline-none rounded-md w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <label>Genre: </label>
            <select
              className="border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:placeholder:text-stone-200  bg-stone-200 placeholder-stone-600 py-1 px-2 outline-none rounded-md w-full"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="Blog">Blog</option>
              <option value="Automotive">Automotive</option>
              <option value="Beauty">Beauty</option>
              <option value="Books">Books</option>
              <option value="Business">Business</option>
              <option value="Career">Career</option>
              <option value="Cryptocurrency">Cryptocurrency</option>
              <option value="Culture">Culture</option>
              <option value="Crafts">Crafts</option>
              <option value="Design">Design</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Environmental">Environmental</option>
              <option value="Fashion">Fashion</option>
              <option value="Finance">Finance</option>
              <option value="Fitness">Fitness</option>
              <option value="Food">Food</option>
              <option value="Gaming">Gaming</option>
              <option value="Gardening">Gardening</option>
              <option value="Health">Health</option>
              <option value="History">History</option>
              <option value="Home">Home</option>
              <option value="Humor">Humor</option>
              <option value="Interests">Interests</option>
              <option value="Investing">Investing</option>
              <option value="Legal">Legal</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Luxury">Luxury</option>
              <option value="Marketing">Marketing</option>
              <option value="Movies">Movies</option>
              <option value="Music">Music</option>
              <option value="News">News</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Parenting">Parenting</option>
              <option value="Pets">Pets</option>
              <option value="Photography">Photography</option>
              <option value="Politics">Politics</option>
              <option value="Estate">Estate</option>
              <option value="Relationships">Relationships</option>
              <option value="Science">Science</option>
              <option value="Shopping">Shopping</option>
              <option value="Social">Social</option>
              <option value="Space">Space</option>
              <option value="Spirituality">Spirituality</option>
              <option value="Sports">Sports</option>
              <option value="Startups">Startups</option>
              <option value="Story">Story</option>
              <option value="Technology">Technology</option>
              <option value="Tips">Tips</option>
              <option value="Travel">Travel</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
        </div>
        <p className="py-0.5">Write Blog content:</p>
        <QuillEditor value={content} onChange={handleContentChange} />

        <div className="py-1">
          {isLoading ? (
            <p className="flex text-sm my-2 items-center gap-1 text-yellow-600">
              <Info /> Please do not close window while posting
            </p>
          ) : (
            ""
          )}

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
    </div>
  );
};

export default WriteBlog;
