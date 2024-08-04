"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Heart, ThumbsDown, ThumbsUp } from "@phosphor-icons/react/dist/ssr";

const LikeButton = ({ blogId, initialLikes, userId }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (userId) {
      setLiked(initialLikes.includes(userId));
    }
  }, [initialLikes, userId]);

  const handleLike = async () => {
    try {
      const response = await axios.get(
        `/api/v1/blogs/slug/${blogId}?userId=${userId}&action=like`
      );
      setLikes(response.data.data.likes);
      setLiked(!liked);
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`like-button flex items-center gap-1 ${liked ? "liked" : ""}`}
    >
      {liked ? (
        <ThumbsUp
          className="size-6 hover:scale-150 ease-in duration-300  text-sky-600"
          weight="fill"
        />
      ) : (
        <ThumbsUp
          className="size-6 hover:scale-150 hover:-rotate-6 ease-in duration-300  text-sky-600"
          weight="bold"
        />
      )}{" "}
      <p className="ml-2">{likes.length} likes</p>
    </button>
  );
};

export default LikeButton;
