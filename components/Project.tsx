import { tw } from "lib/helpers";
import { ProjectData } from "types/projects-types";
import BrowserPlaceholder from "./BrowserPlaceholder";
import Tag from "./Tag";
import Video from "./Video";

export function Project({
  name,
  topics,
  description,
  homepageUrl,
  url,
}: Omit<ProjectData, "id">) {
  return (
    <li className="relative grid overflow-hidden shadow-xl dark:shadow-none bg-neutral-50 dark:bg-night-800 md:bg-transparent dark:md:bg-transparent lg:bg-neutral-50 dark:lg:bg-night-800 md:shadow-none dark:drop-shadow-none md:drop-shadow-2xl gap-x-2 rounded-xl project__item">
      <h3 className="m-2 text-lg font-bold capitalize md:[grid-area:title]">
        {name.replace(/-/g, " ")}
      </h3>

      <BrowserPlaceholder url={homepageUrl}>
        <Video name={name} />
      </BrowserPlaceholder>

      <p className="m-2 text-neutral-700 font-medium dark:text-neutral-300 md:[grid-area:description]">
        {description || "No description available."}
      </p>

      <ul className="flex items-center px-2 py-6 overflow-x-auto overflow-y-hidden gap-x-2 md:flex-wrap md:py-0 md:overflow-visible gap-y-1 md:[grid-area:tech-list]">
        {topics.map(({ id, name }) => (
          <Tag key={id} name={name} />
        ))}
      </ul>

      <div className="m-2 space-x-2 font-semibold place-self-end md:[grid-area:links]">
        <a
          className={tw(
            "inline-block px-4 py-2 rounded-lg transition",
            "bg-neutral-50 dark:bg-night-800",
            "hover:text-primary-700 dark:hover:text-primary-300",
            "ring-primary-300 hover:ring-primary-700 dark:ring-night-700 dark:hover:ring-night-300 ring-1"
          )}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Source Code
        </a>
        <a
          className={tw(
            "inline-block px-4 py-2 rounded-lg transition-colors",
            "text-neutral-100 dark:text-neutral-900",
            "bg-primary-700 hover:bg-primary-600 dark:bg-primary-300 dark:hover:bg-primary-400"
          )}
          href={homepageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Visit Site
        </a>
      </div>
    </li>
  );
}
