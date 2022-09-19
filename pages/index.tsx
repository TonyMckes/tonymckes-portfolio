import Contact from "components/Contact";
import { IconsCollection } from "components/Icon";
import { Project } from "components/Project";
import Section from "components/Section";
import Skill from "components/Skill";
import { GetServerSideProps } from "next";
import { getProjects } from "services/getProjects";
import { Projects } from "types/projects-types";

const skills: IconsCollection[] = [
  { name: "CSS" },
  { name: "Firebase" },
  { name: "Github" },
  { name: "HTML" },
  { name: "Javascript" },
  { name: "MariaDB" },
  { name: "Node.js" },
  { name: "React" },
  { name: "Sequelize" },
  { name: "Tailwind CSS" },
  { name: "Typescript" },
  { name: "Next.js" },
];
interface Socials extends IconsCollection {
  href: string;
}

const socials: Socials[] = [
  { name: "Github", href: "https://github.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in" },
  { name: "Telegram", href: "https://t.me" },
  { name: "Twitter", href: "https://twitter.com" },
];

export const getServerSideProps: GetServerSideProps = async () => {
  const { projects } = await getProjects();

  return { props: { projects } };
};

function Home({ projects }: Projects) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero__content">
          <h1 className="hero__title">
            <span>Hi, Im </span>Anthony Mackensen
          </h1>
          <h2 className="hero__subtitle">Web Developer</h2>
        </div>
      </section>

      {projects.length > 0 && (
        <Section id="projects">
          <Section.Title text="Projects" />
          <Section.Subtitle>
            A small showcase of some of my projects.
          </Section.Subtitle>
          <ul className="projects__list">
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </ul>
        </Section>
      )}

      <Section id="skills">
        <Section.Title text="Skills" />
        <Section.Subtitle>
          Here are a few technologies I’ve been working with recently
        </Section.Subtitle>
        <ul className="skills__list">
          {skills.map(({ name }) => (
            <Skill key={name} name={name} />
          ))}
        </ul>
      </Section>

      <Section id="contact">
        <Section.Title text="Get in touch" />
        <Section.Subtitle>
          You can leave me a message in any of the following platforms
        </Section.Subtitle>
        <p className="contact__email">
          <span className="contact__at">@</span>
          <span className="contact__username">tonymckes</span>
          <span className="contact__email-domain">@gmail.com</span>
        </p>
        <ul className="contact__list">
          {socials.map(({ name, href }) => (
            <Contact key={name} name={name} href={href} />
          ))}
        </ul>
      </Section>
    </>
  );
}

export default Home;
