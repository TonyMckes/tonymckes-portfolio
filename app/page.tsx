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
      <section
        className="grid min-h-screen place-items-center overflow-hidden"
        id="home"
      >
      </section>

      {featuredProjects.length > 0 && (
        <Section id="projects" className="overflow-hidden">
          <div className="container">
            <Section.Title>Projects</Section.Title>
            <Section.Paragraph>
              Showcase of some of the projects I&apos;ve worked on
            </Section.Paragraph>
            <ul className="mb-20 space-y-8">
              {featuredProjects.map((project) => (
                <Project key={project.id} {...project} featured />
              ))}
            </ul>
          </div>

          <Section.SubTitle>There&apos;s more!</Section.SubTitle>
          <Section.Paragraph>
            Swipe right or left to see even more projects!
          </Section.Paragraph>
          <Carousel>
            {showcaseProjects.map((repo) => (
              <Project key={repo.id} {...repo} />
            ))}
          </Carousel>
        </Section>
      )}

      <Section id="skills" className="container">
        <Section.Title>Skills</Section.Title>
        <Section.Paragraph>
          Here are a few technologies I&apos;ve been working with recently.
        </Section.Paragraph>
        <ul className="grid grid-cols-3 gap-y-12 md:grid-cols-5 md:gap-x-4 md:gap-y-14">
          {skills.map((name) => (
            <Skill key={name} name={name} />
          ))}
        </ul>
      </Section>

      <Section id="contact" className="container">
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
