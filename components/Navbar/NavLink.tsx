import { tw } from "lib/helpers";
import { ComponentPropsWithoutRef } from "react";

function NavLink({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={tw(
        "bg-transparent hover:bg-neutral-50",
        "border-none",
        "duration-300 transition-color",
        "font-semibold",
        "md:flex items-center justify-center",
        "md:hover:text-slate-400",
        "p-2",
        "relative",
        "rounded",
        "text-xl md:text-sm",
        "underlineEffect",
        "whitespace-nowrap",
        className || ""
      )}
      {...props}
    >
      {children}
    </a>
  );
}
export default NavLink;
