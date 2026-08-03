'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { highlights, type Highlight } from '../data/highlights'
import { cn } from '../lib/utils'

const CATEGORY_STYLES: Record<
  string,
  { borderColor: string; labelColor: string; label: string; glowColor: string }
> = {
  experience: {
    borderColor: 'rgba(0, 255, 209, 0.35)',
    labelColor: '#00FFD1',
    label: 'Experience',
    glowColor: 'rgba(0, 255, 209, 0.12)',
  },
  project: {
    borderColor: 'rgba(123, 97, 255, 0.35)',
    labelColor: '#7B61FF',
    label: 'Project',
    glowColor: 'rgba(123, 97, 255, 0.12)',
  },
  education: {
    borderColor: 'rgba(255, 217, 61, 0.35)',
    labelColor: '#FFD93D',
    label: 'Education',
    glowColor: 'rgba(255, 217, 61, 0.12)',
  },
}

// Positions arranged in a wide ring around center, grouped by category.
// Experiences on the left, Projects across top-right and right, Education bottom.
// All positions use percentage offsets from center (50%, 50%) and are pushed
// far enough out to never overlap the center hero text.
const BUBBLE_LAYOUT: { slug: string; x: number; y: number }[] = [
  // Experience - left side
  { slug: 'carina-ai',          x: 10, y: 30 },
  { slug: 'thapovan',           x: 8,  y: 62 },
  // Projects - top and right
  { slug: 'brain-mri',          x: 35, y: 6 },
  { slug: 'code-reviewer',      x: 68, y: 6 },
  { slug: 'finance-forecasting', x: 88, y: 30 },
  { slug: 'info-spread',        x: 90, y: 60 },
  { slug: 'alzheimers',         x: 68, y: 85 },
  // Education - bottom left
  { slug: 'umd',                x: 30, y: 85 },
]

function Bubble({
  highlight,
  layoutPos,
  index,
  isMobile,
  compact,
}: {
  highlight: Highlight
  layoutPos: { x: number; y: number }
  index: number
  isMobile: boolean
  compact: boolean
}) {
  const router = useRouter()
  const cat = CATEGORY_STYLES[highlight.category]

  const floatDuration = 6 + (index % 3) * 1.5
  const floatAmplitudeX = 6 + (index % 4) * 3
  const floatAmplitudeY = 5 + (index % 3) * 2

  const desktopStyle: React.CSSProperties = isMobile
    ? {}
    : {
        position: 'absolute' as const,
        left: `${layoutPos.x}%`,
        top: `${layoutPos.y}%`,
        transform: 'translate(-50%, -50%)',
      }

  return (
    <motion.div
      className={`group cursor-pointer ${isMobile ? '' : 'absolute'} z-10`}
      style={desktopStyle}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: isMobile ? 0 : [0, floatAmplitudeX, 0, -floatAmplitudeX, 0],
        y: isMobile ? 0 : [0, -floatAmplitudeY, 0, floatAmplitudeY, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.3 + index * 0.12 },
        scale: {
          duration: 0.6,
          delay: 0.3 + index * 0.12,
          type: 'spring',
          stiffness: 200,
          damping: 20,
        },
        x: {
          duration: floatDuration,
          delay: index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        y: {
          duration: floatDuration * 0.85,
          delay: index * 0.5 + 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.15, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push(`/highlights/${highlight.slug}`)}
    >
      <div
        className={cn(
          'relative flex rounded-full flex-col items-center justify-center text-center p-3 bg-card transition-all duration-300 group-hover:scale-[1.02]',
          compact
            ? 'h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32'
            : 'h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40',
        )}
        style={{
          border: `1.5px solid ${cat.borderColor}`,
          background: `radial-gradient(circle at 30% 30%, ${cat.glowColor}, transparent 70%)`,
          boxShadow: `0 0 24px ${cat.glowColor}, inset 0 0 16px ${cat.glowColor}`,
        }}
      >
        <span
          className="absolute -top-2.5 rounded-full px-2 py-0.5 text-[8px] font-mono tracking-[0.15em] uppercase"
          style={{
            color: cat.labelColor,
            backgroundColor: `${cat.labelColor}15`,
            border: `1px solid ${cat.labelColor}30`,
          }}
        >
          {cat.label}
        </span>

        <span className={cn('select-none', compact ? 'mb-0.5 text-lg' : 'mb-0.5 text-xl')}>
          {highlight.icon}
        </span>
        <span className={cn('px-1 font-semibold leading-tight tracking-wide text-white', compact ? 'text-[10px]' : 'text-[11px]')}>
          {highlight.title}
        </span>
        <span className="mt-1 line-clamp-2 px-2 text-[9px] leading-tight text-white/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {highlight.subtitle}
        </span>
      </div>
    </motion.div>
  )
}

export default function BubbleCloud({
  compact = false,
  className,
}: {
  compact?: boolean
  className?: string
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    const grouped = {
      experience: highlights.filter((h) => h.category === 'experience'),
      project: highlights.filter((h) => h.category === 'project'),
      education: highlights.filter((h) => h.category === 'education'),
    }

    return (
      <div className={cn('w-full', className)}>
        {Object.entries(grouped).map(([category, items]) => {
          const cat = CATEGORY_STYLES[category]
          return (
            <div key={category} className="mb-6">
              <p
                className="mb-3 text-center text-[10px] font-mono tracking-[0.2em] uppercase"
                style={{ color: cat.labelColor }}
              >
                {cat.label}
              </p>
              <div className="mx-auto grid max-w-sm grid-cols-2 gap-3">
                {items.map((h, i) => {
                  const layoutPos = BUBBLE_LAYOUT.find((l) => l.slug === h.slug) || {
                    x: 50,
                    y: 50,
                  }
                  return (
                    <div key={h.slug} className="flex justify-center">
                      <Bubble
                        highlight={h}
                        layoutPos={layoutPos}
                        index={i}
                        isMobile
                        compact={compact}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('absolute inset-0', className)}>
      {highlights.map((h, i) => {
        const layoutPos = BUBBLE_LAYOUT.find((l) => l.slug === h.slug) || {
          x: 50,
          y: 50,
        }
        return (
          <Bubble
            key={h.slug}
            highlight={h}
            layoutPos={layoutPos}
            index={i}
            isMobile={false}
            compact={compact}
          />
        )
      })}
    </div>
  )
}
