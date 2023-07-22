import 'server-only'

import { tw } from 'lib/helpers'
import Image from 'next/image'
import type { Repository } from 'types/repositories-types'
import BrowserPlaceholder from './BrowserPlaceholder'
import Tag from './Tag'
import Video from './Video'

interface ProjectProps extends Omit<Repository, 'id'> {
  featured?: boolean
}

export function ProjectCard({
  name,
  repositoryTopics: { topics },
  description,
  homepageUrl,
  url,
  openGraphImageUrl,
  featured,
}: ProjectProps) {
  return (
    <div
      className={tw(
        'project__item relative flex flex-col gap-x-2 overflow-hidden rounded-lg p-2 ring-1 ring-night-500/25 transition-shadow duration-300 hover:shadow-lg hover:ring-1 dark:ring-night-400/25 md:grid md:ring-0',
        'after:absolute after:inset-0 after:-z-10 after:m-auto after:h-full after:w-auto after:scale-0 after:rounded-full after:bg-cyan-400 after:opacity-0 after:blur-2xl after:transition-all after:duration-500 after:delay-150 after:ease-out hover:after:scale-150 hover:after:opacity-10 md:after:aspect-square md:after:h-auto md:after:w-full md:hover:after:scale-110'
      )}
    >
      <h3
        className="mx-2 text-lg font-bold capitalize text-night-500 dark:text-night-400  md:[grid-area:title]"
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

      <p className="mx-2 grow font-medium md:[grid-area:description]">
        {description || 'No description available.'}
      </p>

      <ul className="m-2 flex items-center gap-x-2 gap-y-1 overflow-x-auto overflow-y-hidden py-3 md:flex-wrap md:overflow-visible md:p-0 md:[grid-area:tech-list]">
        {topics.map(({ id, name }) => (
          <li key={id}>
            <Tag name={name} />
          </li>
        ))}
      </ul>

      <ul className="m-2 space-x-2 place-self-end font-semibold md:[grid-area:links]">
        <li className="inline">
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
        </li>
        <li className="inline">
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
        </li>
      </ul>
    </div>
  )
}