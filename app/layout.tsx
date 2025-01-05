import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ImmersiveBackground from './components/ImmersiveBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anirud Mohan - Portfolio',
  description: 'Showcase of professional work and skills in Machine Learning and Data Science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ImmersiveBackground />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

