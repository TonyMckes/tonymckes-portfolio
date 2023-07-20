import Animate from 'components/Animate'
import Blob from 'components/Blob'
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
        <div className="relative">
          <Blob className="-left-4 top-0 h-48 w-48 bg-purple-600 [animation-duration:5000ms] md:left-4 lg:h-80 lg:w-80" />
          <Blob className="right-10 top-10 h-44 w-44 bg-fuchsia-500 [animation-delay:1000ms] [animation-duration:3500ms] md:-top-4 md:right-0 md:h-60 md:w-60 lg:-right-10 lg:h-80 lg:w-80" />
          <Blob className="inset-x-0 -top-16 mx-auto h-48 w-48 bg-amber-600 [animation-duration:3500ms] [animation-delay:5000ms] md:-top-40 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          <h1 className="hero__title px-2 text-3xl font-light text-night-950 dark:text-night-50 md:text-5xl xl:text-6xl">
            <div className="isolate">Hello, I&apos;m</div>
            <div
              className="mb-4 mt-3 text-6xl font-normal md:text-7xl xl:text-8xl"
              translate="no"
            >
              Anthony Mackensen
            </div>
            <div>
              <span className="isolate">And I&apos;m a</span>{' '}
              <span
                className="font-medium text-night-500 dark:text-night-400 "
                translate="no"
              >
                Web Developer
              </span>
            </div>
          </h1>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <Section id="projects" className="overflow-hidden">
          <Section.Title>Projects</Section.Title>
          <Section.Paragraph>
            Showcase of some of the projects I&apos;ve worked on
          </Section.Paragraph>
          <ul className="projects container mb-20 space-y-8">
            {featuredProjects.map((project) => (
              <Animate
                className="animate-in duration-700 motion-safe:fade-in motion-safe:odd:slide-in-from-right-1/3 motion-safe:even:slide-in-from-left-1/3"
                key={project.id}
              >
                <Project {...project} featured />
              </Animate>
            ))}
          </ul>

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

      <Section id="skills">
        <Section.Title>Skills</Section.Title>
        <Section.Paragraph>
          Here are a few technologies I&apos;ve been working with recently.
        </Section.Paragraph>
        <ul className="container grid grid-cols-3 gap-y-12 md:grid-cols-5 md:gap-x-4 md:gap-y-14">
          {skills.map((name) => (
            <Animate key={name} className="animate-in fade-in duration-700">
              <Skill name={name} />
            </Animate>
          ))}
        </ul>
      </Section>

      <Section id="contact">
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
