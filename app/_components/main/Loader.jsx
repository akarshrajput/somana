import { Dog, Spinner } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Loader = () => {
  return (
    <div className="m-4 flex dark:text-stone-50 justify-center items-center">
      <Spinner className="size-8 animate-spin" />
    </div>
  );
};

export default Loader;
