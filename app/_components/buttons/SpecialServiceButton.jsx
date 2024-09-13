import Link from "next/link";
import React from "react";

const SpecialServiceButton = ({ className = "", href = "", children }) => {
  return (
    <Link
      href={href}
      className={`${className} flex hover:underline underline-offset-2 text-sm w-fit items-center gap-1 py-0.5 px-1 rounded-md`}
    >
      {children}
    </Link>
  );
};

export default SpecialServiceButton;
