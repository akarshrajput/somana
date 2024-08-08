"use client";
import React, { useState } from "react";
import axios from "axios";

const AddComment = ({ hostname, blogId, authorId }) => {
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
      const res = await axios.post(`${hostname}/api/v1/comments`, {
        content,
        blogId: blogId,
        author: authorId,
      });
      setSuccess(true);
      setContent("");
    } catch (err) {
      setError(err.response?.data?.message || "Error creating comment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-comment">
      <h3 className="font-medium mb-4">Add a Comment</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment here..."
          className="p-2 resize-none outline-none rounded-md bg-stone-800 text-white"
          rows="4"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 p-2 rounded-md text-white"
        >
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">Comment added successfully!</p>
      )}
    </div>
  );
};

export default AddComment;
