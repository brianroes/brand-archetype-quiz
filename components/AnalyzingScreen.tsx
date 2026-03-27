'use client'

import { useEffect, useState } from 'react'

interface AnalyzingScreenProps {
  name: string
}

const MESSAGES = [
  'Reading your brand signals…',
  'Mapping your archetype DNA…',
  'Consulting the brand oracle…',
  'Weaving your identity profile…',
  'Crafting your brand story…',
]

export function AnalyzingScreen({ name }: AnalyzingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="screen min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Deep background glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, rgba(201,168,76,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Rotating outer ring */}
      <div className="relative mb-12" style={{ width: 200, height: 200 }}>
        {/* Outer orbit ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(201,168,76,0.12)',
            animation: 'orbRotate 12s linear infinite',
          }}
        />
        {/* Orbit dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            background: 'var(--gold)',
            boxShadow: '0 0 12px rgba(201,168,76,0.8)',
            top: -4,
            left: '50%',
            marginLeft: -4,
            animation: 'orbRotate 12s linear infinite',
            transformOrigin: '4px 104px',
          }}
        />

        {/* Middle ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 20,
            border: '1px solid rgba(129,140,248,0.15)',
            animation: 'orbRotate 8s linear infinite reverse',
          }}
        />
        {/* Middle orbit dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background: '#818CF8',
            boxShadow: '0 0 10px rgba(129,140,248,0.8)',
            top: 17,
            left: '50%',
            marginLeft: -3,
            animation: 'orbRotate 8s linear infinite reverse',
            transformOrigin: '3px 83px',
          }}
        />

        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 44,
            border: '1px solid rgba(244,114,182,0.12)',
            animation: 'orbRotate 5s linear infinite',
          }}
        />

        {/* Center orb */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            inset: 60,
            background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.05) 60%, transparent 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            animation: 'orbPulse 2.5s ease-in-out infinite',
          }}
        >
          <div
            className="font-serif"
            style={{ color: 'var(--gold)', fontSize: '1.4rem' }}
          >
            ✦
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center max-w-md">
        <h2
          className="font-serif mb-3"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#fff' }}
        >
          Analyzing{' '}
          <span className="text-gold-gradient">{name}'s</span>
          {' '}Brand
        </h2>

        <div style={{ height: 28, overflow: 'hidden', position: 'relative' }}>
          <p
            key={messageIndex}
            className="animate-fade-in"
            style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}
          >
            {MESSAGES[messageIndex]}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 6,
                height: 6,
                background: i <= messageIndex ? 'var(--gold)' : 'rgba(201,168,76,0.2)',
                transition: 'background 0.3s ease',
                boxShadow: i <= messageIndex ? '0 0 8px rgba(201,168,76,0.5)' : 'none',
              }}
            />
          ))}
        </div>

        <p
          className="mt-8 text-sm"
          style={{ color: 'rgba(122,122,153,0.5)', fontSize: '0.8rem' }}
        >
          This usually takes 10–20 seconds
        </p>
      </div>
    </div>
  )
}
