# Brand Archetype Quiz — MasterBrand Studio

A beautiful, AI-powered brand archetype quiz that reveals your top 2–3 brand archetypes through 12 carefully crafted questions and personalized AI analysis.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your Anthropic API key
cp .env.local.example .env.local
# Edit .env.local and add your key from console.anthropic.com

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Features

| Feature | Detail |
|---|---|
| **12 curated questions** | Each question maps to 1–2 of the 12 Jungian archetypes with weighted scoring |
| **AI analysis** | Claude `claude-opus-4.5` provides personalized, nuanced archetype profiles |
| **Top 2–3 archetypes** | Primary, Strong Secondary, and optional Complementary archetype |
| **Per-archetype detail** | Tagline, personalized description, 5 characteristics, 4 business tips, voice example, famous brands |
| **Beautiful UI** | Dark luxury design with gold accents, smooth screen transitions, Playfair Display + Inter typography |
| **Desktop-optimized** | Centered max-width layout, large typography, generous spacing |

---

## The 12 Brand Archetypes

| Archetype | Core Drive | Example Brands |
|---|---|---|
| **Hero** | Mastery & courage | Nike, FedEx, BMW |
| **Innocent** | Purity & optimism | Dove, Innocent, Cottonelle |
| **Outlaw** | Revolution & freedom | Harley-Davidson, Diesel |
| **Explorer** | Discovery & adventure | Patagonia, REI, Jeep |
| **Creator** | Innovation & expression | Apple, Adobe, Lego |
| **Everyman** | Belonging & reliability | IKEA, Walmart, Target |
| **Ruler** | Authority & excellence | Mercedes, Rolex, Amex |
| **Magician** | Transformation & vision | Disney, Dyson, Tesla |
| **Lover** | Intimacy & desire | Chanel, Victoria's Secret |
| **Caregiver** | Nurturing & service | Johnson & Johnson, UNICEF |
| **Jester** | Joy & spontaneity | Ben & Jerry's, M&Ms |
| **Sage** | Wisdom & truth | Google, BBC, McKinsey |

---

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **Tailwind CSS** — utility-first styling
- **AI SDK** — `generateText` with `@ai-sdk/anthropic`
- **Claude Opus 4.5** — AI-powered archetype analysis
- **Playfair Display + Inter** — via `next/font/google`

---

## File Structure

```
app/
  layout.tsx          Root layout with fonts & metadata
  globals.css         Design tokens, animations, custom classes
  page.tsx            Quiz orchestrator (client component)
  api/
    analyze/
      route.ts        AI analysis endpoint → returns AnalysisResult JSON

components/
  WelcomeScreen.tsx   Name entry + brand intro
  QuestionCard.tsx    Individual question with progress bar
  AnalyzingScreen.tsx Animated loading state during AI call
  ResultsScreen.tsx   Archetype cards with full profile

lib/
  types.ts            TypeScript interfaces
  archetypes.ts       Visual config per archetype (colors, symbols)
  questions.ts        All 12 questions with archetype scoring
```

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel link
vercel env add ANTHROPIC_API_KEY
vercel --prod
```

Or connect your GitHub repo to Vercel and set `ANTHROPIC_API_KEY` in Project Settings → Environment Variables.
