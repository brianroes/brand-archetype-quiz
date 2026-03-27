'use client'

import { useState } from 'react'

interface WelcomeScreenProps {
  onStart: (name: string, businessDescription: string) => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('')
  const [businessDescription, setBusinessDescription] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedDesc = businessDescription.trim()
    if (trimmedName.length < 2 || trimmedDesc.length < 10) return
    onStart(trimmedName, trimmedDesc)
  }

  const canSubmit = name.trim().length >= 2 && businessDescription.trim().length >= 10

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
            className="font-serif mb-6 leading-tight font-semibold"
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="animate-stagger-3">
          <div
            className="p-8 rounded-2xl glow-card"
            style={{
              background: 'rgba(13,13,26,0.8)',
              border: '1px solid rgba(201,168,76,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Name field */}
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

            {/* Business description field */}
            <label
              htmlFor="businessDescription"
              className="block mb-3 font-semibold text-sm tracking-widest uppercase"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              Describe Your Business
            </label>
            <p
              className="mb-3 text-sm"
              style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
            >
              Tell us what you do, who you help, what your role is, and who your target audience is.
              The more specific you are, the more personalized your results will be.
            </p>
            <textarea
              id="businessDescription"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              placeholder="Example: I'm a business coach who helps women entrepreneurs in their 30s–50s build profitable online coaching businesses. My clients are professionals leaving corporate careers who want more freedom and impact. I help them develop their offer, brand, and marketing strategy."
              className="gold-input mb-6"
              rows={5}
              style={{ resize: 'vertical', minHeight: 120 }}
            />

            <button
              type="submit"
              disabled={!canSubmit}
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
