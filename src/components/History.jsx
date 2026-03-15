import { useReveal } from '../hooks/useReveal'
import { Section, Rule } from './UI'
import { conflictTimeline } from '../data/data'
import styles from './History.module.css'

function TimelineItem({ year, op, detail, current, index }) {
  const [ref, visible] = useReveal(0.15)
  return (
    <div
      ref={ref}
      className={`${styles.item} ${current ? styles.current : ''} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.year}>{year}</div>
        <div className={styles.op}>{op}</div>
        <div className={styles.detail}>{detail}</div>
      </div>
    </div>
  )
}

export default function History() {
  return (
    <Section id="history" number="03 / History" title="A conflict" titleEm="in cycles"
      sub="Every escalation has left Gaza further behind. Each operation built on the destruction of the last.">
      <div className={styles.timeline}>
        <div className={styles.line} />
        {conflictTimeline.map((item, i) => (
          <TimelineItem key={i} {...item} index={i} />
        ))}
      </div>
    </Section>
  )
}
