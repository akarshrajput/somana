import Link from "next/link";
import React from "react";

const CommonLinkButton = ({ className = "", href = "", children }) => {
  return (
    <Link
      href={href}
      className={`${className} text-sm px-1 hover:underline flex w-fit  text-gray-700 items-center gap-1`}
    >
      {children}
    </Link>
  );
};

export default CommonLinkButton;
