import Icon, { IconsCollection } from "components/Icon";
import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { Url } from "url";
import styles from "./NavItem.module.css";

export interface BaseProps extends Partial<IconsCollection> {
  icon?: boolean;
  children?: ReactNode;
  className?: string;
}
export interface AnchorProps extends BaseProps {
  as?: "a";
  href: Url | string;
  text?: string;
}

export interface ButtonProps extends BaseProps {
  as: "button";
  href?: never;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
type Props = AnchorProps | ButtonProps;

function NavItem({
  as,
  children,
  href,
  icon,
  name,
  text,
  className,
  ...props
}: Props) {
  const AsComponent = as || "a";

  const NavItemComponent = (
    <AsComponent className={`${styles.navLink} ${className || ""}`} {...props}>
      {icon && name && <Icon name={name} />}
      {children}
      {<span className={icon ? "sr-only" : ""}>{name || text}</span>}
    </AsComponent>
  );

  if (as === "button") {
    return NavItemComponent;
  }

  return <Link href={href}>{NavItemComponent}</Link>;
}

export default NavItem;
