import React from "react";

const UploadMusic = () => {
  return (
    <div>
      <form className="rounded-md overflow-hidden border-2 border-black">
        <div className="flex gap-1">
          <label>Song name</label>
          <input placeholder="Add Song name" className="border bg-stone-50" />
        </div>
      </form>
    </div>
  );
};

export default UploadMusic;
