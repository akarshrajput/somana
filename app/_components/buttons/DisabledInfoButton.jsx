import React from "react";

const DisabledInfoButton = ({ className = "text-sm", children }) => {
  return (
    <div
      className={`${className}  px-1 w-fit rounded-md flex text-stone-600 items-center gap-2`}
    >
      {children}
    </div>
  );
};

export default DisabledInfoButton;
