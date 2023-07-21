'use client'

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from 'react'

interface Props<T extends ElementType> {
  children?: React.ReactNode
  as?: T
}

function Animate<T extends ElementType>({
  as,
  children,
  className,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
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

  const Component = as || 'div'

  return (
    <Component
      className={`transition-none ${
        inViewport
          ? 'running before:running after:running'
          : 'paused before:paused after:paused'
      } ${className}`}
      ref={elementRef}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Animate
