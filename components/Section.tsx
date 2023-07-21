import 'server-only'

import { tw } from 'lib/helpers'
import type { ComponentProps } from 'react'
import Animate from './Animate'

function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className={tw('relative', className)} {...props}>
      <Animate
        aria-hidden
        className='after: after:absolute after:left-0 after:top-10 after:block after:h-1 after:w-full  after:bg-gradient-to-l after:from-night-500 after:opacity-0 after:content-[""] after:animate-in after:fade-out-50 after:slide-in-from-left-full after:[animation-duration:2000ms] dark:after:from-night-400 after:lg:top-14'
      />
      {children}
    </section>
  )
}

function SectionTitle({ children }: ComponentProps<'h2'>) {
  return (
    <h2 className="mx-auto mb-3 max-w-prose px-2 text-center text-4xl font-bold text-night-500 dark:text-night-400 lg:text-5xl">
      {children}
    </h2>
  )
}

function SectionSubTitle({ children }: ComponentProps<'h2'>) {
  return (
    <h3 className="mx-auto mb-3 max-w-prose px-2 text-center text-3xl font-bold text-night-500 dark:text-night-400 lg:text-4xl">
      {children}
    </h3>
  )
}

function SectionParagraph({ children }: ComponentProps<'p'>) {
  return (
    <p className="mx-auto mb-10 max-w-prose px-2 text-center text-xl font-semibold text-gray-600 dark:text-night-50 lg:text-2xl">
      {children}
    </p>
  )
}

Section.Title = SectionTitle
Section.SubTitle = SectionSubTitle
Section.Paragraph = SectionParagraph

export default Section
