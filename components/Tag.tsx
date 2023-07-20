import { Topic } from 'types/repositories-types'

function Tag({ name }: Omit<Topic, 'id'>) {
  return (
    <li
      className="inline whitespace-nowrap rounded-full bg-night-100 px-2 py-1 text-xs font-bold text-night-500 dark:bg-night-900  dark:text-night-100"
      // border border-red-300 dark:border-red-700
      translate="no"
    >
      {name}
    </li>
  )
}

export default Tag
