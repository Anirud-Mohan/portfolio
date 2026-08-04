import './globals.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import Header from './components/Header'
import PointerAura from './components/PointerAura'
import { ThemeProvider } from './components/ThemeProvider'

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

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.classList.add(theme);
  } catch {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background font-sans text-foreground">
        <ThemeProvider>
          <PointerAura />
          <Header />
          <main className="relative min-h-screen pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
