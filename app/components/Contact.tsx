'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { usePointerGlow } from '../hooks/usePointerGlow'

const Contact = () => {
  const glow = usePointerGlow()

  return (
    <section id="contact" className="section-shell pb-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          description="Open to conversations around machine learning engineering, AI products, and thoughtful collaboration."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          onPointerMove={glow.handlePointerMove}
          className="relative border-t border-border"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${glow.pointer.x}% ${glow.pointer.y}%, rgba(var(--pointer-glow),0.06), transparent 34%)`,
            }}
          />
          <a
            href="mailto:anirudmohan2002@gmail.com"
            className="group relative flex items-center justify-between border-b border-border py-8 transition hover:bg-muted/30"
            aria-label="Email Anirud Mohan"
          >
            <div>
              <p className="section-label">Email</p>
              <p className="mt-3 text-2xl text-foreground sm:text-4xl">anirudmohan2002@gmail.com</p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-muted-foreground transition group-hover:text-foreground sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/anirud-mohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between border-b border-border py-8 transition hover:bg-muted/30"
            aria-label="LinkedIn profile"
          >
            <div>
              <p className="section-label">LinkedIn</p>
              <p className="mt-3 text-2xl text-foreground sm:text-4xl">linkedin.com/in/anirud-mohan</p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-muted-foreground transition group-hover:text-foreground sm:h-8 sm:w-8" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
