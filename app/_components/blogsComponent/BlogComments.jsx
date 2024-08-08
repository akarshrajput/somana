"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogComments = ({ hostname, blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogComments = async () => {
    try {
      const res = await axios.get(
        `${hostname}/api/v1/comments?blogId=${blogId}&limit=5`,
        {
          cache: "no-store",
        }
      );
      setComments(res.data.data.comments);
      setLoading(false);
      console.log(res);
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
    <div>
      <h2 className="font-medium mb-4">Comments</h2>
      <div className="flex flex-col gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={comment.author.photo} className="size-8 rounded-full" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm">{comment.author.name}</p>
        <p className="bg-stone-800 p-1 px-2 rounded-md">{comment.content}</p>
      </div>
    </div>
  );
};

export default BlogComments;
