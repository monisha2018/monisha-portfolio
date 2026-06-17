import styles from './Experience.module.css'

const internships = [
  {
    role: 'AI & XR Technology Virtual Intern',
    company: 'Naan Mudhalvan Programme',
    period: 'Nov 2025',
    description: 'Completed AI-focused modules and technical assignments covering artificial intelligence and extended reality technologies.',
    tags: ['AI', 'XR Technology', 'Machine Learning'],
    color: 'blue',
  },
  {
    role: 'Web Development Intern',
    company: 'Internsforge',
    period: 'Aug 2025',
    description: 'Developed 10+ reusable UI components and improved frontend performance across multiple projects.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'UI Components'],
    color: 'teal',
  },
  {
    role: 'Data Analytics Intern',
    company: 'OSI Global IT Distribution Pvt. Ltd',
    period: 'Jul 2025',
    description: 'Processed 1000+ records and performed comprehensive data analysis to generate actionable business insights.',
    tags: ['Data Analysis', 'Python', 'SQL', 'Reporting'],
    color: 'green',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Work Experience</p>
          <h2 className={styles.heading}>Internship Experience</h2>
          <p className={styles.sub}>Hands-on industry experience across AI, web development, and data analytics.</p>
        </div>
        <div className={styles.timeline}>
          {internships.map((item, i) => (
            <div key={i} className={`${styles.card} ${styles[item.color]}`}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.education}>
          <div className={styles.eduIcon}>🎓</div>
          <div className={styles.eduContent}>
            <p className={styles.eduLabel}>Education</p>
            <h3 className={styles.eduDegree}>B.Tech in Information Technology</h3>
            <p className={styles.eduSchool}>SKR Engineering College · Anna University, Chennai</p>
            <div className={styles.eduMeta}>
              <span className={styles.eduBadge}>Graduated 2026</span>
              <span className={styles.eduBadge}>CGPA: 8.30 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
