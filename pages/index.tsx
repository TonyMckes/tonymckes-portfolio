import ContactsList from "components/ContactsList";
import { IconsCollection } from "components/Icon";
import { Project } from "components/Project";
import Section from "components/Section";
import Skill from "components/Skill";
import { GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async () => {
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
        <ContactsList />
      </Section>
    </>
  );
}

export default Home;
