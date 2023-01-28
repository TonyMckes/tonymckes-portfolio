"use client";

import { useState } from "react";

const initialThemeColor = () => {
  const isServer = typeof window === "undefined";
  console.log({ isServer });
  if (isServer) return undefined;

  const isDarkTheme = document.documentElement.classList.contains("dark");

  return isDarkTheme ? "dark" : "light";
};

function useThemeToggler() {
  const [theme, setTheme] = useState<"dark" | "light" | undefined>(
    initialThemeColor
  );

  const inactiveTheme = theme === "light" ? "dark" : "light";

  return [{ theme, inactiveTheme }, setTheme] as const;
}

export default useThemeToggler;
