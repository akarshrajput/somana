import Link from "next/link";
import React from "react";

const BaseButton = ({ href = "", children }) => {
  return (
    <Link
      href={href}
      className="flex w-fit items-center gap-1 bg-stone-100 py-1 px-2 rounded-md border"
    >
      {children}
    </Link>
  );
};

export default BaseButton;
