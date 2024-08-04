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
        <ThumbsUp className="size-5 text-sky-600" weight="fill" />
      ) : (
        <ThumbsUp className="size-5 text-sky-600" weight="bold" />
      )}{" "}
      {likes.length}
    </button>
  );
};

export default LikeButton;
