'use client'

import Icon from 'components/Icon'
import { useTheme } from 'next-themes'
import NavButton from './NavButton'

const ThemeToggler = () => {
  const { theme, systemTheme, setTheme } = useTheme()
  const isLight = theme === 'light' || systemTheme === 'light'

  const iconTheme =
    !theme || theme === 'system'
      ? 'line-md:light-dark-loop'
      : isLight
      ? 'ic:twotone-dark-mode'
      : 'ic:twotone-light-mode'

  const opositeColorTheme = isLight ? 'dark' : 'light'

  const switchTheme = () => {
    setTheme(opositeColorTheme)
  }

  if (!theme) {
    return (
      <NavButton>
        <Icon
          className="animate-pulse"
          size="28px"
          icon="line-md:light-dark-loop"
        />
        <span className="sr-only">Loading theme setting</span>
      </NavButton>
    )
  }

  return (
    <NavButton onClick={switchTheme}>
      <Icon size="28px" icon={iconTheme} />
      <span className="sr-only">{`Change to ${opositeColorTheme} mode`}</span>
    </NavButton>
  )
}

export default ThemeToggler
