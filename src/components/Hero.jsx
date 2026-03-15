import { useEffect, useState } from 'react'
import { useReveal, useCountUp } from '../hooks/useReveal'
import styles from './Hero.module.css'

const START_DATE = new Date('2023-10-07')
const TODAY = new Date('2026-03-15')
const DAYS = Math.floor((TODAY - START_DATE) / (1000 * 60 * 60 * 24))

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const [ref, visible] = useReveal(0.1)
  const count = useCountUp(value, 2200, visible)
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallax = scrollY * 0.4

  return (
    <section className={styles.hero}>
      <div className={styles.bgNumber} style={{ transform: `translateY(${parallax}px)` }}>
        73,188
      </div>

      {/* Torn paper / grain overlay */}
      <div className={styles.grain} />

      <div className={styles.content}>
        <div className={styles.label}>Research data — March 2026</div>
        <h1 className={styles.title}>
          Gaza —<br />
          <em>The Numbers</em><br />
          Behind the War
        </h1>
        <p className={styles.sub}>
          A data-driven record of the ongoing conflict in Gaza Strip, drawing on primary
          research, UN reports, and the latest figures as of March 15, 2026.
        </p>

        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Confirmed killed</span>
            <span className={styles.metaValue}>
              <AnimatedNumber value={73188} suffix="+" />
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Displaced</span>
            <span className={styles.metaValue}>
              <AnimatedNumber value={1900000} />
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Days of conflict</span>
            <span className={styles.metaValue}>
              <AnimatedNumber value={DAYS} />
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Children killed</span>
            <span className={styles.metaValue}>
              <AnimatedNumber value={20000} suffix="+" />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" />
          <circle cx="8" cy="7" r="2" fill="currentColor">
            <animate attributeName="cy" values="7;15;7" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Quick nav pills */}
      <div className={styles.quickNav}>
        {['#casualties','#destruction','#history','#survey','#sarajevo'].map((href, i) => (
          <a key={href} href={href} className={styles.pill}
            style={{ animationDelay: `${1 + i * 0.1}s` }}>
            {['01 Casualties','02 Destruction','03 History','04 Survey','05 Sarajevo'][i]}
          </a>
        ))}
      </div>
    </section>
  )
}
