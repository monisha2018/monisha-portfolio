import styles from './Projects.module.css'

const projects = [
  {
    title: 'Smart Parking & Tracking System',
    description: 'A full-featured web-based parking management application with real-time slot booking, vehicle tracking, admin dashboard, automated slot expiry, and payment simulation.',
    tech: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Real-time slot booking', 'Vehicle tracking', 'Admin dashboard', 'Payment simulation'],
    featured: true,
    github: 'https://github.com/monisha2018/Smart-Parking-Tracking-System',
    live: 'https://smart-parking-tracking-system.vercel.app/',
  },
  {
    title: 'Local Service Finder',
    description: 'A full-stack platform connecting customers with local service providers, with real-time chat and notifications, secure online payments, and a mobile app build.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Razorpay', 'Tailwind CSS', 'Capacitor'],
    image: 'https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Real-time updates with Socket.IO', 'Razorpay payment integration', 'Android/iOS build via Capacitor'],
    featured: true,
    github: 'https://github.com/monisha2018/local-service-finder' ,
    live: 'https://local-service-finder-live.vercel.app/',
  },
  {
    title: 'HungerBridge Dashboard',
    description: 'A full-stack food rescue and donation coordination platform connecting donors, volunteers, and NGOs in real time, with role-based dashboards and live pickup tracking.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?b=1&s=612x612&w=0&k=20&c=vLFun8B03R7WlF8rXcvSmjRUGeSvWchFQW5HZLCXo08=',
    highlights: ['Real-time donation matching', 'Volunteer performance analytics', 'Pickup & delivery tracking', 'JWT-based role authentication'],
    featured: true,
    github: 'https://github.com/monisha2018/hungerbridge-dashboard',
    live: 'https://hunger-bridge.netlify.app/',
  },
  {
    title: 'Interior Project Management Website (Client Project)',
    description: 'A responsive professional website built for an interior project manager (M. Ulagappan) to showcase work, services, and contact details.',
    tech: ['HTML', 'CSS', 'Responsive Web Design'],
    image: 'https://images.pexels.com/photos/35189707/pexels-photo-35189707.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Delivered for a real client', 'Fully responsive layout', 'Clean, professional design'],
    featured: false,
    github: 'https://github.com/monisha2018/ulagappan-interior-projects',
    live: 'https://ulagappan-interior-projects.vercel.app/',
  },
  {
    title: 'Post Management System (CRUD)',
    description: 'A React-based content management application featuring reusable components, optimized state management, and a clean interface for creating, reading, updating, and deleting posts.',
    tech: ['React.js', 'JavaScript', 'CSS', 'State Management'],
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Reusable components', 'Optimized state', 'Full CRUD operations'],
    featured: false,
    github: 'https://github.com/monisha2018/post-management',
    live: 'https://post-managements-crud.netlify.app/',
  },
  {
    title: 'Restaurant Landing Page',
    description: 'A responsive and visually engaging restaurant website with smooth animations, interactive menus, and a mobile-first design approach.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Responsive design', 'Interactive UI', 'Mobile-first'],
    featured: false,
    github: 'https://github.com/monisha2018/Resturant_landing',
    live: 'https://monisha2018.github.io/Resturant_landing/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h2 className={styles.heading}>Featured Projects</h2>
          <p className={styles.sub}>Real-world applications built from scratch — from backend APIs to polished frontends.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
                {project.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <ul className={styles.highlights}>
                  {project.highlights.map((h) => (
                    <li key={h} className={styles.highlight}>
                      <span className={styles.check}>✓</span>{h}
                    </li>
                  ))}
                </ul>
                <div className={styles.tech}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>
                  View on GitHub →
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={styles.link}>
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
