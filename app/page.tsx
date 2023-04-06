import Carousel from 'components/Carousel'
import ContactsList from 'components/ContactsList'
import { Project } from 'components/Project'
import Section from 'components/Section'
import Skill from 'components/Skill'
import personalData from 'personalInfo.json'
import { getFeaturedRepos, getShowcaseRepos } from 'services/getProjects'
import type { PersonalInfoTypes } from 'types/personal-info-types'

const { skills } = personalData as Pick<PersonalInfoTypes, 'skills'>

async function Home() {
  const [featuredProjects, showcaseProjects] = await Promise.all([
    await getFeaturedRepos(),
    await getShowcaseRepos(),
  ])

  return (
    <main className="space-y-40">
      <section className=" flex h-screen items-center justify-center" id="home">
        <h1 className="mx-auto px-2 text-3xl font-light md:text-5xl">
          <div className="">Hello, I&apos;m</div>
          <div className="mb-4 mt-3 text-5xl font-normal md:text-7xl">
            Anthony Mackensen
          </div>
          <div>
            And I&apos;m a
            <span className="font-medium text-primary-500"> Web Developer</span>
          </div>
        </h1>
      </section>

      {featuredProjects.length > 0 && (
        <Section id="projects">
          <div className="max-w-container">
            <Section.Title>Projects</Section.Title>
            <Section.Paragraph>
              Showcase of some of the projects I&apos;ve worked on
            </Section.Paragraph>
            <ul className="mb-20 space-y-8">
              {featuredProjects.map((project) => (
                <Project key={project.id} {...project} />
              ))}
            </ul>
          </div>

          <Section.Paragraph>
            Swipe right or left to see even more projects!
          </Section.Paragraph>
          <Carousel repositories={showcaseProjects} />
        </Section>
      )}

      <Section id="skills" className="max-w-container">
        <Section.Title>Skills</Section.Title>
        <Section.Paragraph>
          Here are a few technologies I&apos;ve been working with recently.
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
  )
}

export default Home
