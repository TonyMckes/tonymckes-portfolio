import { Topic } from 'types/repositories-types'

function Tag({ name }: Omit<Topic, 'id'>) {
  return (
    <li className="inline whitespace-nowrap rounded-full border border-primary-300 px-2 py-1 text-xs font-semibold dark:border-primary-700">
      {name}
    </li>
  )
}

export default Tag
