'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

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
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const sections = ['hero', ...homeSections.map((section) => section.id)]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
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

  const scrollToSection = (sectionId: string) => {
    if (!isHome) return
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 72
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = homeSections.map((item) => ({
    ...item,
    href: `/#${item.id}`,
  }))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="page-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-medium tracking-[0.2em] text-foreground">ANIRUD MOHAN</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            AI Engineer
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              !isHome ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative pb-1 font-mono text-xs uppercase tracking-[0.18em] transition ${
                    activeSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id ? (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-foreground" />
                  ) : null}
                </button>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition hover:bg-muted"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="page-shell flex flex-col gap-1 py-3">
            {navItems.map((item) =>
              !isHome ? (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-1 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-1 py-3 text-left font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
