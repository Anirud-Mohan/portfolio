'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  projectUrl: string
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, projectUrl, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const tagPreview = useMemo(() => technologies.slice(0, 4), [technologies])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setPointer({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onPointerMove={handlePointerMove}
      className="surface-card group relative flex h-full flex-col overflow-hidden transition-all duration-300"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(116,255,212,0.18), transparent 32%)`,
        }}
      />

      <div className="accent-line" />
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent transition-opacity duration-300 group-hover:from-slate-950/55" />
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image}`}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-[0.78] contrast-[1.02] saturate-[0.95] transition duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-110"
        />
      </div>

      <div className="relative flex flex-grow flex-col p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tagPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-cyan-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="mt-auto pt-6">
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="primary-button w-full">
            View project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

