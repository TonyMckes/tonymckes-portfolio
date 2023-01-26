"use client";

import Icon from "components/Icon";
import { useState } from "react";
import NavButton from "./NavButton";

const initialThemeColor = () => {
  if (window === undefined) return "light";

  const THEME_COLOR = localStorage.getItem("theme-color");
  const OS_COLOR_SCHEME = window.matchMedia("(prefers-color-scheme: dark)");

  if (THEME_COLOR === "dark" || (!THEME_COLOR && OS_COLOR_SCHEME.matches)) {
    document.documentElement.dataset.theme = "dark";
    return "dark";
  }

  return "light";
};

function ThemeToggler() {
  const [activeTheme, setActiveTheme] = useState<string>(initialThemeColor);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const setTheme = () => {
    setActiveTheme(inactiveTheme);

    if (window === undefined) return;

    document.documentElement.dataset.theme = inactiveTheme;
    localStorage.setItem("theme-color", inactiveTheme);
  };

  return (
    <NavButton onClick={setTheme}>
      <Icon
        size="1.75rem"
        icon={
          activeTheme === "light"
            ? "ic:twotone-dark-mode"
            : "ic:twotone-light-mode"
        }
      />
      <span className="sr-only">Change to {inactiveTheme} mode</span>
    </NavButton>
  );
}

export default ThemeToggler;
