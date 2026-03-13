'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Highlight } from '../data/highlights'

export default function HighlightDetail({ highlight }: { highlight: Highlight | undefined }) {
  const router = useRouter()

  if (!highlight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 text-lg">Highlight not found.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 text-[#00FFD1] hover:underline text-sm font-mono"
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
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl"
      >
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-white/40 hover:text-[#00FFD1] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-xs font-mono tracking-wider uppercase">Home</span>
        </motion.button>

        {/* Glassmorphic card */}
        <div
          className="relative rounded-2xl p-8 sm:p-10 backdrop-blur-xl border border-white/10 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${highlight.accentColor}08, transparent 50%, ${highlight.accentColor}04)`,
            boxShadow: `0 0 60px ${highlight.accentColor}08`,
          }}
        >
          {/* Accent line */}
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${highlight.accentColor}40, transparent)`,
            }}
          />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{highlight.icon}</span>
              <span
                className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border"
                style={{
                  color: highlight.accentColor,
                  borderColor: `${highlight.accentColor}30`,
                  backgroundColor: `${highlight.accentColor}10`,
                }}
              >
                {categoryLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              {highlight.title}
            </h1>

            {highlight.position && (
              <p className="text-white/60 text-lg mt-1">{highlight.position}</p>
            )}
            {highlight.institution && (
              <p className="text-white/60 text-lg mt-1">{highlight.institution}</p>
            )}

            <p className="text-white/30 text-sm font-mono mt-2">{highlight.date}</p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 my-6" />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            {highlight.description.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="text-white/60 leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Technologies */}
          {highlight.technologies && highlight.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-white/20 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {highlight.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full font-mono border border-white/10 text-white/50
                               hover:border-white/20 hover:text-white/70 transition-all duration-300"
                    style={{
                      backgroundColor: `${highlight.accentColor}08`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          {highlight.links && highlight.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlight.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-lg
                             border border-white/10 text-white/50
                             hover:border-white/25 hover:text-white/80 hover:bg-white/5
                             transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
