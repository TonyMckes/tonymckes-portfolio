'use client'

import Icon from 'components/SVG/Icon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()
  const systemColorSchema = !theme || theme === 'system'
  const colorSchema = systemColorSchema ? systemTheme : theme
  const isLight = colorSchema === 'light'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button type="button" className="nav-item underline-effect">
        <Icon
          className="animate-pulse"
          size="28px"
          icon="line-md:light-dark-loop"
        />
        <span className="sr-only">Loading theme setting</span>
      </button>
    )
  }

  const iconTheme = systemColorSchema
    ? 'line-md:light-dark-loop'
    : isLight
    ? 'ic:twotone-dark-mode'
    : 'ic:twotone-light-mode'

  const opositeColorTheme = isLight ? 'dark' : 'light'

  const switchTheme = () => {
    setTheme(opositeColorTheme)
  }

  return (
    <button
      type="button"
      className="nav-item underline-effect"
      onClick={switchTheme}
    >
      <Icon size="28px" icon={iconTheme} />
      <span className="sr-only">{`Change to ${opositeColorTheme} mode`}</span>
    </button>
  )
}

export default ThemeToggler
