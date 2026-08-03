import './globals.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import Header from './components/Header'
import PointerAura from './components/PointerAura'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Anirud Mohan - Portfolio',
  description: 'Portfolio of Anirud Mohan — machine learning engineer working across AI systems, research, and products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="bg-background font-sans text-foreground">
        <PointerAura />
        <Header />
        <main className="relative min-h-screen pt-16">{children}</main>
      </body>
    </html>
  )
}
