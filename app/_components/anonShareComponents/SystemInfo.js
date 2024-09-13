"use client";
import React, { useEffect, useState } from "react";

import { Info, Password } from "@phosphor-icons/react";
import { useLocationInfo } from "@/app/_context/LocationContext";
import LoaderSmall from "../main/LoaderSmall";

const SystemInfo = () => {
  const { ip, location, isLoading } = useLocationInfo();
  return (
    <div className="absolute bottom-0 text-sm left-0">
      <div className="flex gap-2 items-center border border-green-300 bg-green-100 rounded-md w-fit p-1 px-4 text-slate-800 m-2">
        <Info size={20} weight="bold" />
        <Password size={32} weight="bold" color="#15803d" />
        files are encrypted by pin.
      </div>
      <div className=" bg-red-100 border border-red-300 rounded-md w-fit p-2 px-4 text-slate-800 m-2">
        {isLoading ? (
          <>
            <LoaderSmall />
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <p>{ip}</p>
            <p>
              {location?.country}, {location?.city}
            </p>
            <div className="flex gap-2 items-center justify-self-end">
              <Info size={16} weight="bold" />
              <p>
                Your IP address will be shared along with your data for more
                protection.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemInfo;
