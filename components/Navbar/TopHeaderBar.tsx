'use client'

import Icon from 'components/SVG/Icon'
import TonyMckes from 'components/SVG/TonyMckes'
import { tw } from 'lib/helpers'
import { ReactNode, useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'

function TopHeaderBar({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(false)

  const controlNavbar = () => {
    if (typeof window === 'undefined') return

    if (lastScrollY < window.pageYOffset && lastScrollY > 150) {
      if (menuOpen) return

      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }

    if (window.pageYOffset > 25) setIsScrolled(true)
    else setIsScrolled(false)

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  })

  useEffect(() => {
    if (window !== undefined) controlNavbar()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  const headerStyles = showNavbar
    ? 'shadow-none -translate-y-full'
    : isScrolled
    ? `shadow-md dark:shadow-night-900 ${menuOpen? '' : 'backdrop-blur'} `
    : 'md:py-4 duration-500 bg-transparent dark:bg-transparent'

  return (
    <header
      className={tw(
        'fixed top-0 z-50 w-full bg-neutral-100/80 dark:bg-night-950/80 md:p-1',
        headerStyles,
        menuOpen ? '' : 'duration-300'
      )}
    >
      <div className="mx-auto flex max-w-screen-xl justify-between">
        <nav className="flex items-center">
          <a
            className="nav-item underline-effect"
            aria-label="TonyMckes home page"
            href="/"
          >
            <TonyMckes />
          </a>
        </nav>

        <div className="flex">
          <button
            type="button"
            aria-label={menuOpen ? 'Close sidebar' : 'Open sidebar'}
            className="nav-item underline-effect z-50 m-2 md:hidden"
            onClick={handleClick}
          >
            <Icon
              size="28px"
              icon={menuOpen ? 'ic:round-close' : 'ic:round-menu'}
            />
          </button>

          {/* Blurred Background */}
          <div
            onClick={handleClick}
            className={tw(
              'backdrop-blur-sm transition-none',
              'bg-black/20',
              'fixed',
              'h-screen w-screen',
              'inset-0',
              'transition-[opacity,visibility]',
              menuOpen
                ? 'visible opacity-100 md:invisible'
                : 'invisible opacity-0'
            )}
          />

          {/* Mobile Nav Menu */}
          <div
            className={tw(
              'bg-neutral-200 dark:bg-night-800 md:bg-transparent dark:md:bg-transparent',
              'border border-black/10 dark:border-white/20 md:border-none',
              'divide-y divide-black/10 dark:divide-white/20 md:divide-y-0',
              'fixed md:static',
              'md:divide-x',
              'md:flex',
              'p-4 md:p-0',
              'right-6 top-14',
              'rounded-2xl',
              'shadow-lg md:shadow-none',
              'space-y-2 md:space-y-0',
              'w-3/5 md:w-auto',
              menuOpen ? '' : 'invisible md:visible'
            )}
          >
            {/* Navigation links */}
            {children}

            <div className="before:mx-2 before:text-sm before:text-night-500 before:content-['Dark/Light_Toggler'] before:dark:text-night-400 md:px-2 md:before:hidden">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopHeaderBar
