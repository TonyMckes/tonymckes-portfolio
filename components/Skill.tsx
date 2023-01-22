import Icon from "./Icon";
import styles from "./Skill.module.css";

function Skill({ name }: { name: string }) {
  return (
    <li className={styles.item}>
      <Icon icon={name} className={styles.logo} />
      <Icon icon={name} className={styles.logoBackground} aria-hidden />
      <span className={styles.title}>{name}</span>
    </li>
  );
}

export default Skill;
