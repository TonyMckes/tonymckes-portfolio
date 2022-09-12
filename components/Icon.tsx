import Image, { ImageProps } from "next/future/image";

const iconsCollection = {
  CSS: "/logos/Css3.svg",
  Firebase: "/logos/Firebase.svg",
  Github: "/logos/Github.svg",
  HTML: "/logos/Html5.svg",
  Javascript: "/logos/Javascript.svg",
  LinkedIn: "/logos/Linkedin.svg",
  MariaDB: "/logos/Mariadb.svg",
  "Next.js": "/logos/Nextjs.svg",
  "Node.js": "/logos/Nodejs.svg",
  PostgreSQL: "/logos/Postgresql.svg",
  React: "/logos/React.svg",
  Sequelize: "/logos/Sequelize.svg",
  "Tailwind CSS": "/logos/Tailwindcss.svg",
  Telegram: "/logos/Telegram.svg",
  TonyMckes: "/logos/TonyMckes.svg",
  Twitter: "/logos/Twitter.svg",
  Typescript: "/logos/Typescript.svg",

  Menu: "/icons/HeroiconsSolidMenuAlt3.svg",
  "Open in new": "/icons/IcBaselineOpenInNew.svg",
  Close: "/icons/IonIosCloseCircleOutline.svg",
  Dark: "/icons/MaterialSymbolsDarkModeOutlineRounded.svg",
  Up: "/icons/MaterialSymbolsKeyboardArrowUpRounded.svg",
  Light: "/icons/MaterialSymbolsLightModeOutline.svg",
  Web: "/icons/MdiWeb.svg",
  Code: "/icons/PhCodeBold.svg",
} as const;

export interface IconsCollection {
  name: keyof typeof iconsCollection;
}
interface IconImageProps extends Omit<ImageProps, "src" | "alt"> {
  name: keyof typeof iconsCollection;
  size?: number;
  alt?: string;
}

function Icon({ alt, name, size, ...props }: IconImageProps) {
  return (
    <Image
      alt={alt || name}
      height={size || 24}
      src={iconsCollection[name]}
      width={size || 24}
      {...props}
    />
  );
}

export default Icon;
