import Icon from "components/Icon";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavItem, { AnchorProps } from "./NavItem";

const ThemeToggler = dynamic(() => import("./ThemeToggler"), { ssr: false });

const socials: Pick<AnchorProps, "name" | "href">[] = [
  { name: "Github", href: "https://github.com/TonyMckes" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/TonyMckes" },
];

const listItems: Pick<AnchorProps, "text" | "href">[] = [
  { text: "Home", href: "#" },
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skills" },
  { text: "Contact me", href: "#contact" },
];

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
      <NavItem icon href="#" name="TonyMckes" />
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
          className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}
        >
          <nav>
            <ul className={styles.navList}>
              {listItems.map(({ href, text }) => (
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
          <nav className={styles.socialsNavList}>
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
