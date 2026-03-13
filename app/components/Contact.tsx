'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'
import SectionHeading from './SectionHeading'

const Contact = () => {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setPointer({ x, y })
  }

  return (
    <section id="contact" className="section-shell pt-10">
      <div className="page-shell relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Contact me."
          description="If you would like to talk about machine learning, AI products, or opportunities, the easiest way to reach me is here."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onPointerMove={handlePointerMove}
          className="surface-panel relative overflow-hidden p-8 sm:p-10"
        >
          <div className="accent-line" />
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(116,255,212,0.16), transparent 28%)`,
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-lg text-white">Let&apos;s connect.</p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                I&apos;m open to conversations around machine learning engineering, AI product work, research-driven
                development, and opportunities where thoughtful execution matters.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Whether it&apos;s a role, a project, or a collaboration, feel free to reach out directly.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:anirudmohan2002@gmail.com"
                className="surface-card flex items-center justify-between p-4 hover:border-cyan-300/25"
                aria-label="Email Anirud Mohan"
              >
                <span className="inline-flex items-center text-sm text-slate-200">
                  <Mail className="mr-3 h-4 w-4 text-cyan-200" />
                  anirudmohan2002@gmail.com
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/anirud-mohan/"
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex items-center justify-between p-4 hover:border-cyan-300/25"
                aria-label="LinkedIn profile"
              >
                <span className="inline-flex items-center text-sm text-slate-200">
                  <Linkedin className="mr-3 h-4 w-4 text-cyan-200" />
                  LinkedIn profile
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

