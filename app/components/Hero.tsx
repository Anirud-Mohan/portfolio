'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { usePointerGlow } from '../hooks/usePointerGlow'

const Hero = () => {
  const [showPortrait, setShowPortrait] = useState(true)
  const aboutGlow = usePointerGlow()
  const workGlow = usePointerGlow()
  const interestGlow = usePointerGlow()

  const recentWork = {
    title: 'Brain MRI Diffusion',
    subtitle: 'Pathology-controllable generation',
    date: '2024 — Present',
    points: [
      'Diffusion models that generate healthy counterfactual brain MRI while preserving anatomy.',
      'Paired scans that make pathological change easier to study.',
    ],
  }

  const recentInterest = {
    title: 'Currently reading',
    subtitle: 'Papers and technical writing',
    date: 'Ongoing',
    points: [
      'Retrieval systems, generative AI, and ML engineering.',
      'Space kept open for papers, posts, and topics in progress.',
    ],
  }

  const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] border-b border-border">
      <div className="page-shell grid min-h-[calc(100vh-4rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col justify-between border-b border-border py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-10"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden border border-border bg-muted sm:max-w-sm lg:max-w-none">
            {showPortrait ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani.jpg`}
                    alt="Anirud Mohan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-[58%_28%]"
                    onError={() => setShowPortrait(false)}
                  />
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-4xl tracking-[0.4em] text-muted-foreground">
                AM
              </div>
            )}
          </div>

          <div className="mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
            >
              Anirud Mohan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
            >
              Machine Learning Engineer · Data Science · Software
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26 }}
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-8 inline-flex"
            >
              View resume
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative flex flex-col justify-center gap-10 py-10 lg:py-14 lg:pl-12"
          onPointerMove={aboutGlow.handlePointerMove}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${aboutGlow.pointer.x}% ${aboutGlow.pointer.y}%, rgba(242,242,242,0.05), transparent 36%)`,
            }}
          />
          <div className="relative">
            <p className="section-label">About</p>
            <p className="mt-5 max-w-xl text-xl leading-8 text-foreground sm:text-2xl sm:leading-9">
              Building reliable AI systems and practical products with a clear engineering mindset.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              I work across LLM applications, retrieval pipelines, medical imaging research, and
              data-driven software — turning strong models into tools that feel useful and well built.
            </p>
          </div>

          <div className="relative grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div onPointerMove={workGlow.handlePointerMove} className="relative">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(circle at ${workGlow.pointer.x}% ${workGlow.pointer.y}%, rgba(242,242,242,0.04), transparent 40%)`,
                }}
              />
              <div className="relative flex items-baseline justify-between gap-3">
                <p className="section-label">Recent work</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {recentWork.date}
                </span>
              </div>
              <h2 className="relative mt-4 text-lg text-foreground">{recentWork.title}</h2>
              <p className="relative mt-1 font-mono text-xs text-muted-foreground">{recentWork.subtitle}</p>
              <ul className="relative mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {recentWork.points.map((point) => (
                  <li key={point} className="border-l border-border pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div onPointerMove={interestGlow.handlePointerMove} className="relative">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(circle at ${interestGlow.pointer.x}% ${interestGlow.pointer.y}%, rgba(242,242,242,0.04), transparent 40%)`,
                }}
              />
              <div className="relative flex items-baseline justify-between gap-3">
                <p className="section-label">Recent interests</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {recentInterest.date}
                </span>
              </div>
              <h2 className="relative mt-4 text-lg text-foreground">{recentInterest.title}</h2>
              <p className="relative mt-1 font-mono text-xs text-muted-foreground">{recentInterest.subtitle}</p>
              <ul className="relative mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {recentInterest.points.map((point) => (
                  <li key={point} className="border-l border-border pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
