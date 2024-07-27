// components/ThemeToggleButton.js
"use client";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full dark:bg-stone-700 bg-stone-200"
    >
      {theme === "dark" ? (
        <Sun className="size-5" weight="bold" />
      ) : (
        <Moon className="text-stone-900 size-5" weight="bold" />
      )}
    </button>
  );
};

export default DarkModeButton;
