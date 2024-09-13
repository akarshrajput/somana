"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "@phosphor-icons/react";

const BlogComments = ({ hostname, blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogComments = async () => {
    try {
      const res = await axios.get(`/api/v1/comments?blogId=${blogId}&limit=5`, {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      setComments(res.data.data.comments);
      setLoading(false);
    } catch (err) {
      setError(err.message || "An error occurred while fetching comments.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogComments();
  }, [blogId]);

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white dark:bg-stone-800 rounded-md shadow-sm">
      <h2 className="flex items-center gap-2 font-medium mb-4 text-md text-stone-700 dark:text-stone-200">
        Comments <ArrowRight />
      </h2>
      <div className="flex flex-col gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))
        ) : (
          <p className="text-stone-600 dark:text-stone-400">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div className="flex gap-4 p-2 bg-stone-50 dark:bg-stone-700 rounded-md">
      <div>
        <img
          src={comment.author.photo}
          className="size-10 rounded-full object-cover"
          alt={`${comment.author.name}'s profile`}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
          {comment.author.name}
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
          {comment.content}
        </p>
      </div>
    </div>
  );
};

export default BlogComments;
