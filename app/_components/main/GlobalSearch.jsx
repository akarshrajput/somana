"use client";

import { useState } from "react";
import SearchBlogs from "../blogsComponent/SearchBlogs";
import SearchMusic from "../musicComponents/SearchMusic";
import {
  CaretCircleDown,
  CaretCircleUp,
  CaretUp,
} from "@phosphor-icons/react/dist/ssr";
import { CaretCircleDoubleDown } from "@phosphor-icons/react";

const GlobalSearch = () => {
  const [selectedService, setSelectedService] = useState("blogs");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setDropdownOpen(false);
  };

  const renderSearchComponent = () => {
    switch (selectedService) {
      case "blogs":
        return <SearchBlogs />;
      case "music":
        return <SearchMusic />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-stone-50 border text-sm flex items-center rounded-lg">
      <div className="relative">
        <button
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="bg-green-600 text-stone-50 px-1 pl-2 py-2 flex items-center outline-none p-1 w-20 rounded-l-md"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedService.charAt(0).toUpperCase() + selectedService.slice(1)}
          <CaretCircleUp
            weight="fill"
            className={`ml-auto duration-150 ${
              dropdownOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {dropdownOpen && (
          <div
            role="menu"
            aria-orientation="vertical"
            className="absolute border border-stone-200 text-center top-full overflow-hidden left-0 mt-2 bg-stone-100 shadow-lg w-full z-10 rounded-md"
          >
            <div
              role="menuitem"
              className="px-2 py-2 text-sm hover:bg-stone-200 cursor-pointer"
              onClick={() => handleServiceChange("blogs")}
            >
              Blogs
            </div>
            <p className="border-t border-stone-200"></p>
            <div
              role="menuitem"
              className="px-2 py-2 hover:bg-stone-200 cursor-pointer"
              onClick={() => handleServiceChange("music")}
            >
              Music
            </div>
            {/* Other services can be added here */}
            <p className="border-t border-stone-200"></p>

            <div className="px-2 py-2 hover:bg-stone-200 cursor-pointer">
              Videos
            </div>
            <p className="border-t border-stone-200"></p>
            <div className="px-2 py-2 hover:bg-stone-200 cursor-pointer">
              Podcasts
            </div>
            <p className="border-t border-stone-200"></p>
            <div className="px-2 py-2 hover:bg-stone-200 cursor-pointer">
              News
            </div>
          </div>
        )}
      </div>
      <div className="w-full">{renderSearchComponent()}</div>
    </div>
  );
};

export default GlobalSearch;
