import { Spinner } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const LoaderSmall = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Spinner className="size-6 animate-spin" />
      </div>
    </div>
  );
};

export default LoaderSmall;
