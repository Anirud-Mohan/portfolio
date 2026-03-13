'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const About = () => {
  const strengths = [
    'Machine learning systems with measurable impact',
    'LLM workflows, guardrails, and retrieval pipelines',
    'Full-stack thinking for polished end-user experiences',
    'Fast learning across research, data, and product delivery',
  ]

  return (
    <section id="about" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="About"
          title="Minimal presentation, clear story."
          description="A concise overview of what I work on, how I think, and where I bring the most value."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="surface-panel relative overflow-hidden p-8"
          >
            <div className="accent-line" />
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani_animated.jpeg`}
                alt="Anirud Mohan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            <div className="relative mt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Current focus</p>
              <p className="text-lg text-white">Machine learning systems, production-ready AI, and sharp digital experiences.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface-panel relative overflow-hidden p-8 sm:p-10"
          >
            <div className="accent-line" />
            <div className="relative space-y-6">
              <p className="text-lg leading-8 text-slate-300">
                I&apos;m a machine learning engineer with experience across GenAI systems, predictive modeling,
                and product-focused development. I enjoy translating complex model behavior into interfaces and
                workflows that feel useful, trustworthy, and easy to adopt.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                My work spans LLM applications, retrieval-augmented systems, optimization, classical machine learning,
                and full-stack implementation. I care about both the intelligence layer and the user experience around it.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                Outside of work, I&apos;m drawn to sports, research, and continuous technical exploration, which keeps my
                projects grounded in curiosity as much as execution.
              </p>

              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item} className="surface-card p-4 text-sm leading-6 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

