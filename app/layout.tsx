import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import ImmersiveBackground from './components/ImmersiveBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anirud Mohan - Portfolio',
  description: 'Sleek portfolio for Anirud Mohan featuring machine learning work, experience, projects, and contact information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <ImmersiveBackground />
        <Header />
        <main className="relative isolate min-h-screen pt-24">{children}</main>
      </body>
    </html>
  )
}

