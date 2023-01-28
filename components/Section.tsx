import { ReactNode } from "react";

interface SectionProps {
  id: string;
  text: string;
  subtitle: string;
  children: ReactNode;
}

function Section({ id, children }: Pick<SectionProps, "id" | "children">) {
  return (
    <section className="w-11/12 mx-auto lg:w-2/3" id={id}>
      {children}
    </section>
  );
}

export function SectionTitle({ text }: Pick<SectionProps, "text">) {
  return <h2 className="mb-3 text-4xl font-bold text-center">{text}</h2>;
}

export function SectionParagraph({ children }: Pick<SectionProps, "children">) {
  return (
    <p className="mb-20 text-2xl font-semibold text-center text-primary-700 dark:text-primary-300">
      {children}
    </p>
  );
}

Section.Title = SectionTitle;
Section.Paragraph = SectionParagraph;

export default Section;
