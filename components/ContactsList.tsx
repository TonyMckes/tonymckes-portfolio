import personalInfo from 'personalInfo.json'
import { PersonalInfoTypes } from 'types/personal-info-types'
import Animate from './Animate'
import Logo from './Logo'

type ContactListProps = Pick<PersonalInfoTypes, 'socialMedia' | 'email'>
const { email, socialMedia } = personalInfo as ContactListProps
const [emailUsername, emailDomain] = email.split('@')

function ContactsList() {
  return (
    <>
      <ul className="contact__list container mx-auto mt-6 grid max-w-md auto-cols-fr grid-flow-col items-center justify-center md:gap-8 ">
        {socialMedia.map(({ name, href }) => (
          <Animate key={name} className="animate-in fade-in duration-700">
            <li>
              <a
                href={href}
                className="link grid justify-center gap-1 rounded p-2 text-sm font-medium hover:bg-neutral-50/20 dark:hover:bg-night-800/20 md:text-base"
                target="_blank"
                rel="noreferrer"
              >
                <Logo
                  height={32}
                  className="mx-auto w-auto md:!h-10"
                  icon={name}
                />
                {name}
              </a>
            </li>
          </Animate>
        ))}
      </ul>
      <p className="textContent mt-8 text-center text-xl opacity-100 transition-[visibility,opacity] duration-500">
        Or write me an email at
      </p>
      <div
        className="email -translate-x-[0.5ch] text-center text-2xl underline decoration-night-500 underline-offset-4 dark:decoration-night-400"
        translate="no"
      >
        <span className="at select-none opacity-5 transition-opacity duration-500">
          @
        </span>
        <a className="font-semibold" href={`mailto:${email}`}>
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
