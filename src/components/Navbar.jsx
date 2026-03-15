import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#casualties', label: 'Casualties' },
  { href: '#destruction', label: 'Destruction' },
  { href: '#history', label: 'History' },
  { href: '#survey', label: 'Survey' },
  { href: '#sarajevo', label: 'Sarajevo' },
  { href: '#sources', label: 'Sources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>Gaza — The Data</span>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href ? styles.active : ''} onClick={() => { setActive(l.href); setOpen(false) }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
