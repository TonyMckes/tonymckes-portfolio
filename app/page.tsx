import Animate from 'components/Animate'
import Carousel from 'components/Carousel'
import ContactsList from 'components/ContactsList'
import { ProjectCard } from 'components/ProjectCard'
import Atom from 'components/SVG/Atom'
import Blob from 'components/SVG/Blob'
import Steps from 'components/SVG/Steps'
import Section from 'components/Section'
import Skill from 'components/Skill'
import { siteConfig } from 'config/site'
import Image from 'next/image'
import { getFeaturedRepos, getShowcaseRepos } from 'services/getProjects'
import codeGif from '../public/code.gif'

const { skills, links } = siteConfig

async function Home() {
  const [featuredProjects, showcaseProjects] = await Promise.all([
    await getFeaturedRepos(),
    await getShowcaseRepos(),
  ])

  const GHProfileUrl = links.find(({ label }) => label === 'GitHub')?.url

  const styles =
    'box-content aspect-square h-[14rem] w-[14rem] inset-x-0 mx-auto rounded border-[1rem] border-b-[4rem] border-gray-100 ring-1 ring-black/10'

  return (
    <main className="space-y-40">
      <section
        className="relative grid min-h-screen place-items-center overflow-hidden bg-night-100 dark:bg-night-950"
        id="home"
      >
        <header className="relative">
          <Blob className="-left-4 top-0 h-48 w-48 bg-purple-600 [animation-duration:5000ms] md:left-4 lg:h-80 lg:w-80" />
          <Blob className="right-10 top-10 h-44 w-44 bg-fuchsia-500 [animation-delay:1000ms] [animation-duration:3500ms] md:-top-4 md:right-0 md:h-60 md:w-60 lg:-right-10 lg:h-80 lg:w-80" />
          <Blob className="inset-x-0 -top-16 mx-auto h-48 w-48 bg-amber-600 [animation-duration:3500ms] [animation-delay:5000ms] md:-top-40 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          <h1 className="hero__title px-2 text-3xl font-light text-night-950 dark:text-night-50 md:text-5xl xl:text-6xl">
            <span className="isolate block ">Hi there, I&apos;m</span>
            <span
              className=" mb-4 mt-3 block text-6xl font-normal text-night-800 dark:text-night-200 md:text-7xl xl:text-8xl"
              translate="no"
            >
              Anthony Mackensen
            </span>
            <span className="block">
              <span className="isolate">And I&apos;m a</span>{' '}
              <span
                className="font-medium text-night-500 dark:text-night-400"
                translate="no"
              >
                Web Developer
              </span>
            </span>
          </h1>

          <div
            className="absolute -bottom-1/2 -right-16 z-10 md:-bottom-2/3 md:right-8 xl:-bottom-1/2 xl:right-24"
            aria-hidden
          >
            <Atom className="opacity-90" />
            <Image
              className="absolute left-24 top-24 h-32 w-auto opacity-50 invert"
              src={codeGif}
              alt="Code image"
            />
          </div>
        </header>
      </section>

      <Steps className="absolute -bottom-28 z-10 h-40 w-full lg:h-60 2xl:h-80" />

      <Section id="about">
        <Section.Title>About Me</Section.Title>
        <div className="container mt-10 grid items-center gap-8 md:grid-cols-[auto,1fr]">
          <div className="relative my-5 md:mx-7">
            <div
              className={`${styles} absolute rotate-3 bg-night-800/50`}
              aria-hidden
            />
            <div
              className={`${styles} absolute -rotate-6 bg-neutral-300`}
              aria-hidden
            />
            <Image
              className={`${styles} -rotate-3 bg-gray-100 transition-transform duration-700  ease-out hover:-translate-y-2 hover:rotate-0 hover:scale-110`}
              src={`${GHProfileUrl}.png?size=320`}
              alt="Anthony Mackensen avatar"
              width={320}
              height={320}
            />
          </div>
          <div className="max-w-prose space-y-4 px-2">
            <p>
              I&apos;ve been building websites and web applications for the past
              two years, mainly focused on the front end, creating elegant and
              accessible experiences. Along the way, I have also gained
              experience with back-end development, which includes building and
              integrating APIs, databases, and other services
            </p>
            <p>
              Always striving to provide an exceptional user experience. With a
              keen eye for details that make a big difference, am persistent
              when it comes to solving challenging problems, and excel both
              independently and as part of a team.
            </p>
            <div className="space-y-4 rounded-lg bg-yellow-50 px-4 py-2 text-neutral-800 dark:bg-yellow-50/90">
              <p>
                Currently, I&apos;m searching for a full-time job as a front-end
                developer. Given my expertise, I&apos;m confident in my ability
                to create innovative and engaging web experiences that exceed
                expectations.
              </p>
              <p>
                Feel free to{' '}
                <a
                  className="rounded-lg font-semibold underline decoration-cyan-500 decoration-2 underline-offset-2 hover:text-night-600"
                  href="https://drive.google.com/uc?id=1TNqNpzrh83rB0bM9LdVRCDypg_m-d-h6&export=download"
                >
                  check out my resume
                </a>{' '}
                or{' '}
                <a
                  className="rounded-lg font-semibold underline decoration-cyan-500 decoration-2 underline-offset-2 hover:text-night-600"
                  href="#contact"
                >
                  contact me
                </a>{' '}
                directly!
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills">
        <Section.Title>Skills</Section.Title>
        <Section.Paragraph>
          Here are a few technologies I&apos;ve been working with recently.
        </Section.Paragraph>
        <ul className="container grid grid-cols-3 gap-y-12 md:grid-cols-5 md:gap-x-4 md:gap-y-14">
          {skills.map((name) => (
            <Animate
              as="li"
              key={name}
              className="animate-in fade-in duration-700"
            >
              <Skill name={name} />
            </Animate>
          ))}
        </ul>
      </Section>

      {featuredProjects.length > 0 && (
        <Section id="portfolio">
          <Section.Title>Portfolio</Section.Title>
          <Section.Paragraph>
            Check out some of the projects I&apos;ve worked on
          </Section.Paragraph>
          <div className="overflow-hidden">
            <ul className="projects container mb-20 space-y-10">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <ProjectCard {...project} featured />
                </li>
              ))}
            </ul>
          </div>
          <Section.SubTitle>There&apos;s more!</Section.SubTitle>
          <Section.Paragraph>
            Swipe right or left to see even more projects!
          </Section.Paragraph>
          <Carousel>
            {showcaseProjects.map((repo) => (
              <ProjectCard key={repo.id} {...repo} />
            ))}
          </Carousel>
        </Section>
      )}

      <Section id="contact">
        <Section.Title>Get in Touch</Section.Title>
        <Section.Paragraph>
          Please feel free to contact me via any of the following platforms
        </Section.Paragraph>
        <ContactsList />
      </Section>
    </main>
  )
}

export default Home
