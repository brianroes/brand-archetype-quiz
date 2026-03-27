import type { QuizQuestion } from './types'

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What drives your business at its deepest core?",
    subtitle: "Think about why you started, not just what you sell.",
    options: [
      {
        text: "Inspiring people to overcome challenges and reach their full potential",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Magician', points: 1 }],
      },
      {
        text: "Bringing simplicity, goodness, and genuine positivity to people's lives",
        archetypes: [{ name: 'Innocent', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
      {
        text: "Disrupting the status quo and challenging how things have always been done",
        archetypes: [{ name: 'Outlaw', points: 2 }, { name: 'Creator', points: 1 }],
      },
      {
        text: "Building a lasting legacy of excellence, authority, and leadership",
        archetypes: [{ name: 'Ruler', points: 2 }, { name: 'Sage', points: 1 }],
      },
    ],
  },
  {
    id: 2,
    question: "If your ideal customer described your brand in one word, what would it be?",
    subtitle: "Choose the word that feels most true.",
    options: [
      {
        text: '"Trustworthy" — people rely on you completely',
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Sage', points: 1 }],
      },
      {
        text: '"Transformative" — you change people\'s lives',
        archetypes: [{ name: 'Magician', points: 2 }, { name: 'Hero', points: 1 }],
      },
      {
        text: '"Adventurous" — you take them somewhere new',
        archetypes: [{ name: 'Explorer', points: 2 }, { name: 'Outlaw', points: 1 }],
      },
      {
        text: '"Luxurious" — you give them beauty and desire',
        archetypes: [{ name: 'Lover', points: 2 }, { name: 'Ruler', points: 1 }],
      },
    ],
  },
  {
    id: 3,
    question: "What feeling do you most want customers to carry after working with you?",
    options: [
      {
        text: "Empowered — like they can conquer anything they face",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Magician', points: 1 }],
      },
      {
        text: "Loved and truly cared for — seen, supported, and safe",
        archetypes: [{ name: 'Caregiver', points: 2 }, { name: 'Lover', points: 1 }],
      },
      {
        text: "Delighted — lighter, more joyful, thoroughly entertained",
        archetypes: [{ name: 'Jester', points: 2 }, { name: 'Innocent', points: 1 }],
      },
      {
        text: "Enlightened — wiser, clearer, with knowledge that changes them",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Creator', points: 1 }],
      },
    ],
  },
  {
    id: 4,
    question: "Your brand's content naturally gravitates toward which of these?",
    subtitle: "What do you create most enthusiastically?",
    options: [
      {
        text: "Powerful before-and-after transformation stories",
        archetypes: [{ name: 'Magician', points: 2 }, { name: 'Hero', points: 1 }],
      },
      {
        text: "Authentic, relatable, human moments that feel real",
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
      {
        text: "Bold, provocative ideas that challenge conventional thinking",
        archetypes: [{ name: 'Outlaw', points: 2 }, { name: 'Creator', points: 1 }],
      },
      {
        text: "Deep expert insights and authoritative thought leadership",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Ruler', points: 1 }],
      },
    ],
  },
  {
    id: 5,
    question: "If your brand were a character in a movie, which role would it play?",
    options: [
      {
        text: "The wise mentor who gives the hero exactly what they need",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
      {
        text: "The fearless champion who never backs down from the fight",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Explorer', points: 1 }],
      },
      {
        text: "The creative rebel who rewrites the rules and shocks everyone",
        archetypes: [{ name: 'Creator', points: 2 }, { name: 'Outlaw', points: 1 }],
      },
      {
        text: "The magnetic romantic lead who captivates the whole room",
        archetypes: [{ name: 'Lover', points: 2 }, { name: 'Jester', points: 1 }],
      },
    ],
  },
  {
    id: 6,
    question: "Which visual world best represents your brand's aesthetic?",
    subtitle: "Close your eyes and picture your dream brand shoot.",
    options: [
      {
        text: "Clean, minimal, and pure — simplicity is the statement",
        archetypes: [{ name: 'Innocent', points: 2 }, { name: 'Everyman', points: 1 }],
      },
      {
        text: "Bold and commanding — power radiates from every pixel",
        archetypes: [{ name: 'Ruler', points: 2 }, { name: 'Hero', points: 1 }],
      },
      {
        text: "Artistic and expressive — every piece is a work of art",
        archetypes: [{ name: 'Creator', points: 2 }, { name: 'Lover', points: 1 }],
      },
      {
        text: "Mystical and atmospheric — like stepping into another world",
        archetypes: [{ name: 'Magician', points: 2 }, { name: 'Explorer', points: 1 }],
      },
    ],
  },
  {
    id: 7,
    question: "When a major competitor moves into your space, your instinct is to:",
    options: [
      {
        text: "Rise to the challenge — outperform them and prove you're the best",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Ruler', points: 1 }],
      },
      {
        text: "Out-create and out-innovate — surprise everyone with something unexpected",
        archetypes: [{ name: 'Creator', points: 2 }, { name: 'Jester', points: 1 }],
      },
      {
        text: "Stand even more firmly in your uniqueness — your difference is your armor",
        archetypes: [{ name: 'Outlaw', points: 2 }, { name: 'Explorer', points: 1 }],
      },
      {
        text: "Deepen customer relationships — loyalty makes competition irrelevant",
        archetypes: [{ name: 'Caregiver', points: 2 }, { name: 'Everyman', points: 1 }],
      },
    ],
  },
  {
    id: 8,
    question: "How do you naturally approach pricing and positioning?",
    options: [
      {
        text: "Accessible to all — great value should be available to everyone",
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Innocent', points: 1 }],
      },
      {
        text: "Premium pricing — the results are so transformational, they justify the investment",
        archetypes: [{ name: 'Magician', points: 2 }, { name: 'Ruler', points: 1 }],
      },
      {
        text: "Disruptive pricing — flip the model and shake the whole industry",
        archetypes: [{ name: 'Outlaw', points: 2 }, { name: 'Creator', points: 1 }],
      },
      {
        text: "Personalized and relationship-based — priced around the person, not the package",
        archetypes: [{ name: 'Lover', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
    ],
  },
  {
    id: 9,
    question: "What legacy do you want your business to leave behind?",
    subtitle: "Imagine the tribute written about your brand decades from now.",
    options: [
      {
        text: "It empowered millions of people to become the best version of themselves",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
      {
        text: "It created something the world had never seen and didn't know it needed",
        archetypes: [{ name: 'Creator', points: 2 }, { name: 'Magician', points: 1 }],
      },
      {
        text: "It set the unquestioned gold standard of wisdom in its field",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Ruler', points: 1 }],
      },
      {
        text: "It built a beloved community that made people feel like they truly belonged",
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Innocent', points: 1 }],
      },
    ],
  },
  {
    id: 10,
    question: "Your relationship with clients or customers feels most like:",
    options: [
      {
        text: "A trusted advisor — they come to you for guidance and your word is final",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Ruler', points: 1 }],
      },
      {
        text: "A loyal best friend — you're in their corner no matter what",
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Caregiver', points: 1 }],
      },
      {
        text: "An adventure partner — you explore new territory together",
        archetypes: [{ name: 'Explorer', points: 2 }, { name: 'Outlaw', points: 1 }],
      },
      {
        text: "A passionate champion — you fight for their dreams like they're your own",
        archetypes: [{ name: 'Hero', points: 2 }, { name: 'Lover', points: 1 }],
      },
    ],
  },
  {
    id: 11,
    question: "Which value resonates most powerfully with your brand's soul?",
    options: [
      {
        text: "Freedom — breaking limits, exploring new horizons, going your own way",
        archetypes: [{ name: 'Explorer', points: 2 }, { name: 'Outlaw', points: 1 }],
      },
      {
        text: "Excellence — mastery, precision, setting the highest standards",
        archetypes: [{ name: 'Ruler', points: 2 }, { name: 'Sage', points: 1 }],
      },
      {
        text: "Transformation — turning the ordinary into the extraordinary",
        archetypes: [{ name: 'Magician', points: 2 }, { name: 'Creator', points: 1 }],
      },
      {
        text: "Connection — belonging, warmth, genuine human relationship",
        archetypes: [{ name: 'Everyman', points: 2 }, { name: 'Lover', points: 1 }],
      },
    ],
  },
  {
    id: 12,
    question: "Picture your brand ten years from now at its absolute peak. It has become:",
    subtitle: "This is your north star. Don't hold back.",
    options: [
      {
        text: "The undisputed category leader — the name everyone thinks of first",
        archetypes: [{ name: 'Ruler', points: 2 }, { name: 'Hero', points: 1 }],
      },
      {
        text: "A beloved icon — the brand that made people feel truly seen and loved",
        archetypes: [{ name: 'Caregiver', points: 2 }, { name: 'Innocent', points: 1 }],
      },
      {
        text: "A cultural disruptor — the brand that permanently changed how people think",
        archetypes: [{ name: 'Outlaw', points: 2 }, { name: 'Creator', points: 1 }],
      },
      {
        text: "The most trusted source — the one everyone turns to for truth and wisdom",
        archetypes: [{ name: 'Sage', points: 2 }, { name: 'Magician', points: 1 }],
      },
    ],
  },
]
