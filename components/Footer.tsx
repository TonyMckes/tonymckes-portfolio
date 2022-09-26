import Link from "next/link";
import styles from "./Footer.module.css";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="#home">
        <a className={styles.link}>
          <Icon aria-hidden name="Up" />
          Back to top
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
