import 'server-only'

import type { Topic } from 'types/repositories-types'

function Tag({ name }: Omit<Topic, 'id'>) {
  return (
    <span
      className="mx-1 whitespace-nowrap rounded-full bg-night-100 px-2 py-0.5 text-xs font-bold text-night-600 ring-1 ring-night-500/25 dark:bg-night-900 dark:text-night-100 dark:ring-night-400/25 md:m-0"
      translate="no"
    >
      {name}
    </span>
  )
}

export default Tag
