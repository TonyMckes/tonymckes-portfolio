import { tw } from "lib/helpers";
import { ComponentPropsWithoutRef } from "react";

function NavButton({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
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
        "z-50",
        className || ""
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default NavButton;
