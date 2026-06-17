import styles from './About.module.css'

const stats = [
  { value: '8.30', label: 'CGPA', suffix: '/10' },
  { value: '3', label: 'Internships', suffix: '+' },
  { value: '3', label: 'Projects', suffix: '+' },
  { value: '8', label: 'Certifications', suffix: '+' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="developer working"
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              <span>B.Tech IT</span>
              <strong>2026 Graduate</strong>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.heading}>Motivated developer with a passion for building</h2>
          <p className={styles.body}>
            I'm a B.Tech Information Technology graduate from SKR Engineering College (Anna University),
            Chennai. I specialize in building web-based applications with hands-on experience in
            smart systems, data analytics, and modern frontend development.
          </p>
          <p className={styles.body}>
            My focus spans Python &amp; Flask backends, React frontends, and MySQL databases.
            I thrive on solving real-world problems with clean, efficient code and a user-first mindset.
          </p>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>
                  {s.value}<span className={styles.suffix}>{s.suffix}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.info}>
            <InfoItem icon="📍" text="Chennai, Tamil Nadu" />
            <InfoItem icon="🎓" text="SKR Engineering College, Anna University" />
            <InfoItem icon="📧" text="monishaulagappan18@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, text }) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoIcon}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}
