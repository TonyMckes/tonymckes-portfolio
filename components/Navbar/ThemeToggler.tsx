"use client";

import Icon from "components/Icon";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import useThemeToggler from "./useThemeToggler";

function ThemeToggler() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [{ inactiveTheme, theme }, setTheme] = useThemeToggler();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme(inactiveTheme);

    document.documentElement.classList.toggle("dark");

    if (inactiveTheme) {
      localStorage.setItem("theme-color", inactiveTheme);
    } else {
      localStorage.removeItem("theme-color");
    }
  };

  if (!mounted) {
    return (
      <NavButton>
        <Icon
          className="animate-pulse"
          size="28"
          icon="line-md:light-dark-loop"
        />
        <span className="sr-only">Toggle the theme color</span>
      </NavButton>
    );
  }

  const iconTheme =
    theme === "dark" ? "ic:twotone-light-mode" : "ic:twotone-dark-mode";

  return (
    <NavButton onClick={switchTheme}>
      <Icon size="28" icon={iconTheme} />
      <span className="sr-only">Change to {inactiveTheme} mode</span>
    </NavButton>
  );
}

export default ThemeToggler;
