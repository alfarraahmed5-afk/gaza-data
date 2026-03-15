import { useReveal } from '../hooks/useReveal'
import { Section } from './UI'
import { sources } from '../data/data'
import styles from './Footer.module.css'

function SourceCard({ cat, items, index }) {
  const [ref, visible] = useReveal(0.15)
  return (
    <div ref={ref} className={`${styles.sourceCard} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}>
      <div className={styles.sourceCat}>{cat}</div>
      <ul className={styles.sourceList}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <Section id="sources" number="07 / Sources" title="Data" titleEm="sources">
        <div className={styles.sourceGrid}>
          {sources.map((s, i) => (
            <SourceCard key={i} {...s} index={i} />
          ))}
        </div>
      </Section>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerTitle}>Gaza — The Data</div>
          <div className={styles.footerSub}>
            Based on primary research by Ahmed Al Farra<br />
            American University of Sharjah, 2023–24<br />
            Updated with latest reports as of March 15, 2026
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerMono}>Data as of</div>
          <div className={styles.footerMono} style={{ color: 'var(--accent)' }}>15 March 2026</div>
          <div className={styles.footerMono} style={{ marginTop: '1rem' }}>
            <a href="https://github.com" className={styles.footerLink}>GitHub ↗</a>
          </div>
        </div>
      </footer>
    </>
  )
}
