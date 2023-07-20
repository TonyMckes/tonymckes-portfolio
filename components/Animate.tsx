'use client'

import { useEffect, useRef, useState } from 'react'

interface Props extends React.ComponentProps<'div'> {
  children?: React.ReactNode
}

function Animate({ children, className, ...props }: Props) {
  const [inViewport, setInViewport] = useState<boolean>(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          setInViewport(isIntersecting)
        }
      },
      { rootMargin: '50px' }
    )
    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [inViewport])

  return (
    <div
      className={`transition-none ${
        inViewport
          ? 'running before:running after:running'
          : 'paused before:paused after:paused'
      } ${className}`}
      ref={elementRef}
      {...props}
    >
      {children}
    </div>
  )
}

export default Animate
