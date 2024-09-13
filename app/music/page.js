import React from "react";
import MusicNavigation from "../_components/musicComponents/MusicNavigation";
import TrendingSongs from "../_components/musicComponents/TrendingSongs";
import CommonRelatedSongs from "../_components/musicComponents/CommonRelatedSongs";
import Footer from "../_components/main/Footer";
import CommonSongs from "../_components/musicComponents/CommonSongs";

const hostname = process.env.HOSTNAME;

const Page = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="px-4 w-full sm:w-5/6 mt-2 dark:text-stone-200">
          <div className="flex flex-col gap-4">
            <TrendingSongs hostname={hostname} />
            <CommonSongs
              hostname={hostname}
              musicType="Funk"
              description="Funk Music"
            />
            <CommonSongs
              hostname={hostname}
              musicType="Rap"
              description="Rap Music"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
