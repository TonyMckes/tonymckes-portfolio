import 'server-only'

import Logo from 'components/SVG/Logo'

function Skill({ name }: { name: string }) {
  return (
    <li className="relative text-center">
      <Logo
        icon={name}
        size="64px"
        className="mx-auto rounded bg-neutral-100/75 p-2 dark:bg-neutral-100/25 md:!h-20 md:!w-20"
      />
      <Logo
        style={{ display: 'none' }}
        icon={name}
        size="64px"
        className="absolute inset-0 -z-10 mx-auto !block scale-110 blur-xl md:!h-20 md:!w-20 md:blur-2xl"
      />
      <span
        className="mt-2 block whitespace-nowrap text-sm font-semibold"
        translate="no"
      >
        {name}
      </span>
    </li>
  )
}

export default Skill
