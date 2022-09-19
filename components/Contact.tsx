import Link, { LinkProps } from "next/link";
import styles from "./Contact.module.css";
import Icon, { IconsCollection } from "./Icon";

interface ContactProps extends LinkProps, IconsCollection {}

function Contact({ name, href = "#", ...props }: ContactProps) {
  return (
    <li>
      <Link href={`${href}/TonyMckes`} {...props}>
        <a className={styles.link} target="_blank" rel="noreferrer">
          <Icon name={name} />
          {name}
        </a>
      </Link>
    </li>
  );
}

export default Contact;
