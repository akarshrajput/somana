"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // import styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuill
        className="bg-stone-100 text-stone-800 rounded-lg overflow-hidden"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default QuillEditor;
