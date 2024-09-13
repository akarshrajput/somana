"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Heart, ThumbsDown, ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import DisabledInfoButton from "../buttons/DisabledInfoButton";

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
          className="size-6 ease-out duration-300  text-black"
          weight="fill"
        />
      ) : (
        <ThumbsUp
          className="size-6 hover:scale-150 ease-out duration-300  text-black"
          weight="bold"
        />
      )}{" "}
      <div className="ml-2">
        <DisabledInfoButton>{likes.length} likes</DisabledInfoButton>
      </div>
    </button>
  );
};

export default LikeButton;
