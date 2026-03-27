import { NextRequest, NextResponse } from 'next/server'
import { fal } from '@fal-ai/client'

export const maxDuration = 60

// Archetype-specific image prompts — dark luxury brand aesthetic
const ARCHETYPE_PROMPTS: Record<string, string> = {
  Hero: 'a lone warrior standing on a mountain peak at golden hour, dramatic cinematic lighting, dark luxury brand aesthetic, powerful and triumphant, wide angle, photorealistic',
  Innocent: 'soft golden light through morning mist over a pristine meadow, pure and hopeful, warm luminous glow, ethereal atmosphere, wide angle, photorealistic',
  Outlaw: 'dark moody portrait of rebellion, leather and chrome, neon light on rain-slicked streets at night, cinematic, gritty luxury aesthetic',
  Explorer: 'vast untamed wilderness at dawn, lone figure on a ridge overlooking endless mountains, cinematic golden light, adventure and freedom, wide angle, photorealistic',
  Creator: 'artist atelier bathed in dramatic side light, art tools and canvases, creative energy, dark luxury aesthetic, cinematic composition, photorealistic',
  Everyman: 'warm authentic community gathering, honest hands and real faces, golden hour warmth, relatable humanity, documentary style, photorealistic',
  Ruler: 'grand architectural hall with soaring columns, dramatic upward angle, golden light shafts, authority and excellence, dark luxury aesthetic, photorealistic',
  Magician: 'swirling galaxies and light transforming into something beautiful, mystical energy, dark cosmic background with gold luminance, cinematic, photorealistic',
  Lover: 'intimate soft candlelight scene, rich textures of velvet and rose petals, romantic warmth, dark luxury aesthetic, cinematic composition, photorealistic',
  Caregiver: 'gentle hands cradling something precious, warm golden light, tender and nurturing, soft bokeh, heartfelt and human, photorealistic',
  Jester: 'vibrant confetti explosion against dark background, playful colors, joyful energy, whimsical yet premium, cinematic lighting, photorealistic',
  Sage: 'ancient library with soaring bookshelves, warm amber light, dust motes in light shafts, wisdom and knowledge, dark luxury aesthetic, photorealistic',
}

const DEFAULT_PROMPT = 'elegant dark luxury brand identity, cinematic lighting, golden accents, wide angle, photorealistic'

interface FalImageResult {
  images: Array<{ url: string; width: number; height: number }>
}

export async function POST(req: NextRequest) {
  try {
    const { archetype } = await req.json() as { archetype: string }

    fal.config({ credentials: process.env.FAL_KEY })

    const prompt = ARCHETYPE_PROMPTS[archetype] ?? DEFAULT_PROMPT
    const fullPrompt = `${prompt}, no text, no words, no logos, ultra high quality`

    const result = await fal.subscribe('fal-ai/flux/schnell', {
      input: {
        prompt: fullPrompt,
        image_size: 'landscape_16_9',
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: false,
      },
    }) as { data: FalImageResult }

    const imageUrl = result.data?.images?.[0]?.url
    if (!imageUrl) {
      throw new Error('No image returned from fal.ai')
    }

    return NextResponse.json({ imageUrl })
  } catch (err) {
    console.error('Image generation error:', err)
    return NextResponse.json(
      { error: 'Image generation failed' },
      { status: 500 }
    )
  }
}
