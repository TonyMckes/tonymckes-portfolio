import 'server-only'

import Animate from 'components/Animate'
import Logo from 'components/SVG/Logo'
import { siteConfig } from 'config/site'

const { links, email } = siteConfig
const [emailUsername, emailDomain] = email.split('@')

function ContactsList() {
  return (
    <>
      <ul className="contact__list container mx-auto mt-6 grid max-w-md auto-cols-fr grid-flow-col items-center justify-center md:gap-8 ">
        {links.map(({ label, url }) => (
          <Animate
            as="li"
            key={label}
            className="animate-in fade-in duration-700"
          >
            <a
              href={url}
              className="link grid justify-center gap-1 rounded p-2 text-sm font-medium hover:bg-neutral-50/20 dark:hover:bg-night-800/20 md:text-base"
              target="_blank"
              rel="noreferrer"
            >
              <Logo
                height={32}
                className="mx-auto w-auto md:!h-10"
                icon={label}
              />
              {label}
            </a>
          </Animate>
        ))}
      </ul>
      <p className="textContent mt-8 text-center text-xl opacity-100 transition-[visibility,opacity] duration-500">
        Or, you can write me an email
      </p>
      <div
        className="email -translate-x-[0.5ch] text-center text-2xl underline decoration-night-500 underline-offset-4 dark:decoration-night-400"
        translate="no"
      >
        <span
          className="at select-none opacity-10 transition-opacity duration-500"
          aria-hidden
        >
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
