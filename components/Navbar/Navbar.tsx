import Icon from "components/Icon";
import dynamic from "next/dynamic";
import personalInfo from "personalInfo.json";
import { useEffect, useState } from "react";
import type { PersonalInfoTypes } from "types/personal-info-types";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

const ThemeToggler = dynamic(() => import("./ThemeToggler"), { ssr: false });

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
    ? styles.hidden
    : isScrolled
    ? styles.scrolled
    : "";

  return (
    <header className={`${styles.header} ${headerStyles}`}>
      <NavItem className={styles.logo} icon href="#" name="TonyMckes" />
      <div className={styles.listsContainer}>
        <NavItem
          icon
          as="button"
          text={menuOpen ? "Close sidebar" : "Open sidebar"}
          aria-label={menuOpen ? "Close sidebar" : "Open sidebar"}
          onClick={handleClick}
          className={styles.button}
        >
          {menuOpen ? <Icon name="Close" /> : <Icon name="Menu" />}
        </NavItem>
        <div
          onClick={handleClick}
          className={`${styles.background} ${
            menuOpen ? styles.backgroundOpen : ""
          }`}
        ></div>
        <div
          className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}
        >
          <nav>
            <ul className={styles.navList}>
              {navLinks.map(({ href, text }) => (
                <li key={text}>
                  <NavItem
                    href={href}
                    text={text}
                    className="underlineEffect"
                  />
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles.socials}>
            <ThemeToggler />
            <ul className={styles.socialsNavList}>
              {socials.map(({ href, name }) => (
                <li key={name}>
                  <NavItem
                    rel="noreferrer"
                    target="_blank"
                    icon
                    href={href}
                    name={name}
                    className="underlineEffect"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
