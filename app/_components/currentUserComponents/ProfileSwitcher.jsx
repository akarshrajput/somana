"use client"; // Enable client-side interactivity
import React, { useState } from "react";
import CurrentUserProfile from "./CurrentUserProfile";
import CurrentUserSettings from "./CurrentUserSettings";
import CurrentUserBlogSmall from "./CurrentUserBlogsSmall";

const ProfileSwitcher = ({ session }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <CurrentUserProfile session={session} />;
      case "settings":
        return <CurrentUserSettings session={session} />;
      case "details":
        return <div>Details</div>;
      case "data":
        return (
          <div>
            <CurrentUserBlogSmall />
          </div>
        );
      default:
        return <CurrentUserProfile session={session} />;
    }
  };

  return (
    <div>
      <div className="flex items-center w-fit text-sm">
        <button
          className={`px-4 py-2 ${
            activeTab === "profile" ? "bg-green-400" : "bg-stone-100"
          } hover:bg-green-400`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>

        <button
          className={`px-4 py-2 ${
            activeTab === "settings" ? "bg-green-400" : "bg-stone-100"
          } hover:bg-green-400`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>

        <button
          className={`px-4 py-2 ${
            activeTab === "details" ? "bg-green-400" : "bg-stone-100"
          } hover:bg-green-400`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "data" ? "bg-green-400" : "bg-stone-100"
          } hover:bg-green-400`}
          onClick={() => setActiveTab("data")}
        >
          Data
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProfileSwitcher;
