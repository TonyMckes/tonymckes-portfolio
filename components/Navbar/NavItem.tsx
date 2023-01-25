import Icon from "components/Icon";
import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from "react";

export interface BaseProps {
  icon?: boolean;
  children?: ReactNode;
  className?: string;
  name?: string;
}
export interface AnchorProps extends BaseProps {
  as?: "a";
  href: string;
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
      className={`rounded text-xl font-semibold p-2 my-1 relative flex bg-transparent border-none hover:bg-neutral-50 md:text-sm duration-300 md:hover:text-slate-400 ${
        className || ""
      }`}
      rel={rel}
      target={target}
      {...props}
    >
      {icon && name && (
        <Icon className="text-neutral-900 md:h-5 md:w-auto" icon={name} />
      )}
      {children}
      {<span className={icon ? "sr-only" : ""}>{name || text}</span>}
    </AsComponent>
  );

  if (as === "button") {
    return NavItemComponent;
  }

  return <a href={href}>{NavItemComponent}</a>;
}
export default NavItem;
