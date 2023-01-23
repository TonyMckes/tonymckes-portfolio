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
  return <h2 className="text-3xl font-semibold text-center">{text}</h2>;
}

export function SectionSubtitle({ children }: Pick<SectionProps, "children">) {
  return (
    <h3 className="mb-10 text-xl text-center text-neutral-600">{children}</h3>
  );
}

Section.Title = SectionTitle;
Section.Subtitle = SectionSubtitle;

export default Section;
