import { ProjectData } from "types/projects-types";
import styles from "./Project.module.css";
import Tag from "./Tag";

export function Project({
  id,
  name,
  topics,
  description,
  homepageUrl,
  url,
}: ProjectData) {
  return (
    <li key={id} className={styles.item}>
      <h3 className={styles.title}>{name.replace(/-/g, " ")}</h3>
      <video className={styles.media} loop muted>
        <source
          src={`https://raw.githubusercontent.com/TonyMckes/${name}/assets/${name}.webm`}
          type="video/webm"
        />
        Your browser does not support the videos.
      </video>
      <div className={styles.description}>
        <p>{description || "No description available."}</p>
      </div>
      <ul className={styles.techList}>
        {topics.map(({ id, name }) => (
          <Tag key={id} id={id} name={name} />
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={url} rel="noreferrer" target="_blank">
          Source Code
        </a>
        <a
          className={styles.link}
          href={homepageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Website
        </a>
      </div>
    </li>
  );
}
