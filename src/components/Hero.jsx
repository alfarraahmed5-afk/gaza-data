import { useEffect, useState } from 'react'
import { useCountUp } from '../hooks/useReveal'
import styles from './Hero.module.css'

const START_DATE = new Date('2023-10-07')
const TODAY = new Date('2026-03-15')
const DAYS = Math.floor((TODAY - START_DATE) / (1000 * 60 * 60 * 24))

function Counter({ target, suffix = '' }) {
  const [ref, setRef] = useState(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(target, 2400, started)
  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.1 })
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])
  return <span ref={setRef}>{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.photoBg} style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/An_aerial_view_of_heavily_damaged_collapsed_buildings_caused_by_Israeli_airstrikes_in_Al-Zahra%2C_near_Gaza_city.jpg/1280px-An_aerial_view_of_heavily_damaged_collapsed_buildings_caused_by_Israeli_airstrikes_in_Al-Zahra%2C_near_Gaza_city.jpg)`,
        transform: `translateY(${scrollY * 0.3}px)`,
      }} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>Data record — March 15, 2026</div>
        <h1 className={styles.title}>Gaza<br /><em>The Numbers</em></h1>
        <p className={styles.sub}>A data-driven record of the ongoing conflict — casualties, destruction, urban planning research, and the Sarajevo comparison.</p>
        <div className={styles.counters}>
          <div className={styles.counterItem}>
            <div className={styles.counterValue}><Counter target={73188} suffix="+" /></div>
            <div className={styles.counterLabel}>Confirmed killed</div>
          </div>
          <div className={styles.counterDivider} />
          <div className={styles.counterItem}>
            <div className={styles.counterValue}><Counter target={1900000} /></div>
            <div className={styles.counterLabel}>Displaced</div>
          </div>
          <div className={styles.counterDivider} />
          <div className={styles.counterItem}>
            <div className={styles.counterValue}><Counter target={DAYS} /></div>
            <div className={styles.counterLabel}>Days of conflict</div>
          </div>
          <div className={styles.counterDivider} />
          <div className={styles.counterItem}>
            <div className={styles.counterValue}><Counter target={20000} suffix="+" /></div>
            <div className={styles.counterLabel}>Children killed</div>
          </div>
        </div>
        <div className={styles.navPills}>
          {[['#casualties','01 Casualties'],['#destruction','02 Destruction'],['#history','03 History'],['#survey','04 Survey'],['#sarajevo','05 Sarajevo']].map(([href, label]) => (
            <a key={href} href={href} className={styles.pill}>{label}</a>
          ))}
        </div>
      </div>
      <div className={styles.photoCredit}>Photo: Aerial view of Al-Zahra near Gaza City — Wikimedia Commons / CC BY-SA 4.0</div>
      <div className={styles.scrollHint}>
        <svg width="20" height="30" viewBox="0 0 20 30">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
          <circle cx="10" cy="8" r="2.5" fill="rgba(255,255,255,0.7)">
            <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  )
}
