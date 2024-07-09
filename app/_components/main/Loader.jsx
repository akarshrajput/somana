import { Dog } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Loader = () => {
  return (
    <div className="m-4 flex justify-center items-center">
      <Dog className="size-8 animate-bounce" />
    </div>
  );
};

export default Loader;
