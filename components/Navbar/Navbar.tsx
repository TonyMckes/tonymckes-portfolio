"use client";

import Icon from "components/Icon";
import Logo from "components/Logo";
import TonyMckes from "components/TonyMckes";
import { tw } from "lib/helpers";
import personalInfo from "personalInfo.json";
import { useEffect, useState } from "react";
import type { PersonalInfoTypes } from "types/personal-info-types";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import ThemeToggler from "./ThemeToggler";

const { socialMedia, navLinks } = personalInfo as PersonalInfoTypes;
const socials = socialMedia.filter(({ name }) =>
  ["LinkedIn", "Github"].includes(name)
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const controlNavbar = () => {
    if (typeof window === "undefined") return;

    if (lastScrollY < window.pageYOffset && lastScrollY > 150) {
      if (menuOpen) return;

      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }

    if (window.pageYOffset > 25) setIsScrolled(true);
    else setIsScrolled(false);

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const headerStyles = showNavbar
    ? "shadow-none -translate-y-full "
    : isScrolled
    ? "shadow-md backdrop-blur bg-neutral-100/90 dark:bg-night-900/90"
    : "md:py-4 !duration-500 bg-transparent";

  return (
    <header
      className={`w-full md:p-1 fixed duration-300 z-10 top-0 ${headerStyles}`}
    >
      <nav className="flex justify-between mx-auto lg:container">
        <NavLink href="#">
          <TonyMckes />
        </NavLink>
        <div className="flex">
          <NavButton
            aria-label={menuOpen ? "Close sidebar" : "Open sidebar"}
            className="m-2 md:hidden"
            onClick={handleClick}
          >
            <Icon
              size="1.75rem"
              icon={menuOpen ? "ic:round-close" : "ic:round-menu"}
            />
          </NavButton>

          <div
            onClick={handleClick}
            className={tw(
              "backdrop-blur-sm",
              "bg-black/20",
              "fixed",
              "h-screen w-screen",
              "inset-0",
              "transition-[opacity,visibility] ease-linear duration-300",
              menuOpen
                ? "opacity-100 visible md:invisible"
                : "opacity-0 invisible"
            )}
          />

          <div
            className={tw(
              "bg-neutral-200 dark:bg-night-800 md:bg-transparent dark:md:bg-transparent",
              "border md:border-none border-black/25 dark:border-white/25",
              "divide-y divide-black/25 dark:divide-white/25 md:divide-y-0",
              "fixed md:static",
              "md:divide-x",
              "md:flex",
              "p-4 md:p-0",
              "right-6 top-14",
              "rounded-2xl",
              "shadow-lg md:shadow-none",
              "space-y-4 md:space-y-0",
              "transition-[transform,visibility] duration-300",
              "w-3/5 md:w-auto",
              menuOpen
                ? "translate-x-0"
                : "translate-x-[110%] md:translate-x-0 invisible md:visible"
            )}
          >
            {/* |> Page navigation*/}
            <nav>
              <ul className="h-full grid-flow-col space-y-5 md:space-y-0 md:grid auto-cols-fr md:mr-2">
                {navLinks.map(({ href, text }) => (
                  <li key={text}>
                    <NavLink href={href} className="w-full h-full">
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/* |> Social navigation*/}
            <nav>
              <ul className="flex h-full mt-4 md:mt-0">
                {socials.map(({ href, name }) => (
                  <li key={name}>
                    <NavLink rel="noreferrer" target="_blank" href={href}>
                      <Logo height="1.75rem" icon={name} />
                      <span className="sr-only">{name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggler />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
