import Logo from './Logo'

function Skill({ name }: { name: string }) {
  return (
    <li className="relative text-center">
      <Logo
        icon={name}
        size={80}
        className="mx-auto rounded bg-neutral-100/75 p-2 dark:bg-neutral-100/25"
      />
      <Logo
        style={{ display: 'none' }}
        icon={name}
        size={80}
        className="absolute inset-0 -z-10 mx-auto !block scale-110 blur-2xl"
      />
      <span className="mt-2 block whitespace-nowrap text-sm font-medium">
        {name}
      </span>
    </li>
  )
}

export default Skill
