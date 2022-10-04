import Icon, { IconsCollection } from "components/Icon";
import Link from "next/link";
import styles from "./ContactsList.module.css";

interface Socials extends IconsCollection {
  href: string;
}

const socials: Socials[] = [
  { name: "Github", href: "https://github.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in" },
  { name: "Telegram", href: "https://t.me" },
  { name: "Twitter", href: "https://twitter.com" },
];

function ContactsList() {
  return (
    <>
      <ul className={styles.list}>
        {socials.map(({ name, href }) => (
          <li key={name}>
            <Link href={`${href}/TonyMckes`}>
              <a className={styles.link} target="_blank" rel="noreferrer">
                <Icon name={name} />
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.textContent}>Or write me an email</p>
      <div className={styles.email}>
        <span className={styles.at}>@</span>
        <a href="mailto:tonymckes@gmail.com">
          <span>tonymckes</span>
          <span className={styles.emailDomain}>@gmail.com</span>
        </a>
      </div>
    </>
  );
}

export default ContactsList;
