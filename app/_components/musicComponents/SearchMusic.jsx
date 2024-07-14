"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LoaderSmall from "../main/LoaderSmall";
import { MagnifyingGlass, Sparkle } from "@phosphor-icons/react/dist/ssr";

const SearchMusic = ({ hostname }) => {
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
          const res = await fetch(
            `${hostname}/api/v1/music?musicName=${input}`
          );
          const data = await res.json();
          setMinders(data?.data?.tracks || []);
          //   console.log(data);
        } catch (error) {
          console.error("Error fetching minders:");
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
      <div className="flex items-center gap-1 rounded-lg  bg-stone-100 w-80  border  pl-2">
        <MagnifyingGlass weight="bold" className="size-5 text-stone-500" />
        <input
          className="py-2 px-2   placeholder-stone-500 w-full  bg-stone-100  outline-none"
          placeholder="Search"
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

SearchMusic.displayName = "Search";

const SearchContent = React.forwardRef(
  ({ minders, loading, setShowSearchContent }, ref) => {
    const handleClick = () => {
      setShowSearchContent(false);
    };

    return (
      <div
        onClick={handleClick}
        ref={ref}
        className="absolute text-sm text-stone-600 overflow-scroll max-h-80 top-full left-0 w-80  bg-stone-50 p-1 mt-1 border  border-gray-300 rounded-md shadow-md"
      >
        {loading ? (
          <LoaderSmall />
        ) : (
          <ul className="flex flex-col gap-1">
            {minders.length > 0 ? (
              <p className="flex gap-1 items-center bg-gray-0 py-1 px-2 rounded-md">
                Results {minders.length}
              </p>
            ) : (
              ""
            )}
            {/* <Link
              className="flex gap-1  items-center bg-indigo-400 py-1 px-2 rounded-md text-white"
              href="/subscription"
            >
              <Sparkle weight="fill" />
              <li className="font-normal">Explore more on Somana.</li>
            </Link> */}

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
  //   const heading = minder.heading.substring(0, 50);
  return (
    <Link
      className="flex gap-2 items-center bg-gray-100   hover:bg-gray-200 py-1 px-2 rounded-md"
      href={`/music/${minder._id}`}
    >
      <div className="w-10 h-10">
        <img
          src={minder.featuredImage}
          className="w-full h-full aspect-square object-cover rounded-md"
        />
      </div>
      <div>
        <mark className="bg-transparent font-semibold ">
          {minder.musicName}
        </mark>
        {" - "}
        <mark className="bg-transparent font-semibold ">
          {minder.musicType}
        </mark>
      </div>
    </Link>
  );
};

SearchContent.displayName = "SearchContent";

export default SearchMusic;
