"use client";
import React, { useState } from "react";
import axios from "axios";

const AddComment = ({ session, hostname, blogId, authorId }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(
        `/api/v1/comments`,
        {
          content,
          blogId: blogId,
          author: authorId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess(true);
      setContent("");
    } catch (err) {
      setError(err.response?.data?.message || "Error creating comment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-comment w-full max-w-3xl mx-auto p-4 bg-white dark:bg-stone-800 rounded-md">
      {/* <h3 className="font-medium mb-4">Add a Comment</h3> */}
      <form onSubmit={handleSubmit} className="flex gap-4">
        <img className="size-10 rounded-full" src={`${session.user.photo}`} />
        <div className="w-full flex flex-col gap-2 border rounded-md p-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add your comment here..."
            className="outline-none resize-none rounded-md text-sm dark:bg-stone-700 placeholder:text-stone-800 dark:placeholder:text-stone-300 dark:border-stone-600"
            rows="3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-sm w-fit ml-auto p-2 rounded-md text-white transition-all duration-300 hover:bg-green-700 disabled:bg-blue-300`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">Comment added successfully!</p>
      )}
    </div>
  );
};

export default AddComment;
