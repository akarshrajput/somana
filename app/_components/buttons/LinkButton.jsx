import Link from "next/link";
import React from "react";

const LinkButton = ({ href = "", children }) => {
  return (
    <Link
      href={href}
      className="flex hover:underline hover:text-blue-600 text-sm w-fit items-center gap-1 px-2"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
