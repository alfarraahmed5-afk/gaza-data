import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { useReveal } from '../hooks/useReveal'
import { Section, Rule, ChartWrap, Legend, Tag, VideoEmbed, PullQuote } from './UI'
import { sarajevoComparison, recoveryConditions, reconstructionTimeline, lessons } from '../data/data'
import styles from './Sarajevo.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
const monoFont = "'IBM Plex Mono', monospace"

function LessonCard({ lesson, index }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useReveal(0.15)
  return (
    <div
      ref={ref}
      className={`${styles.lessonCard} ${open ? styles.open : ''} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <button className={styles.lessonHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.lessonIcon}>{lesson.icon}</span>
        <span className={styles.lessonTitle}>{lesson.title}</span>
        <span className={styles.lessonChevron}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.lessonBody}>
          <div className={styles.lessonCol}>
            <div className={styles.colLabel} style={{ color: 'var(--purple)' }}>Sarajevo</div>
            <p className={styles.colText}>{lesson.sarajevo}</p>
          </div>
          <div className={styles.lessonCol}>
            <div className={styles.colLabel} style={{ color: 'var(--accent)' }}>Gaza</div>
            <p className={styles.colText}>{lesson.gaza}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Sarajevo() {
  const compareData = {
    labels: sarajevoComparison.labels,
    datasets: [
      { label: 'Sarajevo', data: sarajevoComparison.sarajevo, backgroundColor: '#534AB7', borderRadius: 3 },
      { label: 'Gaza', data: sarajevoComparison.gaza, backgroundColor: '#c0392b', borderRadius: 3 },
    ]
  }
  const compareOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', maxRotation: 20 }, grid: { display: false } },
      y: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  const timelineData = {
    labels: reconstructionTimeline.labels,
    datasets: [
      { label: 'Sarajevo (actual)', data: reconstructionTimeline.sarajevo, backgroundColor: '#534AB7', borderRadius: 3 },
      { label: 'Gaza (projected)', data: reconstructionTimeline.gaza, backgroundColor: '#c0392b', borderRadius: 3 },
    ]
  }
  const timelineOptions = {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false },
      tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.x} years` } }
    },
    scales: {
      x: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', callback: v => v + 'yr' }, grid: { color: 'rgba(0,0,0,0.04)' } },
      y: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860' }, grid: { display: false } }
    }
  }

  return (
    <Section
      id="sarajevo"
      number="06 / Comparison"
      title="Sarajevo &"
      titleEm="Gaza"
      sub="Sarajevo (1992–1995) is the closest comparable urban siege in modern history. Its recovery offers lessons — but also reveals the structural barriers Gaza faces that Sarajevo did not."
    >
      <Legend items={[
        { color: '#534AB7', label: 'Sarajevo siege (1992–1995)' },
        { color: '#c0392b', label: 'Gaza (Oct 2023–present)' },
      ]} />
      <ChartWrap label="Conflict scale — side by side" height={280}>
        <Bar data={compareData} options={compareOptions} />
      </ChartWrap>

      <Rule />

      {/* Recovery conditions table */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
        Recovery conditions — what Sarajevo had that Gaza does not
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Condition</th>
              <th>Sarajevo</th>
              <th>Gaza</th>
            </tr>
          </thead>
          <tbody>
            {recoveryConditions.map((r, i) => (
              <tr key={i}>
                <td>{r.factor}</td>
                <td><Tag status={r.sarajevo} /></td>
                <td><Tag status={r.gaza} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Rule />

      <Legend items={[
        { color: '#534AB7', label: 'Sarajevo (actual years)' },
        { color: '#c0392b', label: 'Gaza (projected years from ceasefire)' },
      ]} />
      <ChartWrap
        label="Reconstruction timeline — years from ceasefire"
        height={220}
        source="Sarajevo: UNHCR 2005, Aleppo Project. Gaza projections: UNEP 2024, UNCTAD."
      >
        <Bar data={timelineData} options={timelineOptions} />
      </ChartWrap>

      <Rule />

      <VideoEmbed
        src="https://www.youtube.com/embed/NfJbFjQ8xXk"
        title="Sarajevo siege and recovery — DW Documentary"
        caption="Sarajevo: The 1992–1995 siege and the city's recovery — DW Documentary. Essential context for the Gaza comparison."
      />

      <Rule />

      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>
        Five lessons from Sarajevo — click to expand
      </div>
      <div className={styles.lessons}>
        {lessons.map((l, i) => (
          <LessonCard key={i} lesson={l} index={i} />
        ))}
      </div>

      <PullQuote>
        "The experience and lessons learned in Sarajevo can still offer valuable insights to Palestinian planners and policymakers — but the political conditions for applying them do not yet exist." — Al Farra, AUS 2023–24
      </PullQuote>
    </Section>
  )
}
