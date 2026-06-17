import { useState } from 'react'
import styles from './Contact.module.css'

const contactItems = [
  { icon: '📧', label: 'Email', value: 'monishaulagappan18@gmail.com', href: 'mailto:monishaulagappan18@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 8925451042', href: 'tel:+918925451042' },
  { icon: '💼', label: 'LinkedIn', value: 'monisha-ulagappan-6b6048272', href: 'https://linkedin.com/in/monisha-ulagappan-6b6048272' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/monisha2018', href: 'https://github.com/monisha2018' },
  { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:monishaulagappan18@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto)
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Get in Touch</p>
          <h2 className={styles.heading}>Let's work<br />together</h2>
          <p className={styles.sub}>
            I'm actively seeking entry-level software developer opportunities. Whether you have a project idea,
            a job opening, or just want to connect — I'd love to hear from you.
          </p>
          <div className={styles.contactList}>
            {contactItems.map((item) => (
              <div key={item.label} className={styles.contactItem}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <div>
                  <p className={styles.contactLabel}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.contactValue}>
                      {item.value}
                    </a>
                  ) : (
                    <p className={styles.contactValue}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            {status === 'sent' && (
              <div className={styles.successMsg}>Message prepared! Your email client should open shortly.</div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your Name</label>
                <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="John Doe" className={styles.input} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={styles.input} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell me about the opportunity..." className={styles.textarea} rows={5} />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
