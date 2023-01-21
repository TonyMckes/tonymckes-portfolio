import Icon from 'components/Icon'
import Link from 'next/link'
import personalInfo from 'personalInfo.json'
import { PersonalInfoTypes } from 'types/personal-info-types'
import styles from './ContactsList.module.css'

type ContactListProps = Pick<PersonalInfoTypes, 'socialMedia' | 'email'>
const { email, socialMedia } = personalInfo as ContactListProps
const [emailUsername, emailDomain] = email.split('@')

function ContactsList() {
  return (
    <>
      <ul className={styles.list}>
        {socialMedia.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={name} />
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.textContent}>Or write me an email</p>
      <div className={styles.email}>
        <span className={styles.at}>@</span>
        <a href={`mailto:${email}`}>
          <span>{emailUsername}</span>
          <span className={styles.emailDomain}>@{emailDomain}</span>
        </a>
      </div>
    </>
  )
}

export default ContactsList
