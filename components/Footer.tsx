import Link from 'next/link'
import styles from './Footer.module.css'
import Icon from './Icon'

function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="#home" className={styles.link}>
        <Icon aria-hidden name="Up" />
        Back to top
      </Link>
    </footer>
  )
}

export default Footer
