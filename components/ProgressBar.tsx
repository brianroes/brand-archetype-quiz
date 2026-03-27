'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold-dim">
          Question {current} of {total}
        </span>
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          {pct}%
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
