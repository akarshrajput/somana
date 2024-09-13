import {
  CircleNotch,
  Compass,
  Cube,
  Dog,
  FlyingSaucer,
  Spinner,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Loader = () => {
  return (
    <div className="flex mt-10 dark:text-stone-50 justify-center w-full items-center">
      <span className="loading loading-bars loading-lg"></span>{" "}
    </div>
  );
};

export default Loader;
