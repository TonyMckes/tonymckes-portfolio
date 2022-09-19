import Icon from "components/Icon";
import { useState } from "react";
import NavItem from "./NavItem";

const initialThemeColor = () => {
  if (window === undefined) return "light";

  const savedTheme = localStorage.getItem("theme-color") ?? "light";
  document.documentElement.dataset.theme = savedTheme;

  return savedTheme;
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
      {activeTheme === "light" ? <Icon name="Dark" /> : <Icon name="Light" />}
    </NavItem>
  );
}

export default ThemeToggler;
