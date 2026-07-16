import styles from './Skills.module.css'

const skillGroups = [
  { title: 'Programming Languages', icon: '💻', skills: ['Python', 'Java', 'JavaScript'], color: 'blue' },
  { title: 'Frontend', icon: '🎨', skills: ['HTML', 'CSS', 'React.js','Bootstrap','Responsive Design','Rest APIs'], color: 'teal' },
  { title: 'Backend', icon: '⚙️', skills: ['Flask', 'Node.js'], color: 'orange' },
  { title: 'Artificial Intelligence', icon: '🤖', skills: ['Generative AI', 'Prompt Engineering', 'Machine Learning','ChatGpt','Claude','Gemini','Antigravity'], color: 'purple' },
  { title: 'Database', icon: '🗄️', skills: ['MySQL', 'SQL Schema Design'], color: 'green' },
  { title: 'Core Subjects', icon: '📚', skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Artificial Intelligence'], color: 'red' },
  { title: 'Tools & Platforms', icon: '🛠️', skills: ['GitHub', 'VS Code','Vite','Vercel','Netlify',' Render'], color: 'gray' },
]

const softSkills = ['Problem-solving', 'Communication', 'Adaptability', 'Time Management', 'Quick Learner', 'Team Collaboration']

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Technical Expertise</p>
          <h2 className={styles.heading}>Skills &amp; Technologies</h2>
          <p className={styles.sub}>A well-rounded skill set spanning full-stack development, databases, and core computer science.</p>
        </div>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={`${styles.card} ${styles[group.color]}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{group.icon}</span>
                <h3 className={styles.cardTitle}>{group.title}</h3>
              </div>
              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.softSkills}>
          <h3 className={styles.softTitle}>Soft Skills</h3>
          <div className={styles.softTags}>
            {softSkills.map((s) => (
              <span key={s} className={styles.softTag}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
