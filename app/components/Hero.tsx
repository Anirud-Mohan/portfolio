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
    title: "Master's graduation",
    subtitle: 'University of Maryland, College Park',
    date: '2026',
    points: [
      "Graduated with an M.S. in Applied Machine Learning from UMD with a 3.8 GPA.",
      'Continuing research on LLM inference.',
    ],
  }

  const readingLinks = [
    {
      label: 'Nvidia – The Inference Kingdom Expands',
      href: 'https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands',
    },
    {
      label: 'Inside TPU and GPU Clusters: Collective Operations',
      href: 'https://www.aleksagordic.com/blog/collective-operations',
    },
  ]

  const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] border-b border-border">
      <div className="page-shell grid min-h-[calc(100vh-4rem)] lg:grid-cols-[0.72fr_1.28fr]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col justify-between border-b border-border py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-10"
        >
          <div className="portrait-soft relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]">
            {showPortrait ? (
              <>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani.jpg`}
                  alt="Anirud Mohan"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-[58%_28%] saturate-[0.88] contrast-[1.04] brightness-[0.96]"
                  onError={() => setShowPortrait(false)}
                />
                <div className="portrait-tone pointer-events-none absolute inset-0" />
              </>
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
              AI Engineer · Machine Learning Engineer · Software Engineer
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
              background: `radial-gradient(circle at ${aboutGlow.pointer.x}% ${aboutGlow.pointer.y}%, rgba(var(--pointer-glow),0.05), transparent 36%)`,
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
                  background: `radial-gradient(circle at ${workGlow.pointer.x}% ${workGlow.pointer.y}%, rgba(var(--pointer-glow),0.04), transparent 40%)`,
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
                  background: `radial-gradient(circle at ${interestGlow.pointer.x}% ${interestGlow.pointer.y}%, rgba(var(--pointer-glow),0.04), transparent 40%)`,
                }}
              />
              <div className="relative flex items-baseline justify-between gap-3">
                <p className="section-label">Recent interests</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Ongoing
                </span>
              </div>
              <h2 className="relative mt-4 text-lg text-foreground">Currently reading</h2>
              <p className="relative mt-1 font-mono text-xs text-muted-foreground">
                Diving deeper into LLM inference
              </p>
              <p className="relative mt-4 text-sm leading-6 text-muted-foreground">
                Exploring inference systems, cluster communication, and how modern serving stacks scale.
              </p>
              <ul className="relative mt-4 space-y-3">
                {readingLinks.map((link) => (
                  <li key={link.href} className="border-l border-border pl-3">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 text-sm leading-6 text-foreground underline-offset-4 transition hover:underline"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    </a>
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
