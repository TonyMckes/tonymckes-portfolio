import { tw } from 'lib/helpers'
import Image from 'next/image'
import type { Repository } from 'types/repositories-types'
import BrowserPlaceholder from './BrowserPlaceholder'
import Tag from './Tag'
import Video from './Video'

interface ProjectProps extends Omit<Repository, 'id'> {
  imgUrl?: string
}

export function Project({
  name,
  repositoryTopics: { topics },
  description,
  homepageUrl,
  url,
  imgUrl,
}: ProjectProps) {
  return (
    <li className="project__item relative flex flex-col gap-x-2 overflow-hidden rounded-xl bg-neutral-50 shadow-xl dark:bg-night-800 dark:shadow-none dark:drop-shadow-none md:grid md:bg-transparent md:shadow-none md:drop-shadow-2xl dark:md:bg-transparent lg:bg-neutral-50 dark:lg:bg-night-800">
      <h3 className="m-2 text-lg font-bold capitalize md:[grid-area:title]">
        {name.replace(/-/g, ' ')}
      </h3>

      <BrowserPlaceholder url={homepageUrl}>
        {imgUrl ? (
          <Image
            className="h-full object-cover"
            src={imgUrl}
            width={1280}
            height={720}
            alt={name}
          />
        ) : (
          <Video name={name} />
        )}
      </BrowserPlaceholder>

      <p className="m-2 grow font-medium text-neutral-700 dark:text-neutral-300 md:[grid-area:description]">
        {description || 'No description available.'}
      </p>

      <ul className="flex items-center gap-x-2 gap-y-1 overflow-x-auto overflow-y-hidden px-2 py-6 md:flex-wrap md:overflow-visible md:py-0 md:[grid-area:tech-list]">
        {topics.map(({ id, name }) => (
          <Tag key={id} name={name} />
        ))}
      </ul>

      <div className="m-2 space-x-2 place-self-end font-semibold md:[grid-area:links]">
        <a
          className={tw(
            'inline-block rounded-lg px-4 py-2 transition',
            'bg-neutral-50 dark:bg-night-800',
            'hover:text-primary-700 dark:hover:text-primary-300',
            'ring-1 ring-primary-300 hover:ring-primary-700 dark:ring-night-700 dark:hover:ring-night-300'
          )}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Source Code
        </a>
        <a
          className={tw(
            'inline-block rounded-lg px-4 py-2 transition-colors',
            'text-neutral-100 dark:text-neutral-900',
            'bg-primary-700 hover:bg-primary-600 dark:bg-primary-300 dark:hover:bg-primary-400'
          )}
          href={homepageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Visit Site
        </a>
      </div>
    </li>
  )
}
