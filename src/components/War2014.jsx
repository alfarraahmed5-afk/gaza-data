import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { Section, BarRow, Rule, ChartWrap, Legend, PullQuote } from './UI'
import { warOf2014 } from '../data/data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
const monoFont = "'IBM Plex Mono', monospace"

export default function War2014() {
  const chartData = {
    labels: warOf2014.labels,
    datasets: [
      { label: 'Gaza', data: warOf2014.gaza, backgroundColor: '#c0392b', borderRadius: 3 },
      { label: 'Israel', data: warOf2014.israel, backgroundColor: '#6b6860', borderRadius: 3 },
    ]
  }
  const chartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', maxRotation: 20 }, grid: { display: false } },
      y: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  return (
    <Section id="war2014" number="05 / 2014 War" title="Operation Protective Edge —" titleEm="the numbers">
      <Legend items={[{ color: '#c0392b', label: 'Gaza' }, { color: '#6b6860', label: 'Israel' }]} />
      <ChartWrap label="Casualties and destruction — Gaza vs Israel, 2014" height={300}
        source="Source: UN OCHA 2014, cited in Al Farra, AUS research 2023–24.">
        <Bar data={chartData} options={chartOptions} />
      </ChartWrap>

      <Rule />

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
          Selected ratios — Gaza vs Israel
        </div>
        {warOf2014.ratios.map((r, i) => (
          <BarRow
            key={i}
            label={`${r.label} — ratio ${r.ratio}`}
            note={`${r.gaza.toLocaleString()} vs ${r.israel}`}
            pct={r.israel === 0 ? 100 : Math.min(99.9, (r.gaza / (r.gaza + r.israel)) * 100)}
            color={i < 2 ? '#c0392b' : '#993c1d'}
          />
        ))}
      </div>

      <PullQuote>
        "More than 2,200 Palestinians were killed. 550 of them were children. 73 medical facilities were damaged or destroyed. Israel sustained zero." — UN OCHA, 2014
      </PullQuote>
    </Section>
  )
}
