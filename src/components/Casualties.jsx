import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, Filler, Tooltip,
} from 'chart.js'
import { Section, StatGrid, StatCell, BarRow, PullQuote, Rule, ChartWrap, Legend, VideoEmbed } from './UI'
import { casualties, tollTimeline, lifeExpectancy, demographics } from '../data/data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler, Tooltip)

const monoFont = "'IBM Plex Mono', monospace"

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
      x: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', maxRotation: 30 }, grid: { color: 'rgba(0,0,0,0.04)' } },
      y: { ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', callback: v => (v/1000).toFixed(0)+'k' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  const lifeData = {
    labels: lifeExpectancy.labels,
    datasets: [{
      data: lifeExpectancy.data,
      backgroundColor: lifeExpectancy.colors,
      borderRadius: 3,
    }]
  }
  const lifeOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { family: monoFont, size: 11 }, color: '#6b6860' }, grid: { display: false } },
      y: { min: 0, max: 80, ticks: { font: { family: monoFont, size: 10 }, color: '#6b6860', callback: v => v+' yrs' }, grid: { color: 'rgba(0,0,0,0.04)' } }
    }
  }

  return (
    <Section id="casualties" number="01 / Casualties" title="The" titleEm="human cost">
      <StatGrid cols={4}>
        <StatCell label="Confirmed killed (Gaza MoH)" value={casualties.confirmed} sub="As of March 2026" red />
        <StatCell label="Lancet estimate (violent deaths)" value={casualties.lancet} sub="Feb 2026" red />
        <StatCell label="MPIDR estimate incl. indirect" value={casualties.mpidr} sub="Max Planck Institute, Oct 2025" red />
        <StatCell label="Lancet upper estimate (total excess)" value={casualties.lancetUpper} sub="Includes disease, malnutrition" red />
        <StatCell label="Children killed" value={casualties.children} sub="~30% of confirmed deaths" />
        <StatCell label="Journalists killed" value={casualties.journalists} sub="CPJ / RSF" />
        <StatCell label="UNRWA staff killed" value={casualties.unrwaStaff} sub="Largest recorded loss for any UN agency" />
        <StatCell label="Wounded" value={casualties.wounded} sub="Many with permanent disability" />
      </StatGrid>

      <ChartWrap label="Reported death toll — Oct 2023 to Mar 2026" height={280}>
        <Line data={tollData} options={tollOptions} />
      </ChartWrap>

      <Rule />

      <ChartWrap
        label="Life expectancy collapse (Max Planck Institute)"
        height={180}
        source="MPIDR, 2025 — A 44–47% collapse in a single year."
      >
        <Bar data={lifeData} options={lifeOptions} />
      </ChartWrap>

      <Rule />

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
          Who was killed — demographic breakdown
        </div>
        {demographics.map((d, i) => (
          <BarRow key={i} label={d.label} note={d.value} pct={d.pct} color={d.color} />
        ))}
      </div>

      <Rule />

      <VideoEmbed
        src="https://www.youtube.com/embed/qeMz7C_MMYA"
        title="UNRWA — Gaza crisis overview"
        caption="UNRWA — Overview of the humanitarian situation in Gaza. Source: United Nations Relief and Works Agency."
      />

      <PullQuote>
        "The total number of deaths is likely to be much higher than that reported." — The Lancet, February 2026
      </PullQuote>
    </Section>
  )
}
