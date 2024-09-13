"use client";
import { Warning } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import ReturnBack from "../buttons/ReturnBack";
import ReturnHome from "../buttons/ReturnHome";

const PageNotFound = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Warning weight="bold" className="size-6" />
      <p>404 Not found</p>
      <p>{pathname}</p>
      <div className="flex items-center gap-2">
        <ReturnHome />
        <ReturnBack />
      </div>
    </div>
  );
};

export default PageNotFound;
