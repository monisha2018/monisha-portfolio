import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for opportunities
        </div>
        <h1 className={styles.name}>
          Monisha<br />
          <span>Ulagappan</span>
        </h1>
        <p className={styles.title}>Software Developer · B.Tech IT Graduate</p>
        <p className={styles.tagline}>
          Building web applications with Python, Flask &amp; React.<br />
          Passionate about clean code and intelligent systems.
        </p>
        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <button
            className={styles.btnOutline}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>

          <a
    href="/RESUME_MONISHA (2).pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.btnResume}
  >
    📄 Resume
  </a>
        </div>
        <div className={styles.social}>
          <a href="https://linkedin.com/in/monisha-ulagappan-6b6048272" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://github.com/monisha2018" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <GitHubIcon /> GitHub
          </a>
          <a href="mailto:monishaulagappan18@gmail.com" className={styles.socialLink}>
            <EmailIcon /> Email
          </a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span>Scroll down</span>
      </div>
      <img
        src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="developer workspace"
        className={styles.heroBg}
      />
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
