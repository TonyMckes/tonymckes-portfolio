'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState, type ReactNode } from 'react'

function ClientThemeProvider({ children }: { children: ReactNode }) {
  const [isServer, setIsServer] = useState(false)

  useEffect(() => {
    setIsServer(true)
  }, [])

  if (!isServer) {
    return <>{children}</>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ClientThemeProvider
