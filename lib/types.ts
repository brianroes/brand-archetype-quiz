export type Phase = 'welcome' | 'quiz' | 'analyzing' | 'results'

export interface QuizOption {
  text: string
  archetypes: Array<{ name: string; points: number }>
}

export interface QuizQuestion {
  id: number
  question: string
  subtitle?: string
  options: QuizOption[]
}

export interface ArchetypeScore {
  name: string
  score: number
}

export interface ArchetypeResult {
  name: string
  rank: number
  resonanceLevel: string
  tagline: string
  personalizedDescription: string
  characteristics: string[]
  businessTips: string[]
  voiceExample: string
  famousBrands: string[]
}

export interface AnalysisResult {
  topArchetypes: ArchetypeResult[]
  personalizedMessage: string
  brandPersonalitySummary: string
}

export interface ArchetypeVisual {
  name: string
  symbol: string
  accentColor: string
  glowColor: string
  gradientFrom: string
  gradientTo: string
}
