import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Section, StatGrid, StatCell, BarRow, PullQuote, Rule } from './UI'
import { surveyData } from '../data/data'
import styles from './Survey.module.css'

function VoiceCard({ quote, index }) {
  const [ref, visible] = useReveal(0.15)
  return (
    <div ref={ref} className={`${styles.voiceCard} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className={styles.quoteIcon}>"</div>
      <p className={styles.quoteText}>{quote}</p>
    </div>
  )
}

export default function Survey() {
  const [activeQ, setActiveQ] = useState(0)

  const questions = [
    { q: 'Do municipalities consider the impact of conflict?', data: surveyData.municipalities },
    { q: 'Do decision-makers consider residents\' needs?', data: surveyData.residents },
  ]

  return (
    <Section id="survey" number="04 / Primary Research" title="What residents" titleEm="said"
      sub={`Survey of ${surveyData.total} participants at the Islamic University of Gaza. Master's research, American University of Sharjah, 2023–24.`}>

      <StatGrid cols={4}>
        {surveyData.stats.map((s, i) => (
          <StatCell key={i} label={s.label} value={`${s.value}%`} red={s.value >= 97 || s.value === 100} />
        ))}
      </StatGrid>

      {/* Interactive question toggle */}
      <div style={{ marginBottom: '2rem' }}>
        <div className={styles.questionTabs}>
          {questions.map((q, i) => (
            <button key={i} className={`${styles.tab} ${activeQ === i ? styles.active : ''}`}
              onClick={() => setActiveQ(i)}>
              {q.q}
            </button>
          ))}
        </div>
        <div className={styles.questionContent}>
          {questions[activeQ].data.map((d, i) => (
            <BarRow key={i} label={d.label} note={`${d.value}%`} pct={d.value} color={d.color} />
          ))}
        </div>
      </div>

      <PullQuote>
        "0 of 39 respondents could name a single positive urban planning initiative in their area."
      </PullQuote>

      <Rule />

      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Voices from the survey (translated from Arabic)
      </div>

      <div className={styles.voiceGrid}>
        {surveyData.voices.map((v, i) => (
          <VoiceCard key={i} quote={v} index={i} />
        ))}
      </div>
    </Section>
  )
}
