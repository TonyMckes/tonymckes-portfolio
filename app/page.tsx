import ContactsList from "components/ContactsList";
import { Project } from "components/Project";
import Section from "components/Section";
import Skill from "components/Skill";
import personalData from "personalInfo.json";
import { getProjects } from "services/getProjects";
import type { PersonalInfoTypes } from "types/personal-info-types";

const { skills } = personalData as Pick<PersonalInfoTypes, "skills">;

async function Home() {
  const { projects } = await getProjects();

  return (
    <main className="space-y-20">
      <section className="flex items-center justify-center h-screen" id="home">
        <div className="space-y-8 text-6xl font-light">
          <h1>
            <span className="text-6xl">
              Hi, Im <br />
            </span>
            Anthony Mackensen
          </h1>
          <h2 className="text-primary-500">Web Developer</h2>
        </div>
      </section>

      {projects.length > 0 && (
        <Section id="projects">
          <Section.Title text="Projects" />
          <Section.Subtitle>
            A small showcase of some of my projects.
          </Section.Subtitle>
          <ul className="space-y-8">
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
        <ul className="grid grid-cols-3 gap-x-4 gap-y-16 lg:grid-cols-4">
          {skills.map((name) => (
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
    </main>
  );
}

export default Home;
