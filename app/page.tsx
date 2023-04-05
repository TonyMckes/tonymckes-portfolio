import ContactsList from "components/ContactsList";
import { Project } from "components/Project";
import Section from "components/Section";
import Skill from "components/Skill";
import personalData from "personalInfo.json";
import { getFeaturedRepos } from "services/getProjects";
import type { PersonalInfoTypes } from "types/personal-info-types";

const { skills } = personalData as Pick<PersonalInfoTypes, "skills">;

async function Home() {
  const featuredProjects = await getFeaturedRepos();

  return (
    <main className="space-y-40">
      <section className="flex items-center justify-center h-screen" id="home">
        <h1 className="text-3xl md:text-5xl font-light mx-auto px-2">
          <div className="">Hello, I&apos;m</div>
          <div className="text-5xl md:text-7xl font-normal mb-4 mt-3">
            Anthony Mackensen
          </div>
          <div>
            And I&apos;m a
            <span className="text-primary-500 font-medium"> Web Developer</span>
          </div>
        </h1>
      </section>

      {featuredProjects.length > 0 && (
        <Section id="projects" className="max-w-container">
          <Section.Title>Projects</Section.Title>
          <Section.Paragraph>
            A small showcase of some of the projects I’ve worked on.
          </Section.Paragraph>
          <ul className="space-y-8 mb-20">
            {featuredProjects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </ul>
        </Section>
      )}

      <Section id="skills" className="max-w-container">
        <Section.Title>Skills</Section.Title>
        <Section.Paragraph>
          Here are a few technologies I’ve been working with recently
        </Section.Paragraph>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-16 md:grid-cols-4">
          {skills.map((name) => (
            <Skill key={name} name={name} />
          ))}
        </ul>
      </Section>

      <Section id="contact" className="max-w-container">
        <Section.Title>Get in touch</Section.Title>
        <Section.Paragraph>
          You can leave me a message in any of the following platforms
        </Section.Paragraph>
        <ContactsList />
      </Section>
    </main>
  );
}

export default Home;
