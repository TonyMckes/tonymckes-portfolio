import { ComponentPropsWithoutRef } from 'react'

function NavButton({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={`nav-item underline-effect ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default NavButton
