import personalInfo from 'personalInfo.json'
import { PersonalInfoTypes } from 'types/personal-info-types'
import Logo from './Logo'

type ContactListProps = Pick<PersonalInfoTypes, 'socialMedia' | 'email'>
const { email, socialMedia } = personalInfo as ContactListProps
const [emailUsername, emailDomain] = email.split('@')

function ContactsList() {
  return (
    <>
      <ul className="contact__list mt-6 grid auto-cols-fr grid-flow-col md:gap-8 mx-auto items-center max-w-md justify-center ">
        {socialMedia.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="link grid justify-center gap-1 rounded p-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-night-800/50 md:text-base"
              target="_blank"
              rel="noreferrer"
            >
              <Logo className="mx-auto h-8 w-auto md:h-10" icon={name} />
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p className="textContent mt-8 text-center text-xl text-primary-700 opacity-100 transition-[visibility,opacity] duration-500 dark:text-primary-300">
        Or write me an email
      </p>
      <div className="email -translate-x-[0.5ch] text-center text-2xl underline decoration-primary-500 underline-offset-4">
        <span className="at select-none opacity-25 transition-opacity duration-500">
          @
        </span>
        <a className="font-semibold" href="mailto:${email}">
          <span>{emailUsername}</span>
          <span className="emailDomain opacity-100 transition-opacity duration-500">
            @{emailDomain}
          </span>
        </a>
      </div>
    </>
  )
}

export default ContactsList
