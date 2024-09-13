import Link from "next/link";
import React from "react";

const SpecialButton = ({ className = "", href = "", children }) => {
  return (
    <Link
      href={href}
      className={`${className} flex w-fit items-center gap-1 py-1 px-2 rounded-md`}
    >
      {children}
    </Link>
  );
};

export default SpecialButton;
