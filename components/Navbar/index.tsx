import 'server-only'

import Logo from 'components/SVG/Logo'
import { tw } from 'lib/helpers'
import personalInfo from 'personalInfo.json'
import TopHeaderBar from './TopHeaderBar'

function Navbar() {
  const { socialMedia, navLinks } = personalInfo
  const socials = socialMedia.filter(({ name }) =>
    ['LinkedIn', 'GitHub'].includes(name)
  )

  return (
    <TopHeaderBar>
      <nav>
        <ul className="h-full auto-cols-fr grid-flow-col space-y-1 before:mx-2 before:text-sm before:text-night-500 before:content-['Navigate_to'] before:dark:text-night-400 md:grid md:space-y-0 md:px-2 md:before:hidden">
          {navLinks.map(({ href, text }) => (
            <li key={text}>
              <a
                className={tw(
                  'nav-item underline-effect',
                  'h-full w-full md:font-bold'
                )}
                href={href}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="before:mx-2 before:text-sm before:text-night-500 before:content-['Socials'] before:dark:text-night-400 md:px-2 md:before:hidden">
        <ul className="flex h-full">
          {socials.map(({ href, name }) => (
            <li key={name}>
              <a
                className="nav-item underline-effect"
                rel="noreferrer"
                target="_blank"
                href={href}
              >
                <Logo height={28} icon={name} />
                <span className="sr-only">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </TopHeaderBar>
  )
}

export default Navbar
