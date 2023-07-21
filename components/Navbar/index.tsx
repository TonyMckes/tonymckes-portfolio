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
        <ul className="h-full auto-cols-fr grid-flow-col space-y-2 md:mr-2 md:grid md:space-y-0">
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
      <nav>
        <ul className="mt-4 flex h-full md:ml-2 md:mt-0">
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
      </nav>
    </TopHeaderBar>
  )
}

export default Navbar
