import React from "react";

import PlayGroundLogo from "./PlaygroundLogo";
import PlayGroundHeaderNav from "./PlaygroundHeaderNav";

const PlayGroundHeader = () => {
  return (
    <div className="p-3 flex">
      <PlayGroundLogo />
      <PlayGroundHeaderNav />
    </div>
  );
};

export default PlayGroundHeader;
