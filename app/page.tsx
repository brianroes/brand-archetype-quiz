'use client'

import { useState, useCallback, useRef } from 'react'
import { WelcomeScreen } from '@/components/WelcomeScreen'
import { QuestionCard } from '@/components/QuestionCard'
import { AnalyzingScreen } from '@/components/AnalyzingScreen'
import { ResultsScreen } from '@/components/ResultsScreen'
import { QUESTIONS } from '@/lib/questions'
import { ALL_ARCHETYPE_NAMES } from '@/lib/archetypes'
import type { Phase, ArchetypeScore, AnalysisResult } from '@/lib/types'

// Module-level: no component state → no stale-closure risk
function computeScores(options: number[]): ArchetypeScore[] {
  const tally: Record<string, number> = {}
  ALL_ARCHETYPE_NAMES.forEach((n) => (tally[n] = 0))

  options.forEach((optionIndex, qIndex) => {
    const question = QUESTIONS[qIndex]
    if (!question) return
    const option = question.options[optionIndex]
    if (!option) return
    option.archetypes.forEach(({ name, points }) => {
      tally[name] = (tally[name] ?? 0) + points
    })
  })

  return ALL_ARCHETYPE_NAMES.map((n) => ({ name: n, score: tally[n] ?? 0 }))
}

export default function Page() {
  const [phase, setPhase] = useState<Phase>('welcome')
  const [name, setName] = useState('')
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Canonical ref so handleAnswer always reads settled state, not a stale closure
  const selectedOptionsRef = useRef<number[]>([])
  const nameRef = useRef('')

  const handleStart = useCallback((enteredName: string) => {
    nameRef.current = enteredName
    setName(enteredName)
    setCurrentQ(0)
    selectedOptionsRef.current = []
    setSelectedOptions([])
    setPhase('quiz')
  }, [])

  const handleAnswer = useCallback(
    async (optionIndex: number, questionIndex: number) => {
      const newOptions = [...selectedOptionsRef.current, optionIndex]
      selectedOptionsRef.current = newOptions
      setSelectedOptions(newOptions)

      const isLast = questionIndex === QUESTIONS.length - 1

      if (!isLast) {
        setCurrentQ(questionIndex + 1)
        return
      }

      // All questions answered — start analysis
      setPhase('analyzing')
      setError(null)

      const scores = computeScores(newOptions)
      const answers = QUESTIONS.map((q, i) => ({
        question: q.question,
        chosen: q.options[newOptions[i]]?.text ?? '',
      }))

      try {
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: nameRef.current, answers, scores }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error((data as { error?: string }).error ?? 'Analysis failed')
        }

        const data = await res.json() as AnalysisResult

        // Validate shape before trusting it
        if (!Array.isArray(data.topArchetypes) || data.topArchetypes.length === 0) {
          throw new Error('Unexpected response format — please try again')
        }

        setResult(data)
        setPhase('results')
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Something went wrong'
        setError(msg)
        // Roll back: re-show last question without the failed answer
        const rolledBack = newOptions.slice(0, -1)
        selectedOptionsRef.current = rolledBack
        setSelectedOptions(rolledBack)
        setPhase('quiz')
        setCurrentQ(QUESTIONS.length - 1)
      }
    },
    [] // no deps — reads everything via refs or stable setters
  )

  // handleBack: guard lives in canGoBack prop, not inside this callback
  const handleBack = useCallback(() => {
    setCurrentQ((q) => {
      if (q === 0) return q
      selectedOptionsRef.current = selectedOptionsRef.current.slice(0, -1)
      setSelectedOptions((opts) => opts.slice(0, -1))
      return q - 1
    })
  }, [])

  const handleRestart = useCallback(() => {
    setPhase('welcome')
    setName('')
    nameRef.current = ''
    setCurrentQ(0)
    selectedOptionsRef.current = []
    setSelectedOptions([])
    setResult(null)
    setError(null)
  }, [])

  return (
    <>
      {/* Global background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'var(--bg)', zIndex: -1 }}
      />

      {/* Subtle grid texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          zIndex: -1,
        }}
      />

      {/* Error toast */}
      {error && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl text-sm animate-fade-up"
          style={{
            background: 'rgba(233,69,96,0.12)',
            border: '1px solid rgba(233,69,96,0.35)',
            color: '#fff',
            maxWidth: 420,
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex items-center gap-3">
            <span style={{ color: '#E94560', fontSize: '1rem' }}>⚠</span>
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              style={{ color: 'rgba(255,255,255,0.5)', marginLeft: 'auto' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Screens */}
      {phase === 'welcome' && <WelcomeScreen onStart={handleStart} />}

      {phase === 'quiz' && QUESTIONS[currentQ] && (
        <QuestionCard
          key={currentQ}
          question={QUESTIONS[currentQ]}
          questionIndex={currentQ}
          totalQuestions={QUESTIONS.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          canGoBack={currentQ > 0}
        />
      )}

      {phase === 'analyzing' && <AnalyzingScreen name={name} />}

      {phase === 'results' && result && (
        <ResultsScreen name={name} result={result} onRestart={handleRestart} />
      )}
    </>
  )
}
