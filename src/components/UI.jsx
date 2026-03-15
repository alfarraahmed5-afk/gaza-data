import { useReveal } from '../hooks/useReveal'
import styles from './UI.module.css'

export function Section({ id, number, title, titleEm, children, sub }) {
  const [ref, visible] = useReveal(0.08)
  return (
    <section id={id} className={styles.section}>
      <div ref={ref} className={`${styles.sectionHeader} reveal ${visible ? 'visible' : ''}`}>
        <div className={styles.sectionNumber}>{number}</div>
        <h2 className={styles.sectionTitle}>
          {title}<br /><em>{titleEm}</em>
        </h2>
        {sub && <p className={styles.sectionSub}>{sub}</p>}
      </div>
      {children}
    </section>
  )
}

export function StatGrid({ children, cols }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <div ref={ref} className={`${styles.statGrid} ${styles[`cols${cols || 4}`]} reveal stagger ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}

export function StatCell({ label, value, sub, red }) {
  return (
    <div className={styles.statCell}>
      <div className={styles.statLabel}>{label}</div>
      <div className={`${styles.statValue} ${red ? styles.red : ''}`}>{value}</div>
      {sub && <div className={styles.statSub}>{sub}</div>}
    </div>
  )
}

export function BarRow({ label, note, pct, color }) {
  const [ref, visible] = useReveal(0.2)
  return (
    <div ref={ref} className={`${styles.barRow} reveal ${visible ? 'visible' : ''}`}>
      <div className={styles.barHeader}>
        <span>{label}</span>
        <span className={styles.barNote}>{note}</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: visible ? `${pct}%` : '0%',
            background: color || 'var(--accent)',
            transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </div>
    </div>
  )
}

export function PullQuote({ children }) {
  const [ref, visible] = useReveal(0.2)
  return (
    <blockquote ref={ref} className={`${styles.pullQuote} reveal ${visible ? 'visible' : ''}`}>
      {children}
    </blockquote>
  )
}

export function Rule() {
  return <hr className={styles.rule} />
}

export function ChartWrap({ label, height, source, children }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      {label && <div className={styles.chartLabel}>{label}</div>}
      <div style={{ position: 'relative', width: '100%', height: height || 280 }}>
        {children}
      </div>
      {source && <div className={styles.chartSource}>{source}</div>}
    </div>
  )
}

export function Legend({ items }) {
  return (
    <div className={styles.legend}>
      {items.map((item, i) => (
        <div key={i} className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: item.color }} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Tag({ status }) {
  const map = { yes: 'Yes', no: 'No', partial: 'Partial' }
  return <span className={`${styles.tag} ${styles[status]}`}>{map[status]}</span>
}

export function VideoEmbed({ src, title, caption }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <div ref={ref} className={`${styles.videoWrap} reveal ${visible ? 'visible' : ''}`}>
      <div className={styles.videoFrame}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <div className={styles.videoCaption}>{caption}</div>}
    </div>
  )
}

export function PhotoCredit({ text }) {
  return <div className={styles.photoCredit}>{text}</div>
}
