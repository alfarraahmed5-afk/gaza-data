import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { Section, StatGrid, StatCell, BarRow, PullQuote, Rule, ChartWrap, Legend } from './UI'
import { infrastructure, healthcare, economy } from '../data/data'
import { useReveal } from '../hooks/useReveal'
import styles from './Media.module.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
const mono = "'IBM Plex Mono', monospace"

function PhotoStrip() {
  const [ref, visible] = useReveal(0.1)
  const photos = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gaza_war_2023_-_2025_IMG_0064.jpg/800px-Gaza_war_2023_-_2025_IMG_0064.jpg',
      caption: 'Gaza, 2023–2025 conflict',
      credit: 'Wikimedia Commons / CC BY-SA 4.0'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Gaza_war_2023_-_2025_IMG_2016.jpg/800px-Gaza_war_2023_-_2025_IMG_2016.jpg',
      caption: 'Gaza, 2023–2025 conflict',
      credit: 'Wikimedia Commons / CC BY-SA 4.0'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Faris_Oil_Station_after_being_bombed_in_Gaza_war_23-25.jpg/800px-Faris_Oil_Station_after_being_bombed_in_Gaza_war_23-25.jpg',
      caption: 'Faris Oil Station after bombing',
      credit: 'Wikimedia Commons / CC BY-SA 4.0'
    },
  ]
  return (
    <div ref={ref} className={`${styles.photoStrip} reveal ${visible ? 'visible' : ''}`}>
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

export default function Destruction() {
  const healthData = {
    labels: healthcare.labels,
    datasets: [
      { label: 'Pre-war', data: healthcare.preWar, backgroundColor: '#1a7a5e', borderRadius: 3 },
      { label: 'Currently functional', data: healthcare.current, backgroundColor: '#c0392b', borderRadius: 3 },
    ]
  }
  const healthOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: mono, size: 10 }, color: '#6b6860' }, grid: { display: false } },
      y: { ticks: { font: { family: mono, size: 10 }, color: '#6b6860' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  return (
    <Section id="destruction" number="02 / Destruction" title="Built environment" titleEm="erased">
      <PhotoStrip />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
          Infrastructure destruction — percentage damaged or destroyed
        </div>
        {infrastructure.map((d, i) => (
          <BarRow key={i} label={d.label} note={d.note} pct={d.pct} color={i < 3 ? 'var(--accent)' : '#993c1d'} />
        ))}
      </div>

      <Rule />

      <Legend items={[{ color: '#1a7a5e', label: 'Pre-war' }, { color: '#c0392b', label: 'Currently functional' }]} />
      <ChartWrap label="Healthcare system collapse" height={220} source="WHO, UNRWA, OCHA — March 2026">
        <Bar data={healthData} options={healthOptions} />
      </ChartWrap>

      <Rule />

      <StatGrid cols={4}>
        {economy.map((e, i) => (
          <StatCell key={i} label={e.label} value={e.value} sub={e.sub} red />
        ))}
      </StatGrid>

      <Rule />

      {/* Al Jazeera — Starving Gaza documentary */}
      <VideoEmbed
        videoId="0BdkbGHTsT4"
        title="Starving Gaza — Al Jazeera Fault Lines"
        caption="'Starving Gaza' — Al Jazeera Fault Lines. Investigates how Israel used hunger as a weapon of war, killing civilians seeking aid."
      />

      <PullQuote>
        "Gaza needs 350 years to clear the rubble — if reconstruction started today." — UN Environment Programme, 2024
      </PullQuote>
    </Section>
  )
}
