import { Roboto_Slab } from "next/font/google";
import React from "react";
import HomePageNavigation from "../homePageComponents/HomePageNavigation";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="px-4">
      <HomePageNavigation />
    </div>
  );
};

export default Hero;
