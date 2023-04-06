import Logo from './Logo'

function Skill({ name }: { name: string }) {
  return (
    <li className="relative text-center">
      <Logo
        icon={name}
        className="mx-auto h-20 w-20 rounded bg-neutral-100/75 p-2 dark:bg-neutral-100/25"
      />
      <Logo
        style={{ display: 'none' }}
        icon={name}
        className="absolute inset-0 -z-10 mx-auto !block h-20 w-20 scale-110 blur-2xl"
      />
      <span className="mt-2 block whitespace-nowrap text-sm font-medium">
        {name}
      </span>
    </li>
  )
}

export default Skill
