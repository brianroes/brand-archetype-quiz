'use client'

import { useState } from 'react'

interface WelcomeScreenProps {
  onStart: (name: string) => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed.length < 2) return
    onStart(trimmed)
  }

  return (
    <div className="screen min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '60%',
          left: '20%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          right: '15%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-16 animate-stagger-1">
          <div
            className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <span style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
              MasterBrand Studio
            </span>
          </div>

          <h1
            className="font-serif mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', color: '#fff' }}
          >
            Discover Your{' '}
            <span className="text-gold-gradient">Brand Archetype</span>
          </h1>

          <p
            className="leading-relaxed max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.75 }}
          >
            Every iconic brand has a deep psychological identity — an archetype that shapes
            its voice, story, and connection with the world. Yours is waiting to be revealed.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12 animate-stagger-2">
          {[
            { num: '12', label: 'Questions' },
            { num: '12', label: 'Archetypes' },
            { num: 'AI', label: 'Powered' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-5 rounded-2xl"
              style={{
                background: 'rgba(17,17,32,0.6)',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              <div
                className="font-serif text-2xl font-bold mb-1"
                style={{ color: 'var(--gold)' }}
              >
                {stat.num}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Name form */}
        <form onSubmit={handleSubmit} className="animate-stagger-3">
          <div
            className="p-8 rounded-2xl glow-card"
            style={{
              background: 'rgba(13,13,26,0.8)',
              border: '1px solid rgba(201,168,76,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <label
              htmlFor="name"
              className="block mb-3 font-semibold text-sm tracking-widest uppercase"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your first name"
              className="gold-input mb-6"
              autoComplete="off"
              autoFocus
            />

            <button
              type="submit"
              disabled={name.trim().length < 2}
              className="btn-primary w-full"
            >
              Begin My Brand Journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>

        {/* Footer note */}
        <p className="text-center mt-8 animate-stagger-4" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Answer honestly for the most accurate results.{' '}
          <span style={{ color: 'rgba(201,168,76,0.6)' }}>Takes about 5 minutes.</span>
        </p>
      </div>
    </div>
  )
}
