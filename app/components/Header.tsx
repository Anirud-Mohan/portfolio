'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const homeSections = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const sections = ['hero', ...homeSections.map((section) => section.id)]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 180 && rect.bottom >= 180
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (!isHome) return

    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 96
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    ...homeSections.map((item) => ({
      ...item,
      href: `/#${item.id}`,
    })),
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/10 bg-slate-950/70 shadow-glow backdrop-blur-xl'
            : 'border-white/5 bg-slate-950/35 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
              AM
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-white">ANIRUD MOHAN</p>
              <p className="text-xs text-slate-400">ML Engineer · Data Science</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) =>
            !isHome ? (
              <Link
                key={item.id}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm ${
                  pathname === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -12,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.2 }}
        className="mx-auto mt-3 max-w-7xl md:hidden"
      >
        <div className="surface-panel overflow-hidden p-3">
          <div className="grid gap-2">
            {navItems.map((item) =>
              !isHome ? (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header

