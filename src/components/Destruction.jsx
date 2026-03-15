import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { Section, StatGrid, StatCell, BarRow, PullQuote, Rule, ChartWrap, Legend, VideoEmbed } from './UI'
import { infrastructure, healthcare, economy } from '../data/data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
const monoFont = "'IBM Plex Mono', monospace"

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
      x: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860' }, grid: { display: false } },
      y: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  return (
    <Section id="destruction" number="02 / Destruction" title="Built environment" titleEm="erased">
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
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

      <VideoEmbed
        src="https://www.youtube.com/embed/5DesGiLyMok"
        title="Gaza infrastructure destruction — satellite footage"
        caption="Satellite imagery showing the scale of destruction across Gaza. Source: AP / Maxar Technologies."
      />

      <PullQuote>
        "Gaza needs 350 years to clear the rubble — if reconstruction started today." — UN Environment Programme, 2024
      </PullQuote>
    </Section>
  )
}
