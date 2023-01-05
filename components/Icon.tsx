import CSS from "public/logos/Css3.svg";
import Firebase from "public/logos/Firebase.svg";
import Github from "public/logos/Github.svg";
import HTML from "public/logos/Html5.svg";
import Javascript from "public/logos/Javascript.svg";
import LinkedIn from "public/logos/Linkedin.svg";
import MariaDB from "public/logos/Mariadb.svg";
import Nextjs from "public/logos/Nextjs.svg";
import Nodejs from "public/logos/Nodejs.svg";
import PostgreSQL from "public/logos/Postgresql.svg";
import Reactjs from "public/logos/React.svg";
import Sequelize from "public/logos/Sequelize.svg";
import TailwindCSS from "public/logos/Tailwindcss.svg";
import Telegram from "public/logos/Telegram.svg";
import TonyMckes from "public/logos/TonyMckes.svg";
import Twitter from "public/logos/Twitter.svg";
import Typescript from "public/logos/Typescript.svg";

import Menu from "public/icons/HeroiconsSolidMenuAlt3.svg";
import OpenInNew from "public/icons/IcBaselineOpenInNew.svg";
import Close from "public/icons/IonIosCloseCircleOutline.svg";
import Dark from "public/icons/MaterialSymbolsDarkModeOutlineRounded.svg";
import Up from "public/icons/MaterialSymbolsKeyboardArrowUpRounded.svg";
import Light from "public/icons/MaterialSymbolsLightModeOutline.svg";
import Web from "public/icons/MdiWeb.svg";
import Code from "public/icons/PhCodeBold.svg";
import { SVGProps } from "react";

const iconsCollection = {
  CSS: CSS,
  Firebase: Firebase,
  Github: Github,
  HTML: HTML,
  Javascript: Javascript,
  LinkedIn: LinkedIn,
  MariaDB: MariaDB,
  "Next.js": Nextjs,
  "Node.js": Nodejs,
  PostgreSQL: PostgreSQL,
  React: Reactjs,
  Sequelize: Sequelize,
  "Tailwind CSS": TailwindCSS,
  Telegram: Telegram,
  TonyMckes: TonyMckes,
  Twitter: Twitter,
  Typescript: Typescript,

  Menu: Menu,
  "Open in New": OpenInNew,
  Close: Close,
  Dark: Dark,
  Up: Up,
  Light: Light,
  Web: Web,
  Code: Code,
} as const;

export interface IconsCollection {
  name: keyof typeof iconsCollection;
}
interface IconImageProps
  extends Omit<SVGProps<SVGSVGElement>, "name" | "role">,
    IconsCollection {
  size?: string | number;
}

function Icon({ name, size, ...props }: IconImageProps) {
  const DynamicIcon = iconsCollection[name];

  return (
    <DynamicIcon
      role="img"
      title={`${name} logo`}
      height={size || "2rem"}
      width={size || "2rem"}
      {...props}
    />
  );
}

export default Icon;
