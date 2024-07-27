"use client";
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
    <div>
      <Link href="/">
        {isDarkMode ? (
          <img src="/somana-dark.png" className="h-10 brightness-125" />
        ) : (
          <img src="/somana-light.png" className="h-10 brightness-125" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
