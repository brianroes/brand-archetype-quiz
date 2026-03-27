import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brand Archetype Quiz — MasterBrand Studio',
  description:
    'Discover the brand archetypes that define your business identity. A 12-question AI-powered quiz from MasterBrand Studio.',
  openGraph: {
    title: 'Brand Archetype Quiz — MasterBrand Studio',
    description: 'Discover your brand archetypes in 12 powerful questions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
