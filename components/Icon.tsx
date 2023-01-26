import { Icon as IconComponent, IconifyIconProps } from "@iconify-icon/react";

type IconPropsWithoutRef = Omit<IconifyIconProps, "ref">;
interface IconProps extends Omit<IconifyIconProps, "ref" | "size"> {
  size?: number | string;
}

function Icon({ icon, size, height, width, ...props }: IconProps) {
  const iconAttributes: IconPropsWithoutRef = {
    "aria-hidden": true,
    icon,
    role: "img",
    style: {
      display: "inline-block",
      height: size || height,
      width: size || width,
    },
    height: size || height,
    width: size || width,
    ...props,
  };

  return <IconComponent {...iconAttributes} />;
}

export default Icon;
