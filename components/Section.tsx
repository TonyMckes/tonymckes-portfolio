import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  text: string;
  subtitle: string;
  children: ReactNode;
}

function Section({ id, children }: Pick<SectionProps, "id" | "children">) {
  return (
    <section className={styles.container} id={id}>
      {children}
    </section>
  );
}

export function SectionTitle({ text }: Pick<SectionProps, "text">) {
  return <h1 className={styles.title}>{text}</h1>;
}

export function SectionSubtitle({ children }: Pick<SectionProps, "children">) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}

Section.Title = SectionTitle;
Section.Subtitle = SectionSubtitle;

export default Section;
