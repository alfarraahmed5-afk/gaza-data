import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler, Tooltip } from 'chart.js'
import { Section, StatGrid, StatCell, BarRow, PullQuote, Rule, ChartWrap, Legend } from './UI'
import { casualties, tollTimeline, lifeExpectancy, demographics } from '../data/data'
import { useReveal } from '../hooks/useReveal'
import styles from './Media.module.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler, Tooltip)
const mono = "'IBM Plex Mono', monospace"

function PhotoGrid() {
  const [ref, visible] = useReveal(0.1)
  const photos = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/An_aerial_view_of_heavily_damaged_collapsed_buildings_caused_by_Israeli_airstrikes_in_Al-Zahra%2C_near_Gaza_city.jpg/800px-An_aerial_view_of_heavily_damaged_collapsed_buildings_caused_by_Israeli_airstrikes_in_Al-Zahra%2C_near_Gaza_city.jpg',
      caption: 'Aerial view of Al-Zahra, near Gaza City',
      credit: 'Wikimedia Commons / CC BY-SA 4.0'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Damage_in_Gaza_Strip_during_the_October_2023_-_21.jpg/800px-Damage_in_Gaza_Strip_during_the_October_2023_-_21.jpg',
      caption: 'Damage in Gaza Strip, October 2023',
      credit: 'Wikimedia Commons / CC BY-SA 4.0'
    },
  ]
  return (
    <div ref={ref} className={`${styles.photoGrid} reveal ${visible ? 'visible' : ''}`}>
      {photos.map((p, i) => (
        <figure key={i} className={styles.photoItem}>
          <img src={p.src} alt={p.caption} className={styles.photo} loading="lazy" />
          <figcaption className={styles.figcaption}>
            <span>{p.caption}</span>
            <span className={styles.credit}>{p.credit}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function VideoEmbed({ videoId, title, caption }) {
  const [ref, visible] = useReveal(0.1)
  return (
    <div ref={ref} className={`${styles.videoWrap} reveal ${visible ? 'visible' : ''}`}>
      <div className={styles.videoLabel}>{caption}</div>
      <div className={styles.videoFrame}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function Casualties() {
  const tollData = {
    labels: tollTimeline.labels,
    datasets: [{
      data: tollTimeline.data,
      borderColor: '#c0392b',
      backgroundColor: 'rgba(192,57,43,0.07)',
      fill: true, tension: 0.4,
      pointRadius: 3, pointBackgroundColor: '#c0392b',
      borderWidth: 2,
    }]
  }
  const tollOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: mono, size: 10 }, color: '#6b6860', maxRotation: 30 }, grid: { color: 'rgba(0,0,0,0.04)' } },
      y: { ticks: { font: { family: mono, size: 10 }, color: '#6b6860', callback: v => (v/1000).toFixed(0)+'k' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }
  const lifeData = {
    labels: lifeExpectancy.labels,
    datasets: [{ data: lifeExpectancy.data, backgroundColor: lifeExpectancy.colors, borderRadius: 3 }]
  }
  const lifeOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: mono, size: 11 }, color: '#6b6860' }, grid: { display: false } },
      y: { min: 0, max: 80, ticks: { font: { family: mono, size: 10 }, color: '#6b6860', callback: v => v+' yrs' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  return (
    <Section id="casualties" number="01 / Casualties" title="The" titleEm="human cost">
      <StatGrid cols={4}>
        <StatCell label="Confirmed killed (Gaza MoH)" value={casualties.confirmed} sub="As of March 2026" red />
        <StatCell label="Lancet estimate (violent deaths)" value={casualties.lancet} sub="Feb 2026" red />
        <StatCell label="MPIDR estimate incl. indirect" value={casualties.mpidr} sub="Max Planck Institute" red />
        <StatCell label="Lancet upper estimate" value={casualties.lancetUpper} sub="Includes disease, malnutrition" red />
        <StatCell label="Children killed" value={casualties.children} sub="~30% of confirmed deaths" />
        <StatCell label="Journalists killed" value={casualties.journalists} sub="CPJ / RSF" />
        <StatCell label="UNRWA staff killed" value={casualties.unrwaStaff} sub="Largest loss for any UN agency" />
        <StatCell label="Wounded" value={casualties.wounded} sub="Many with permanent disability" />
      </StatGrid>

      <PhotoGrid />

      <Rule />

      <ChartWrap label="Reported death toll — Oct 2023 to Mar 2026" height={280}>
        <Line data={tollData} options={tollOptions} />
      </ChartWrap>

      <Rule />

      <ChartWrap label="Life expectancy collapse (Max Planck Institute)" height={180} source="MPIDR, 2025 — A 44–47% collapse in a single year.">
        <Bar data={lifeData} options={lifeOptions} />
      </ChartWrap>

      <Rule />

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
          Who was killed — demographic breakdown
        </div>
        {demographics.map((d, i) => (
          <BarRow key={i} label={d.label} note={d.value} pct={d.pct} color={d.color} />
        ))}
      </div>

      <Rule />

      {/* Al Jazeera Fault Lines — The Night Won't End (Peabody Award winner) */}
      <VideoEmbed
        videoId="lBcMXGNn7s8"
        title="The Night Won't End — Al Jazeera Fault Lines"
        caption="'The Night Won't End' — Al Jazeera Fault Lines. Peabody Award winner 2025. Investigates civilian killings and the experiences of three Palestinian families."
      />

      <PullQuote>
        "The total number of deaths is likely to be much higher than that reported." — The Lancet, February 2026
      </PullQuote>
    </Section>
  )
}
