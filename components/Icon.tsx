"use client";

import {
  Icon as IconComponent,
  iconExists,
  type IconProps,
} from "@iconify/react";

interface IconImageProps extends IconProps {
  exact?: boolean;
  size?: string | number;
}

function Icon({ exact, icon, size, ...props }: IconImageProps) {
  const logoExists = (iconName: string) => {
    if (!iconName) return null;
    const name = iconName.toLowerCase().replace(/\.| /g, "");

    if (iconExists(`logos:${name}-icon`)) {
      return `logos:${name}-icon`;
    }
    if (iconExists(`logos:${name}`)) {
      return `logos:${name}`;
    }
    return null;
  };

  const iconName = !exact ? logoExists(icon as string) : icon;
  if (!iconName) return null;

  return (
    <IconComponent
      aria-hidden
      role="img"
      icon={iconName}
      // title={`${name} logo`}
      height={size || "2rem"}
      width={size || "2rem"}
      {...props}
    />
  );
}

export default Icon;
