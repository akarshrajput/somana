"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LoaderSmall from "../main/LoaderSmall";
import { LinkBreak } from "@phosphor-icons/react/dist/ssr";

const SearchBlogs = () => {
  const [input, setInput] = useState("");
  const [showSearchContent, setShowSearchContent] = useState(false);
  const searchContentRef = useRef(null);
  const [minders, setMinders] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClickOutside = (event) => {
    if (
      searchContentRef.current &&
      !searchContentRef.current.contains(event.target)
    ) {
      setShowSearchContent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getMindersData = async () => {
      if (input.trim()) {
        setLoading(true);
        try {
          const res = await fetch(`/api/v1/blogs?heading=${input}&limit=10`);
          const data = await res.json();
          setMinders(data?.data?.blogs || []);
        } catch (error) {
          console.error("Error fetching minders:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setMinders([]);
      }
    };
    getMindersData();
  }, [input]);

  return (
    <div className="flex z-5 flex-col relative">
      <div className="flex  items-center gap-1 bg-stone-50 w-44 sm:w-80 rounded-full">
        <input
          className="py-1 px-2 text-sm placeholder-stone-500 w-full bg-stone-50 outline-none"
          placeholder="Search blogs, articles ..."
          onFocus={() => setShowSearchContent(true)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {showSearchContent && (
        <SearchContent
          loading={loading}
          minders={minders}
          ref={searchContentRef}
          setShowSearchContent={setShowSearchContent}
        />
      )}
    </div>
  );
};

SearchBlogs.displayName = "SearchBlogs";

const SearchContent = React.forwardRef(
  ({ minders, loading, setShowSearchContent }, ref) => {
    const handleClick = () => {
      setShowSearchContent(false);
    };

    return (
      <div
        onClick={handleClick}
        ref={ref}
        className="absolute text-sm border mt-2 rounded-lg dark:text-stone-50 overflow-scroll scrollbar-hide max-h-80 top-full left-0 w-44 sm:w-80 dark:bg-stone-800 bg-stone-100 p-1 dark:border-stone-700 shadow-md"
      >
        {loading ? (
          <LoaderSmall />
        ) : (
          <ul className="flex flex-col">
            {minders.length > 0 && (
              <p className="flex gap-1 items-center bg-gray-0 py-1  px-2">
                Results {minders.length}
              </p>
            )}

            {Array.isArray(minders) &&
              minders.map((minder) => (
                <SearchItem key={minder._id} minder={minder} />
              ))}
          </ul>
        )}
      </div>
    );
  }
);

const SearchItem = ({ minder }) => {
  const heading = minder.heading.substring(0, 50);
  return (
    <>
      <Link
        className="text-stone-50 items-center bg-stone-100 dark:hover:bg-stone-200 hover:bg-stone-200 py-1.5 px-2"
        href={`/blogs/${minder.slug}`}
      >
        <mark className="bg-transparent text-[13px]">{heading}</mark>
      </Link>
      <p className="border"></p>
    </>
  );
};

SearchContent.displayName = "SearchContent";

export default SearchBlogs;
