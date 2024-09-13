import Link from "next/link";
import React from "react";

const BaseButton = ({ className = "", href = "", children }) => {
  return (
    <Link
      href={href}
      className={`${className} text-sm flex w-fit items-center gap-1`}
    >
      {children}
    </Link>
  );
};

export default BaseButton;
