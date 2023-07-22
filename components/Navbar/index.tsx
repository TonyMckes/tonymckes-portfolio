import 'server-only'

import Logo from 'components/SVG/Logo'
import { siteConfig } from 'config/site'
import { tw } from 'lib/helpers'
import TopHeaderBar from './TopHeaderBar'

function Navbar() {
  const { links, mainNav } = siteConfig
  const socials = links.filter(({ label }) =>
    ['LinkedIn', 'GitHub'].includes(label)
  )

  return (
    <TopHeaderBar>
      <nav>
        <ul className="h-full auto-cols-fr grid-flow-col space-y-1 before:mx-2 before:text-sm before:text-night-500 before:content-['Navigate_to'] before:dark:text-night-400 md:grid md:space-y-0 md:px-2 md:before:hidden">
          {mainNav.map(({ label, url }) => (
            <li key={label}>
              <a
                className={tw(
                  'nav-item underline-effect',
                  'h-full w-full md:font-bold'
                )}
                href={url}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="before:mx-2 before:text-sm before:text-night-500 before:content-['Socials'] before:dark:text-night-400 md:px-2 md:before:hidden">
        <ul className="flex h-full">
          {socials.map(({ label, url }) => (
            <li key={label}>
              <a
                className="nav-item underline-effect"
                rel="noreferrer"
                target="_blank"
                href={url}
              >
                <Logo height={28} icon={label} />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </TopHeaderBar>
  )
}

export default Navbar
