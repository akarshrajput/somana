import { Roboto_Slab } from "next/font/google";
import React from "react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="px-4">
      <h1>Welcome to Somana space</h1>
    </div>
  );
};

export default Hero;
