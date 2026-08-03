'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Highlight } from '../data/highlights'

export default function HighlightDetail({ highlight }: { highlight: Highlight | undefined }) {
  const router = useRouter()

  if (!highlight) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-sm text-muted-foreground">Highlight not found.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-muted-foreground"
          >
            Back to home
          </button>
        </div>
      </div>
    )
  }

  const categoryLabel =
    highlight.category === 'experience'
      ? 'Experience'
      : highlight.category === 'project'
        ? 'Project'
        : 'Education'

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <button
          onClick={() => router.push('/')}
          className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Home
        </button>

        <div className="border border-border bg-card p-8 sm:p-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{highlight.icon}</span>
              <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {categoryLabel}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">{highlight.title}</h1>

            {highlight.position ? <p className="mt-2 text-lg text-muted-foreground">{highlight.position}</p> : null}
            {highlight.institution ? (
              <p className="mt-2 text-lg text-muted-foreground">{highlight.institution}</p>
            ) : null}

            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{highlight.date}</p>
          </motion.div>

          <div className="my-6 h-px w-full bg-border" />

          <div className="space-y-4">
            {highlight.description.map((paragraph, i) => (
              <p key={i} className="text-sm leading-7 text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {highlight.technologies && highlight.technologies.length > 0 ? (
            <div className="mt-8">
              <p className="section-label mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {highlight.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {highlight.links && highlight.links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {highlight.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  )
}
