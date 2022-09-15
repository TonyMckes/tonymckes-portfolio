import Icon, { IconsCollection } from "components/Icon";
import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps extends IconsCollection {
  href: string;
  icon?: boolean;
}

function NavLink({ href, name, icon }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className={`${styles.navLink} swift`}>
        {icon && <Icon name={name} />}
        {<span className={icon ? "sr-only" : ""}>{name}</span>}
      </a>
    </Link>
  );
}

export default NavLink;
