"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import SectionHeading from "./SectionHeading"
import { usePointerGlow } from "../hooks/usePointerGlow"

const educationData = [
  {
    institution: "University of Maryland, College Park",
    degree: "Master of Science in Applied Machine Learning",
    period: "2024 - present",
    logo: "/umd-logo.jpeg",
    fallbackLabel: "UMD",
    details: {
      courses: ["Introduction to Optimization ", "Algorithms and Data Structures for ML", "Computing Systems for ML", "Principles of Machine Learning", "Probability and Statistics"],
      achievements: ["3.76 GPA", "Member of UMD Soccer Club", "Working as Terp Host for the UMD Athletics Department"],
    },
  },
  {
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2019 - 2023",
    logo: "/mnmjec_logo.png",
    fallbackLabel: "MNMJ",
    details: {
      courses: ["Artificial Intelligence", "Cloud Computing", "Database Management", "Software Engineering"],
      achievements: ["8.82 CGPA", "First Class with Distinction", "Technical Club Lead", "Captain of College Cricket Team"],
    },
  },
]

function InstitutionLogo({
  src,
  alt,
  fallbackLabel,
  size,
}: {
  src: string
  alt: string
  fallbackLabel: string
  size: number
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-950 text-lg font-semibold tracking-[0.18em] text-cyan-200">
        {fallbackLabel}
      </div>
    )
  }

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src || '/placeholder.svg'}`}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setHasError(true)}
    />
  )
}

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof educationData)[number]
  index: number
}) {
  const cardGlow = usePointerGlow()

  return (
    <Dialog>
      <DialogTrigger className="group w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{
            y: -6,
            transition: { duration: 0.3 },
          }}
          className="w-full"
          onPointerMove={cardGlow.handlePointerMove}
        >
          <Card className="surface-card w-full cursor-pointer overflow-hidden border-white/10 text-white transition-all duration-300 group-hover:border-cyan-300/25 group-hover:bg-slate-900/80">
            <CardContent className="relative flex h-full min-h-[340px] flex-col p-8">
              <div className="accent-line" />
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(circle at ${cardGlow.pointer.x}% ${cardGlow.pointer.y}%, rgba(116,255,212,0.12), transparent 34%)`,
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Education</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">{edu.institution}</h3>
                  <p className="mt-3 text-base text-slate-200">{edu.degree}</p>
                  <p className="mt-2 text-sm text-slate-400">{edu.period}</p>
                </div>
                <motion.div
                  className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                >
                  <InstitutionLogo
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    fallbackLabel={edu.fallbackLabel}
                    size={80}
                  />
                </motion.div>
              </div>
              <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Coursework</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{edu.details.courses.slice(0, 2).join(' · ')}</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Highlights</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{edu.details.achievements.slice(0, 2).join(' · ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto border-white/10 bg-slate-950/95 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="text-left"
        >
          <DialogHeader className="mb-6">
            <DialogTitle className="flex flex-col gap-6 text-3xl text-white sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-white">
                <InstitutionLogo
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  fallbackLabel={edu.fallbackLabel}
                  size={96}
                />
              </div>
              <div>
                <div className="text-2xl">{edu.institution}</div>
                <div className="mt-2 text-xl font-normal text-slate-200">{edu.degree}</div>
                <div className="mt-1 text-lg font-normal text-slate-400">{edu.period}</div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="surface-card rounded-[24px] p-6"
            >
              <h4 className="mb-4 text-xl font-semibold text-cyan-200">Key Courses</h4>
              <ul className="space-y-2 text-slate-300">
                {edu.details.courses.map((course, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:text-white"
                  >
                    {course}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="surface-card rounded-[24px] p-6"
            >
              <h4 className="mb-4 text-xl font-semibold text-cyan-200">Achievements</h4>
              <ul className="space-y-2 text-slate-300">
                {edu.details.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:text-white"
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation with applied focus."
          description="A combination of strong fundamentals, machine learning coursework, and leadership outside the classroom."
        />

        <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

