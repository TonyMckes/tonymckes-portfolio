import { ComponentProps } from "react";

function Section({ children, ...props }: ComponentProps<"section">) {
  return <section {...props}>{children}</section>;
}

function SectionTitle({ children }: ComponentProps<"h2">) {
  return <h2 className="mb-3 text-4xl font-bold text-center">{children}</h2>;
}

function SectionParagraph({ children }: ComponentProps<"p">) {
  return (
    <p className="mb-10 text-2xl font-semibold text-center text-primary-700 dark:text-primary-300">
      {children}
    </p>
  );
}

Section.Title = SectionTitle;
Section.Paragraph = SectionParagraph;

export default Section;
