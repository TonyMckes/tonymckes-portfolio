import { AnchorProps } from "components/Navbar/NavItem";

export type PersonalEmail = string;

export interface PersonalInfoTypes {
  email: PersonalEmail;
  socialMedia: Pick<Required<AnchorProps>, "name" | "href">[];
  navLinks: Pick<AnchorProps, "text" | "href">[];
  skills: string[];
}
