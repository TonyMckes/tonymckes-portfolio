import personalInfo from "personalInfo.json";
import { PersonalInfoTypes } from "types/personal-info-types";
import Logo from "./Logo";

type ContactListProps = Pick<PersonalInfoTypes, "socialMedia" | "email">;
const { email, socialMedia } = personalInfo as ContactListProps;
const [emailUsername, emailDomain] = email.split("@");

function ContactsList() {
  return (
    <>
      <ul className="flex justify-center mt-6 md:gap-8 contact__list">
        {socialMedia.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="grid justify-center w-24 h-auto gap-1 p-2 font-medium rounded hover:bg-neutral-50 dark:hover:bg-night-800/50 link"
              target="_blank"
              rel="noreferrer"
            >
              <Logo className="w-auto h-8 mx-auto md:h-10" icon={name} />
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-primary-700 dark:text-primary-300 text-xl mt-8 text-center transition-[visibility,opacity] duration-500 opacity-100 textContent">
        Or write me an email
      </p>
      <div className="text-2xl text-center underline decoration-primary-500 underline-offset-4 -translate-x-[0.5ch] email">
        <span className="transition-opacity duration-500 opacity-25 select-none at">
          @
        </span>
        <a className="font-semibold" href="mailto:${email}">
          <span>{emailUsername}</span>
          <span className="transition-opacity duration-500 opacity-100 emailDomain">
            @{emailDomain}
          </span>
        </a>
      </div>
    </>
  );
}

export default ContactsList;
