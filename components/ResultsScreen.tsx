'use client'

import { ARCHETYPE_VISUALS } from '@/lib/archetypes'
import type { AnalysisResult } from '@/lib/types'

interface ResultsScreenProps {
  name: string
  result: AnalysisResult
  onRestart: () => void
}

export function ResultsScreen({ name, result, onRestart }: ResultsScreenProps) {
  const { topArchetypes, personalizedMessage, brandPersonalitySummary, archetypeBlend, contentIdeas } = result

  const primaryVisual = ARCHETYPE_VISUALS[topArchetypes[0]?.name] ?? ARCHETYPE_VISUALS['Sage']
  const secondaryVisual = topArchetypes[1] ? (ARCHETYPE_VISUALS[topArchetypes[1].name] ?? ARCHETYPE_VISUALS['Sage']) : null

  return (
    <div className="min-h-screen px-6 py-16 relative overflow-hidden screen">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14 animate-stagger-1">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              color: 'var(--gold)',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              letterSpacing: '0.15em',
            }}
          >
            <span>✦</span>
            <span>Brand Archetype Profile</span>
            <span>✦</span>
          </div>

          <h1
            className="font-serif mb-5 leading-tight font-semibold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff' }}
          >
            {name}'s{' '}
            <span className="text-gold-shimmer">Brand Identity</span>
          </h1>

          {/* Personality summary */}
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-6"
            style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}
          >
            {brandPersonalitySummary}
          </p>

          {/* Personalized message box */}
          <div
            className="text-left p-6 rounded-2xl max-w-xl mx-auto"
            style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <div
              className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1l1.3 2.6L10 4.2l-2 1.95.47 2.75L6 7.5 3.53 8.9 4 6.15 2 4.2l2.7-.6L6 1z" fill="currentColor" />
              </svg>
              A Message for You
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {personalizedMessage}
            </p>
          </div>
        </div>

        {/* Archetype Cards */}
        <div className="space-y-8">
          {topArchetypes.map((archetype, index) => {
            const visual = ARCHETYPE_VISUALS[archetype.name] ?? ARCHETYPE_VISUALS['Sage']
            const delay = index * 0.15

            return (
              <div
                key={archetype.name}
                className="archetype-card animate-fade-up"
                style={{
                  animationDelay: `${delay + 0.3}s`,
                  animationFillMode: 'both',
                }}
              >
                {/* Card glow overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${visual.glowColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${visual.accentColor}60, transparent)`,
                  }}
                />

                <div className="relative z-10 p-8">
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center gap-5">
                      {/* Symbol */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${visual.gradientFrom}, rgba(17,17,32,0.6))`,
                          border: `1px solid ${visual.accentColor}30`,
                          color: visual.accentColor,
                          boxShadow: `0 0 20px ${visual.glowColor}`,
                          fontSize: '1.6rem',
                        }}
                      >
                        {visual.symbol}
                      </div>

                      <div>
                        <div
                          className="text-xs font-bold tracking-widest uppercase mb-1"
                          style={{ color: visual.accentColor, letterSpacing: '0.15em', opacity: 0.8 }}
                        >
                          {archetype.resonanceLevel}
                        </div>
                        <h2
                          className="font-serif font-semibold"
                          style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#fff', lineHeight: 1.2 }}
                        >
                          The {archetype.name}
                        </h2>
                      </div>
                    </div>

                    {/* Rank badge */}
                    <div
                      className="badge"
                      style={{
                        background: `${visual.accentColor}15`,
                        border: `1px solid ${visual.accentColor}30`,
                        color: visual.accentColor,
                      }}
                    >
                      #{archetype.rank}
                    </div>
                  </div>

                  {/* Tagline */}
                  <div
                    className="font-serif italic text-lg mb-5"
                    style={{ color: visual.accentColor, opacity: 0.9 }}
                  >
                    "{archetype.tagline}"
                  </div>

                  {/* Description */}
                  <p
                    className="leading-relaxed mb-8"
                    style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontSize: '0.97rem' }}
                  >
                    {archetype.personalizedDescription}
                  </p>

                  {/* Divider */}
                  <div
                    className="mb-8"
                    style={{ height: 1, background: `linear-gradient(90deg, ${visual.accentColor}20, transparent)` }}
                  />

                  {/* Two-column: Characteristics + Business Tips */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Characteristics */}
                    <div>
                      <h3
                        className="text-xs font-bold tracking-widest uppercase mb-4"
                        style={{ color: visual.accentColor, letterSpacing: '0.15em', opacity: 0.8 }}
                      >
                        Core Characteristics
                      </h3>
                      <ul className="space-y-3">
                        {archetype.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                              style={{ background: visual.accentColor }}
                            />
                            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                              {char}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Tips */}
                    <div>
                      <h3
                        className="text-xs font-bold tracking-widest uppercase mb-4"
                        style={{ color: visual.accentColor, letterSpacing: '0.15em', opacity: 0.8 }}
                      >
                        Apply to Your Business
                      </h3>
                      <ul className="space-y-3">
                        {archetype.businessTips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 mt-1 text-xs font-bold"
                              style={{ color: visual.accentColor, minWidth: 16 }}
                            >
                              {i + 1}.
                            </div>
                            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                              {tip}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Voice example */}
                  <div
                    className="rounded-xl p-5 mb-6"
                    style={{
                      background: `${visual.accentColor}08`,
                      border: `1px solid ${visual.accentColor}20`,
                    }}
                  >
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: visual.accentColor, letterSpacing: '0.15em', opacity: 0.7 }}
                    >
                      Your Brand Voice
                    </div>
                    <p
                      className="font-serif italic"
                      style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6 }}
                    >
                      "{archetype.voiceExample}"
                    </p>
                  </div>

                  {/* Famous brands */}
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: visual.accentColor, letterSpacing: '0.15em', opacity: 0.7 }}
                    >
                      Brands That Share This Archetype
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {archetype.famousBrands.map((brand) => (
                        <span
                          key={brand}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            background: `${visual.accentColor}10`,
                            border: `1px solid ${visual.accentColor}25`,
                            color: 'rgba(255,255,255,0.7)',
                          }}
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Archetype Blend Section */}
        {archetypeBlend && secondaryVisual && (
          <div
            className="mt-10 rounded-2xl overflow-hidden animate-fade-up"
            style={{
              animationDelay: '0.6s',
              animationFillMode: 'both',
              background: 'var(--card)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Dual-color top bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${primaryVisual.accentColor}, ${secondaryVisual.accentColor})`,
              }}
            />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${primaryVisual.gradientFrom}, ${secondaryVisual.gradientFrom})`,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  ⚡
                </div>
                <div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-0.5"
                    style={{ color: 'var(--gold)', letterSpacing: '0.15em', opacity: 0.8 }}
                  >
                    Your Archetype Blend
                  </div>
                  <h2
                    className="font-serif font-semibold"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#fff' }}
                  >
                    {archetypeBlend.title}
                  </h2>
                </div>
              </div>

              {/* Archetype pill tags */}
              <div className="flex gap-3 mb-6 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${primaryVisual.accentColor}15`,
                    border: `1px solid ${primaryVisual.accentColor}40`,
                    color: primaryVisual.accentColor,
                  }}
                >
                  {topArchetypes[0]?.name}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', alignSelf: 'center' }}>+</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${secondaryVisual.accentColor}15`,
                    border: `1px solid ${secondaryVisual.accentColor}40`,
                    color: secondaryVisual.accentColor,
                  }}
                >
                  {topArchetypes[1]?.name}
                </span>
              </div>

              {/* Description */}
              <p
                className="leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontSize: '0.97rem' }}
              >
                {archetypeBlend.description}
              </p>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ height: 1, background: 'rgba(255,255,255,0.06)' }}
              />

              {/* Strategies */}
              <div>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: 'var(--gold)', letterSpacing: '0.15em', opacity: 0.8 }}
                >
                  How to Activate This Combination
                </h3>
                <ul className="space-y-4">
                  {archetypeBlend.strategies.map((strategy, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{
                          background: 'rgba(201,168,76,0.12)',
                          border: '1px solid rgba(201,168,76,0.25)',
                          color: 'var(--gold)',
                        }}
                      >
                        {i + 1}
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        {strategy}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Content Ideas Section */}
        {contentIdeas && (
          <div
            className="mt-10 rounded-2xl overflow-hidden animate-fade-up"
            style={{
              animationDelay: '0.75s',
              animationFillMode: 'both',
              background: 'var(--card)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Top accent bar */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.8), rgba(232,201,122,0.4), transparent)' }}
            />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-lg flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  ✍️
                </div>
                <div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-0.5"
                    style={{ color: 'var(--gold)', letterSpacing: '0.15em', opacity: 0.8 }}
                  >
                    Content Strategy
                  </div>
                  <h2
                    className="font-serif font-semibold"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#fff' }}
                  >
                    Content Ideas for Your Brand
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Social Media */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-1 h-4 rounded-full"
                      style={{ background: primaryVisual.accentColor }}
                    />
                    <h3
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: primaryVisual.accentColor, letterSpacing: '0.15em', opacity: 0.9 }}
                    >
                      Social Media Posts
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {contentIdeas.socialMedia.map((idea, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{
                          background: `${primaryVisual.accentColor}06`,
                          border: `1px solid ${primaryVisual.accentColor}15`,
                        }}
                      >
                        <div
                          className="flex-shrink-0 text-xs font-bold mt-0.5"
                          style={{ color: primaryVisual.accentColor, minWidth: 18 }}
                        >
                          {i + 1}.
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                          {idea}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog Posts */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-1 h-4 rounded-full"
                      style={{ background: secondaryVisual?.accentColor ?? 'var(--gold)' }}
                    />
                    <h3
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: secondaryVisual?.accentColor ?? 'var(--gold)', letterSpacing: '0.15em', opacity: 0.9 }}
                    >
                      Blog Post Ideas
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {contentIdeas.blogPosts.map((idea, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{
                          background: `${secondaryVisual?.accentColor ?? 'var(--gold)'}06`,
                          border: `1px solid ${secondaryVisual?.accentColor ?? 'var(--gold)'}15`,
                        }}
                      >
                        <div
                          className="flex-shrink-0 text-xs font-bold mt-0.5"
                          style={{ color: secondaryVisual?.accentColor ?? 'var(--gold)', minWidth: 18 }}
                        >
                          {i + 1}.
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                          {idea}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div
          className="text-center mt-16 pt-12 animate-fade-up"
          style={{
            borderTop: '1px solid rgba(201,168,76,0.1)',
            animationDelay: '0.9s',
            animationFillMode: 'both',
          }}
        >
          <div
            className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(201,168,76,0.5)', letterSpacing: '0.15em' }}
          >
            MasterBrand Studio
          </div>
          <p
            className="mb-8 max-w-sm mx-auto"
            style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}
          >
            Your archetypes are your brand's foundation. Use them to guide every decision —
            from messaging to visuals to the offers you create.
          </p>
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: 'var(--gold)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.12)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.07)'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Retake the Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
