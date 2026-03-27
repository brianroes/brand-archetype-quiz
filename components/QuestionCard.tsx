'use client'

import { useState, useEffect } from 'react'
import { ProgressBar } from './ProgressBar'
import type { QuizQuestion } from '@/lib/types'

interface QuestionCardProps {
  question: QuizQuestion
  questionIndex: number
  totalQuestions: number
  onAnswer: (optionIndex: number, questionIndex: number) => void
  onBack: () => void
  canGoBack: boolean
}

export function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onBack,
  canGoBack,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setSelected(null)
    setAnimKey((k) => k + 1)
  }, [question.id])

  function handleSelect(index: number) {
    setSelected(index)
    setTimeout(() => onAnswer(index, questionIndex), 380)
  }

  return (
    <div className="screen min-h-screen flex flex-col items-center px-6 py-10 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="w-full max-w-2xl mx-auto mb-10 relative z-10">
        <div className="flex items-center justify-between mb-6">
          {canGoBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-2 transition-colors"
              style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : (
            <div />
          )}

          <div
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: 'rgba(201,168,76,0.7)',
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.12)',
              letterSpacing: '0.15em',
            }}
          >
            MasterBrand Studio
          </div>
        </div>

        <ProgressBar current={questionIndex + 1} total={totalQuestions} />
      </div>

      {/* Question */}
      <div
        key={animKey}
        className="question-enter w-full max-w-2xl mx-auto flex-1 flex flex-col justify-center relative z-10"
      >
        <div className="mb-10 text-center">
          <div
            className="font-serif mb-4 leading-tight font-semibold"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', color: '#fff', lineHeight: 1.3 }}
          >
            {question.question}
          </div>
          {question.subtitle && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {question.subtitle}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="stagger grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selected !== null}
              className={`option-btn animate-fade-up ${selected === index ? 'selected' : ''}`}
            >
              <div className="flex items-start gap-4">
                {/* Index letter */}
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{
                    background: selected === index ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.05)',
                    border: selected === index ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(255,255,255,0.08)',
                    color: selected === index ? 'var(--gold)' : 'var(--text-muted)',
                    marginTop: '1px',
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                <span
                  className="text-base leading-relaxed transition-colors duration-200"
                  style={{ color: selected === index ? '#fff' : 'rgba(255,255,255,0.85)' }}
                >
                  {option.text}
                </span>

                {selected === index && (
                  <div className="flex-shrink-0 ml-auto">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center animate-fade-in"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#0A0A12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-10" />
    </div>
  )
}
