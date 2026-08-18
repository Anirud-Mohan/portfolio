"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import SectionHeading from "./SectionHeading"

const educationData = [
  {
    institution: "University of Maryland, College Park",
    degree: "Master of Science in Applied Machine Learning",
    period: "2024 — 2026",
    logo: "/umd-logo.jpeg",
    fallbackLabel: "UMD",
    details: {
      courses: [
        "Introduction to Optimization",
        "Algorithms and Data Structures for ML",
        "Computing Systems for ML",
        "Principles of Machine Learning",
        "Probability and Statistics",
      ],
      achievements: [
        "3.8 GPA",
        "Member of UMD Soccer Club",
        "Working as Terp Host for the UMD Athletics Department",
      ],
    },
  },
  {
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2019 — 2023",
    logo: "/mnmjec_logo.png",
    fallbackLabel: "MNMJ",
    details: {
      courses: ["Artificial Intelligence", "Cloud Computing", "Database Management", "Software Engineering"],
      achievements: [
        "8.82 CGPA",
        "First Class with Distinction",
        "Technical Club Lead",
        "Captain of College Cricket Team",
      ],
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
      <div className="flex h-full w-full items-center justify-center bg-muted font-mono text-sm tracking-[0.18em] text-muted-foreground">
        {fallbackLabel}
      </div>
    )
  }

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setHasError(true)}
    />
  )
}

function EducationRow({
  edu,
  index,
}: {
  edu: (typeof educationData)[number]
  index: number
}) {
  return (
    <Dialog>
      <DialogTrigger className="group w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="grid grid-cols-[64px_1fr_auto] items-center gap-5 border-t border-border py-8 transition hover:bg-muted/40 sm:grid-cols-[80px_1fr_auto] sm:gap-8"
        >
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden border border-border bg-white sm:h-20 sm:w-20">
            <InstitutionLogo
              src={edu.logo}
              alt={`${edu.institution} logo`}
              fallbackLabel={edu.fallbackLabel}
              size={80}
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{edu.period}</p>
            <h3 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">{edu.institution}</h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">{edu.degree}</p>
          </div>
          <span className="hidden items-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-foreground sm:inline-flex">
            Details
            <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
          </span>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto border-border bg-card text-foreground">
        <DialogHeader className="mb-6">
          <DialogTitle className="flex flex-col gap-5 text-left sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden border border-border bg-white">
              <InstitutionLogo
                src={edu.logo}
                alt={`${edu.institution} logo`}
                fallbackLabel={edu.fallbackLabel}
                size={80}
              />
            </div>
            <div>
              <div className="text-2xl font-medium">{edu.institution}</div>
              <div className="mt-2 text-base font-normal text-muted-foreground">{edu.degree}</div>
              <div className="mt-1 font-mono text-xs font-normal uppercase tracking-[0.18em] text-muted-foreground">
                {edu.period}
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="section-label">Key courses</h4>
            <ul className="mt-4 space-y-2">
              {edu.details.courses.map((course) => (
                <li key={course} className="border border-border px-4 py-3 text-sm text-muted-foreground">
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="section-label">Achievements</h4>
            <ul className="mt-4 space-y-2">
              {edu.details.achievements.map((achievement) => (
                <li key={achievement} className="border border-border px-4 py-3 text-sm text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          title="Academic foundation."
          description="Fundamentals, applied machine learning, and work outside the classroom."
        />
        <div className="border-b border-border">
          {educationData.map((edu, index) => (
            <EducationRow key={edu.institution} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
