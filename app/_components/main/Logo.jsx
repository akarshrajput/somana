"use client";
import { Circle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeClass);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const darkModeClass =
            document.documentElement.classList.contains("dark");
          setIsDarkMode(darkModeClass);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);
  return (
    <Link href="/">
      <div className="z-40">
        <img src="/image.png" className="h-8 brightness-125" />

        {/* <div className="flex items-center gap-2 py-1 text-2xl text-stone-200">
          <p className="font-medium">Somana</p> */}
        {/* <Circle weight="fill" className="animate-ping size-3"/> */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default Logo;
