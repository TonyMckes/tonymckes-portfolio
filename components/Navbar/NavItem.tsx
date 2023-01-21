import Icon, { IconsCollection } from "components/Icon";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from "react";
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
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

export interface ButtonProps extends BaseProps {
  as: "button";
  href?: never;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  target?: never;
  rel?: never;
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
  rel,
  target,
  ...props
}: Props) {
  const AsComponent = as || "a";

  const NavItemComponent = (
    <AsComponent
      className={`${styles.navLink} ${className || ""}`}
      rel={rel}
      target={target}
      {...props}
    >
      {icon && name && <Icon name={name} />}
      {children}
      {<span className={icon ? "sr-only" : ""}>{name || text}</span>}
    </AsComponent>
  );

  if (as === "button") {
    return NavItemComponent;
  }

  return <Link href={href} legacyBehavior>{NavItemComponent}</Link>;
}
export default NavItem;
