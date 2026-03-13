'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePointerGlow } from '../hooks/usePointerGlow'

const Hero = () => {
  const [showPortrait, setShowPortrait] = useState(true)
  const aboutGlow = usePointerGlow()
  const workGlow = usePointerGlow()
  const interestGlow = usePointerGlow()
  const recentWork = {
    title: 'Brain MRI Diffusion',
    subtitle: 'Pathology-controllable generation',
    date: '2024 - Present',
    gist:
      'I am currently working on a diffusion-based approach for generating healthy counterfactual brain MRI scans while preserving patient anatomy. The goal is to make pathological changes easier to study by comparing real scans with generated healthy counterparts. It combines medical imaging research with practical model development.',
  }
  const recentInterest = {
    title: 'Currently reading',
    subtitle: 'Research papers and technical writing',
    date: 'Ongoing',
    gist:
      'Lately I have been reading research papers and strong technical blogs around retrieval systems, generative AI, and machine learning engineering. I want this space to stay flexible so I can keep updating it with papers, blog posts, or topics I am currently exploring.',
  }

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5.5rem)] items-center py-3 sm:py-5">
      <div className="page-shell">
        <div className="grid gap-4 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="surface-panel relative overflow-hidden p-4 sm:p-5"
          >
            <div className="accent-line" />
            <div className="absolute inset-0 bg-panel-radial opacity-80" />

            <div className="relative flex h-full flex-col">
              <div className="relative mx-auto aspect-[0.95] w-full max-w-[190px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 sm:max-w-[220px]">
                {showPortrait ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani_new.png`}
                    alt="Anirud Mohan"
                    fill
                    sizes="(max-width: 1024px) 190px, 220px"
                    className="object-cover object-center"
                    onError={() => setShowPortrait(false)}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-3xl font-semibold tracking-[0.28em] text-white">
                    AM
                  </div>
                )}
              </div>

              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white sm:text-sm">Anirud Mohan</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">
                  Machine Learning Engineer · Data Science · Software Development
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid gap-4"
          >
            <div
              className="surface-panel relative overflow-hidden p-4 sm:p-5"
              onPointerMove={aboutGlow.handlePointerMove}
            >
              <div className="accent-line" />
              <div className="absolute inset-0 bg-panel-radial opacity-70" />
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at ${aboutGlow.pointer.x}% ${aboutGlow.pointer.y}%, rgba(116,255,212,0.14), transparent 30%)`,
                }}
              />
              <div className="relative">
                <span className="section-label">About me</span>
                <h1 className="mt-2.5 max-w-3xl text-[1.65rem] font-semibold tracking-tight text-white sm:text-[2rem] lg:text-[2.35rem]">
                  Building reliable AI systems and practical products with a clear engineering mindset.
                </h1>
                <p className="mt-2.5 max-w-3xl text-[0.92rem] leading-6 text-slate-300 sm:text-[0.96rem]">
                  I work across LLM applications, retrieval pipelines, medical imaging research, and data-driven
                  software. I care about turning strong models into tools that feel useful, trustworthy, and well built.
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  Recent work spans healthcare AI, code intelligence, optimization, and graph-based analytics,
                  with a focus on measurable impact and clean execution.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
              <div
                className="surface-panel relative overflow-hidden p-4"
                onPointerMove={workGlow.handlePointerMove}
              >
                <div className="accent-line" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background: `radial-gradient(circle at ${workGlow.pointer.x}% ${workGlow.pointer.y}%, rgba(96,165,250,0.14), transparent 34%)`,
                  }}
                />
                <div className="relative">
                  <span className="section-label">Recent work</span>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42, delay: 0.15 }}
                    className="surface-card mt-3 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[15px] font-semibold text-white sm:text-base">{recentWork.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                        {recentWork.date}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-cyan-200">{recentWork.subtitle}</p>
                    <p className="mt-2.5 text-sm leading-6 text-slate-300">{recentWork.gist}</p>
                  </motion.div>
                </div>
              </div>

              <div
                className="surface-panel relative overflow-hidden p-4"
                onPointerMove={interestGlow.handlePointerMove}
              >
                <div className="accent-line" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background: `radial-gradient(circle at ${interestGlow.pointer.x}% ${interestGlow.pointer.y}%, rgba(116,255,212,0.14), transparent 34%)`,
                  }}
                />
                <div className="relative">
                  <span className="section-label">Recent interests</span>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.22 }}
                    className="surface-card mt-3 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[15px] font-semibold text-white sm:text-base">{recentInterest.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                        {recentInterest.date}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-cyan-200">{recentInterest.subtitle}</p>
                    <p className="mt-2.5 text-sm leading-6 text-slate-300">{recentInterest.gist}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

