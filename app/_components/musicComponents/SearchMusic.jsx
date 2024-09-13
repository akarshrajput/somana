"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LoaderSmall from "../main/LoaderSmall";
import { MagnifyingGlass, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useMusicPlayer } from "@/app/_context/MusicPlayerContext";

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
          const res = await fetch(`/api/v1/music?musicName=${input}&limit=10`);
          const data = await res.json();

          setMinders(data?.data?.tracks || []);
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
      <div className="flex text-stone-50 items-center gap-1 rounded-lg  px-1  bg-stone-800  w-80  border border-stone-700 pl-2">
        {/* <MagnifyingGlass weight="bold" className="size-5 text-stone-50" /> */}
        <input
          className="py-1 px-2 placeholder-stone-200 w-full  bg-stone-800  outline-none"
          placeholder="Search music, tracks ..."
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
        className="absolute text-sm dark:text-stone-50  overflow-scroll max-h-80 top-full left-0 w-80  dark:bg-stone-800 border-stone-950 bg-stone-800 p-1 mt-1 border  dark:border-stone-700 rounded-md shadow-md"
      >
        {loading ? (
          <LoaderSmall className="text-stone-50" />
        ) : (
          <ul className="flex flex-col">
            {minders.length > 0 ? (
              <p className="flex gap-1 items-center bg-gray-0 py-1 text-stone-100 px-2">
                Results {minders.length}
              </p>
            ) : (
              ""
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
  const { setTrack } = useMusicPlayer(); // Call the hook to get the context values

  function handlePlay() {
    setTrack(minder); // Send the entire track object to the context
  }
  return (
    <>
      <div
        onClick={handlePlay}
        className="flex items-center gap-2 cursor-pointer p-1 text-sm text-stone-300"
      >
        <img src={`${minder.featuredImage}`} className="size-8 rounded-sm" />
        <div className="flex flex-col">
          <p className="font-medium">{minder.musicName}</p>
          <p>{minder.credits}</p>
        </div>
      </div>

      <p className="border border-stone-950"></p>
    </>
  );
};

SearchContent.displayName = "SearchContent";

export default SearchMusic;
