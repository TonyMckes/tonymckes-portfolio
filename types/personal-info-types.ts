import { AnchorHTMLAttributes } from 'react'

export type PersonalEmail = string
interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  text: string
}

export interface PersonalInfoTypes {
  email: PersonalEmail
  socialMedia: Pick<AnchorProps, 'name' | 'href'>[]
  navLinks: Pick<AnchorProps, 'text' | 'href'>[]
  skills: string[]
}
