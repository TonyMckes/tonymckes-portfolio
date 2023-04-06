import { ComponentPropsWithoutRef } from 'react'

function NavLink({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'a'>) {
  return (
    <a className={`nav-item underline-effect ${className || ''}`} {...props}>
      {children}
    </a>
  )
}
export default NavLink
