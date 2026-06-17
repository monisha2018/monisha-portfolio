import styles from './Certifications.module.css'

const certs = [
{
name: 'CCNA: Introduction to Networks',
issuer: 'Cisco Networking Academy',
year: '2025',
icon: '🌐'
},
{
name: 'Introduction to Cybersecurity',
issuer: 'Cisco Networking Academy',
year: '2025',
icon: '🔐'
},
{
name: 'Artificial Intelligence Fundamentals',
issuer: 'IBM SkillsBuild',
year: '2025',
icon: '🧠'
},
{
name: 'Customer Engagement: Problem Solving and Process Controls',
issuer: 'IBM SkillsBuild',
year: '2025',
icon: '💡'
},
{
name: 'Customer Engagement: Communication and Personality Dynamics',
issuer: 'IBM SkillsBuild',
year: '2025',
icon: '🗣️'
},
{
name: 'SAWIT.AI Learnathon (Generative AI)',
issuer: 'GUVI',
year: '2024',
icon: '🤖'
},
{
name: 'Machine Learning 101',
issuer: 'GUVI',
year: '2025',
icon: '📊'
},
{
name: 'Generative AI in Tamil',
issuer: 'GUVI',
year: '2024',
icon: '✨'
},
{
name: 'Yuva AI for All',
issuer: 'INDIAai, NASSCOM, FutureSkills Prime',
year: '2025',
icon: '🚀'
},
{
name: 'Java with Spring Boot – Level 2',
issuer: 'Naan Mudhalvan Scheme',
year: '2025',
icon: '☕'
},
{
name: 'Unity Training Program',
issuer: 'Naan Mudhalvan Scheme',
year: '2025',
icon: '🎮'
},
{
name: 'Visual Studio Online',
issuer: 'Great Learning Academy',
year: '2024',
icon: '💻'
},
{
name: 'What is IoT?',
issuer: 'Great Learning Academy',
year: '2024',
icon: '📡'
}
]

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Credentials</p>
          <h2 className={styles.heading}>Certifications</h2>
          <p className={styles.sub}>Certified in Artificial Intelligence, Machine Learning, Networking, Cybersecurity, Java Development, and Emerging Technologies through IBM, Cisco, GUVI, Naan Mudhalvan, and Great Learning.</p>
        </div>

        <div className={styles.stats}>
      <span>🏆 13 Certifications Earned</span>
    </div>
    
        <div className={styles.grid}>
          {certs.map((cert, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{cert.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                {cert.year && <span className={styles.year}>{cert.year}</span>}
              </div>
              <div className={styles.badge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
