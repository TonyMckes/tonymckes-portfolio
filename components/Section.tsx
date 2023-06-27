import { ComponentProps } from 'react'

function Section({ children, ...props }: ComponentProps<'section'>) {
  return <section {...props}>{children}</section>
}

function SectionTitle({ children }: ComponentProps<'h2'>) {
  return (
    <h2 className="mb-3 text-center text-5xl font-bold text-primary-700 dark:invert">
      {children}
    </h2>
  )
}

function SectionSubTitle({ children }: ComponentProps<'h2'>) {
  return (
    <h3 className="mb-3 text-center text-4xl font-bold text-primary-700 dark:invert">
      {children}
    </h3>
  )
}

function SectionParagraph({ children }: ComponentProps<'p'>) {
  return <p className="mb-10 text-center text-2xl font-semibold">{children}</p>
}

Section.Title = SectionTitle
Section.SubTitle = SectionSubTitle
Section.Paragraph = SectionParagraph

export default Section
