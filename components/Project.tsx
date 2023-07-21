import { tw } from 'lib/helpers'
import Image from 'next/image'
import type { Repository } from 'types/repositories-types'
import BrowserPlaceholder from './BrowserPlaceholder'
import Tag from './Tag'
import Video from './Video'

interface ProjectProps extends Omit<Repository, 'id'> {
  featured?: boolean
}

export function Project({
  name,
  repositoryTopics: { topics },
  description,
  homepageUrl,
  url,
  openGraphImageUrl,
  featured,
}: ProjectProps) {
  return (
    <li className="project__item relative flex flex-col gap-x-2 overflow-hidden rounded-xl bg-neutral-50 shadow-xl dark:bg-night-800 dark:shadow-none dark:drop-shadow-none md:grid md:bg-transparent md:shadow-none md:drop-shadow-2xl dark:md:bg-transparent lg:bg-neutral-50 dark:lg:bg-night-800">
      <h3
        className="m-2 text-lg font-bold capitalize text-night-500 dark:text-night-400  md:[grid-area:title]"
        translate="no"
      >
        {name.replace(/-/g, ' ')}
      </h3>

      <BrowserPlaceholder url={homepageUrl}>
        {featured ? (
          <Video name={name} poster={openGraphImageUrl} />
        ) : (
          <Image
            className="h-full object-cover"
            src={openGraphImageUrl}
            width={1280}
            height={720}
            alt={name}
          />
        )}
      </BrowserPlaceholder>

      <p className="m-2 grow font-medium md:[grid-area:description]">
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
            'inline-block rounded-lg px-4 py-2 transition-colors',
            'text-sm text-night-500',
            'bg-white ring-night-500/25 hover:bg-night-100 hover:text-night-600 hover:ring-1'
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
            'text-sm text-white',
            'bg-night-500 ring-night-500/25 hover:bg-night-100 hover:text-night-600 hover:ring-1'
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
