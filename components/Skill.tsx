import Icon, { IconsCollection } from "./Icon";
import styles from "./Skill.module.css";

function Skill({ name }: IconsCollection) {
  return (
    <li className={styles.item}>
      <Icon name={name} className={styles.logo} />
      <Icon name={name} className={styles.logoBackground} aria-hidden />
      <span className={styles.title}>{name}</span>
    </li>
  );
}

export default Skill;
