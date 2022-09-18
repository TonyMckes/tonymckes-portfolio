import Icon, { IconsCollection } from "components/Icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [themeColor, setThemeColor] = useState<string>("");

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
      <Link href="#">
        <a className={styles.link}>
          <Icon name="TonyMckes" width={68} />
        </a>
      </Link>

      <div className={styles.listsContainer}>
        <button
          onClick={handleClick}
          className={styles.button}
          aria-label={menuOpen ? "Close sidebar" : "Open sidebar"}
        >
          {menuOpen ? <Icon name="Close" /> : <Icon name="Menu" />}
        </button>

        <div
          className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}
        >
          <nav>
            <ul className={styles.navList}>
              {listItems.map((item) => (
                <li>
                  <NavLink key={item.label} {...item} />
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles.socials}>
            <button className={styles.toggler} aria-label="Toggle Dark Mode">
              {themeColor ? <Icon name="Dark" /> : <Icon name="Light" />}
            </button>

            <ul className={styles.list}>
              {socials.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}>
                    <a className={styles.link} target="_blank" rel="noreferrer">
                      <Icon name={name} />
                    </a>
                  </Link>
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
