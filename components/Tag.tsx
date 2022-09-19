import { Topic } from "types/projects-res-types";
import styles from "./Tag.module.css";

function Tag({ id, name }: Topic) {
  return (
    <li key={id} className={styles.techListItem}>
      {name}
    </li>
  );
}

export default Tag;
