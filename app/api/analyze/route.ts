import { NextRequest, NextResponse } from 'next/server'
import { generateText } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import type { ArchetypeScore } from '@/lib/types'

export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const { name, answers, scores } = await req.json() as {
      name: string
      answers: Array<{ question: string; chosen: string }>
      scores: ArchetypeScore[]
    }

    const sortedScores = [...scores].sort((a, b) => b.score - a.score)
    const topScores = sortedScores.slice(0, 5)
    const scoresText = topScores.map(s => `${s.name}: ${s.score} points`).join(', ')

    const answersText = answers
      .map((a, i) => `Q${i + 1}: "${a.question}" → "${a.chosen}"`)
      .join('\n')

    const prompt = `You are an expert brand strategist specializing in Jungian brand archetypes. You have deep knowledge of all 12 brand archetypes and how they manifest in business identity, marketing, and communication.

A business owner named ${name} just completed a brand archetype quiz. Here are their answers:

${answersText}

Their archetype score tally:
${scoresText}

Based on these answers and scores, identify their top 2 or 3 dominant brand archetypes. Use the scores as a guide but use qualitative judgment from their actual answers — if two archetypes are close in score but the answers clearly lean one way, trust the answers.

Return ONLY valid JSON (no markdown, no explanation, just JSON) in exactly this structure:
{
  "topArchetypes": [
    {
      "name": "one of: Hero, Innocent, Outlaw, Explorer, Creator, Everyman, Ruler, Magician, Lover, Caregiver, Jester, Sage",
      "rank": 1,
      "resonanceLevel": "Primary Archetype",
      "tagline": "a short 5-8 word brand tagline for this archetype",
      "personalizedDescription": "2-3 sentences specifically personalized to ${name}'s answers, describing how THIS archetype shows up in their brand identity. Be specific and insightful, not generic.",
      "characteristics": [
        "characteristic 1 (7-12 words)",
        "characteristic 2 (7-12 words)",
        "characteristic 3 (7-12 words)",
        "characteristic 4 (7-12 words)",
        "characteristic 5 (7-12 words)"
      ],
      "businessTips": [
        "Actionable tip 1 specific to their archetype (15-25 words)",
        "Actionable tip 2 specific to their archetype (15-25 words)",
        "Actionable tip 3 specific to their archetype (15-25 words)",
        "Actionable tip 4 specific to their archetype (15-25 words)"
      ],
      "voiceExample": "A single example sentence showing how this archetype speaks directly to customers (20-30 words)",
      "famousBrands": ["Brand 1", "Brand 2", "Brand 3"]
    }
  ],
  "personalizedMessage": "2-3 sentences addressed directly to ${name}, affirming their unique brand combination and what makes it powerful. Be warm, specific, and inspiring.",
  "brandPersonalitySummary": "One vivid sentence (max 20 words) describing ${name}'s overall brand personality blend."
}

For the second archetype, use "rank": 2 and "resonanceLevel": "Strong Secondary". If including a third, use "rank": 3 and "resonanceLevel": "Complementary Influence".

Only include a third archetype if it scored meaningfully and adds distinct value to the profile. Two well-developed archetypes are better than three shallow ones.`

    const { text } = await generateText({
      model: anthropic('claude-opus-4.5'),
      prompt,
      maxTokens: 2500,
    })

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('No JSON found in response')
    }

    const result = JSON.parse(jsonMatch[0])

    // Validate shape before returning — a bad model response should 500, not silently crash the client
    if (
      !Array.isArray(result?.topArchetypes) ||
      result.topArchetypes.length === 0 ||
      typeof result.personalizedMessage !== 'string' ||
      typeof result.brandPersonalitySummary !== 'string'
    ) {
      throw new Error('Model returned an unexpected response shape')
    }

    return NextResponse.json(result)
  } catch (err) {
    console.error('Analysis error:', err)
    return NextResponse.json(
      { error: 'Analysis failed. Please check your API key and try again.' },
      { status: 500 }
    )
  }
}
