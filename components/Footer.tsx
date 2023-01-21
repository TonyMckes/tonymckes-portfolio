"use client";

import styles from "./Footer.module.css";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className={styles.container}>
      <a href="#home" className={styles.link}>
        <Icon aria-hidden name="Up" />
        Back to top
      </a>
    </footer>
  );
}

export default Footer;
