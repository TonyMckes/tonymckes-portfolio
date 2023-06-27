import Logo from 'components/Logo'
import personalInfo from 'personalInfo.json'
import NavLink from './NavLink'
import TopHeaderBar from './TopHeaderBar'

function Navbar() {
  const { socialMedia, navLinks } = personalInfo
  const socials = socialMedia.filter(({ name }) =>
    ['LinkedIn', 'Github'].includes(name)
  )

  return (
    <TopHeaderBar>
      <nav>
        <ul className="h-full auto-cols-fr grid-flow-col space-y-2 md:mr-2 md:grid md:space-y-0">
          {navLinks.map(({ href, text }) => (
            <li key={text}>
              <NavLink href={href} className="h-full w-full">
                <span className="text-primary-700 dark:invert md:hover:text-primary-500">
                  {text}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="mt-4 flex h-full md:ml-2 md:mt-0">
          {socials.map(({ href, name }) => (
            <li key={name}>
              <NavLink rel="noreferrer" target="_blank" href={href}>
                <Logo height={28} icon={name} />
                <span className="sr-only">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </TopHeaderBar>
  )
}

export default Navbar
