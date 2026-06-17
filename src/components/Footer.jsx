import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>MU</div>
          <p className={styles.tagline}>Monisha Ulagappan</p>
          <p className={styles.sub}>B.Tech IT Graduate · Software Developer</p>
        </div>
        <nav className={styles.nav}>
          {['about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((id) => (
            <button key={id} className={styles.navLink} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
        <div className={styles.social}>
          <a href="https://linkedin.com/in/monisha-ulagappan-6b6048272" target="_blank" rel="noreferrer" className={styles.socialBtn}>LinkedIn</a>
          <a href="https://github.com/monisha2018" target="_blank" rel="noreferrer" className={styles.socialBtn}>GitHub</a>
          <a href="mailto:monishaulagappan18@gmail.com" className={styles.socialBtn}>Email</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {year} Monisha Ulagappan. All rights reserved.</p>
        <button className={styles.backTop} onClick={scrollTop} aria-label="Back to top">↑</button>
      </div>
    </footer>
  )
}
