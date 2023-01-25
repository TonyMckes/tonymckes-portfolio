"use client";

import Icon from "components/Icon";
import { useState } from "react";
import NavItem from "./NavItem";

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
    <NavItem
      icon
      as="button"
      text={`Change to ${inactiveTheme} mode`}
      onClick={setTheme}
      className="underlineEffect"
    >
      {activeTheme === "light" ? <Icon className='w-auto h-5' exact icon="ic:twotone-dark-mode" /> : <Icon className='w-auto h-5' exact icon="ic:twotone-light-mode" />}
    </NavItem>
  );
}

export default ThemeToggler;
