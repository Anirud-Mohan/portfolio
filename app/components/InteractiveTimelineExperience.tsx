"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Calendar, X } from "lucide-react"
import { FaPython, FaJava, FaDocker, FaGitAlt, FaDatabase, FaCloud, FaCogs } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiSpringboot, SiMongodb, SiD3Dotjs } from "react-icons/si"
import { createPortal } from "react-dom"
import { usePointerGlow } from "../hooks/usePointerGlow"

interface Skill {
  name: string
  icon: React.ElementType
}

interface ExperienceEntry {
  company: string
  position: string
  date: string
  summary: string
  details: string[]
  skills: Skill[]
}

const experiences: ExperienceEntry[] = [
  {
    company: "CarinaAI",
    position: "Data Science Intern",
    date: "Oct 2025 - Dec 2025",
    summary: "Engineered automated RAG pipeline and optimized ML deployment for healthcare AI systems.",
    details: [
      "Engineered an automated Chart Review RAG pipeline for the DeIdentifier product, boosting system accuracy from 69% to 82% through advanced post-processing and output flow validation.",
      "Optimized retrieval performance by benchmarking diverse embedding models, implementing query transformation, and refining reranking strategies to enhance context precision.",
      "Orchestrated the deployment cycle using the vLLM framework and KV caching to minimize memory footprint, while securing source code via Cythonization for client-side distribution.",
      "Diagnosed and resolved a critical \"Yes/No\" evaluation bias by validating model outputs against physician-curated ground truth, correcting the evaluation schema and improving reliability.",
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Docker", icon: FaDocker },
      { name: "MLOps", icon: FaCogs },
      { name: "Git", icon: FaGitAlt },
    ],
  },
  {
    company: "Thapovan Info Systems",
    position: "Junior Machine Learning Engineer",
    date: "Oct 2023 - Jun 2024",
    summary: "Developed and deployed state-of-the-art ML models for various NLP tasks.",
    details: [
      "Designed and deployed end-to-end LLM-powered chatbot systems using HuggingFace Transformers and Python.",
      "Integrated Guardrails for LLMs by creating structured input/output validation pipelines and employing Retrieval-Augmented Generation (RAG), improving interaction accuracy by 30%.",
      "Enhanced model performance with advanced Retrieval Augmented Generation techniques, achieving accuracy improvements up to 96%.",
      "Collaborated with cross-functional teams using Agile methodologies to support the fine-tuning and deployment of AI models",
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "MLOps", icon: FaCogs },
    ],
  },
  {
    company: "Azentio",
    position: "Software Developer Intern",
    date: "Feb 2023 - Sept 2023",
    summary: "Converted monolithic architecture to multi-server and performed large-scale data extraction.",
    details: [
      "Refactored a monolithic architecture into a multi-server structure to improve system scalability and performance.",
      "Developed secure and scalable APIs by segregating UI and API functionalities, focusing on exposing only the logistics API.",
      "Implemented Python-based data extraction and transformation methods using Scrapy and BeautifulSoup4, identifying and rectifying three critical system performance bottlenecks.",
      "Actively participated in agile development processes, including sprint planning and daily stand-ups.",
    ],
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "SQL", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "D3.js", icon: SiD3Dotjs },
      { name: "Microservices", icon: FaCloud },
    ],
  },
]

const InteractiveTimelineExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const modalGlow = usePointerGlow()

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.3"]
  })
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["4%", "100%"])
  const accentPositions = useMemo(() => ["12%", "48%", "84%"], [])

  useEffect(() => {
    if (!selectedExperience) return

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [selectedExperience])

  return (
    <div ref={timelineRef} className="surface-panel relative px-6 py-10 sm:px-8 sm:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="accent-line" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-[0.04]" />
        {accentPositions.map((top) => (
          <motion.div
            key={top}
            className="absolute left-0 right-0 h-40 bg-[radial-gradient(circle,rgba(116,255,212,0.08),transparent_70%)] blur-3xl"
            style={{ top }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="absolute bottom-12 left-[19px] top-12 hidden w-px bg-white/10 md:block" />
        <motion.div
          className="absolute left-[19px] top-12 hidden w-px origin-top bg-gradient-to-b from-cyan-200 via-cyan-300/80 to-transparent md:block"
          style={{ height: timelineHeight }}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative md:pl-16"
            >
              <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/90 shadow-glow md:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
              </div>

              <div className="surface-card relative overflow-hidden p-6 sm:p-8">
                <div className="accent-line" />
                <div className="grid gap-6 lg:grid-cols-[1fr]">
                  <div>
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="section-label">Role {String(index + 1).padStart(2, "0")}</span>
                          <p className="flex items-center text-sm text-slate-400">
                            <Calendar className="mr-2 h-4 w-4 text-cyan-200" />
                            {exp.date}
                          </p>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{exp.company}</h3>
                        <p className="mt-2 text-lg text-cyan-200">{exp.position}</p>
                      </div>

                      <div className="flex max-w-xl flex-wrap gap-2 xl:justify-end">
                        {exp.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200"
                          >
                            <skill.icon className="h-3.5 w-3.5 text-cyan-200" />
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{exp.summary}</p>

                    <motion.button
                      onClick={() => setSelectedExperience(exp)}
                      whileTap={{ scale: 0.97 }}
                      className="mt-8 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white"
                    >
                      View impact and responsibilities
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedExperience && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm"
                onClick={() => setSelectedExperience(null)}
              >
                <motion.div
                  className="surface-panel relative my-auto max-h-[85vh] w-full max-w-4xl overflow-y-auto p-8 sm:p-10"
                  initial={{ scale: 0.96, opacity: 0, y: 18 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.98, opacity: 0, y: 10 }}
                  transition={{ type: "spring", damping: 18, stiffness: 280 }}
                  onPointerMove={modalGlow.handlePointerMove}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="accent-line" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      background: `radial-gradient(circle at ${modalGlow.pointer.x}% ${modalGlow.pointer.y}%, rgba(116,255,212,0.12), transparent 34%)`,
                    }}
                  />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="section-label">Experience detail</span>
                      <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{selectedExperience.company}</h2>
                      <h3 className="mt-2 text-lg text-cyan-200">{selectedExperience.position}</h3>
                      <p className="mt-2 text-sm text-slate-400">{selectedExperience.date}</p>
                    </div>
                    <div className="hidden max-w-md flex-wrap justify-end gap-2 md:flex">
                      {selectedExperience.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200"
                        >
                          <skill.icon className="h-3.5 w-3.5 text-cyan-200" />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-8">
                    <div className="mb-4 flex flex-wrap gap-2 md:hidden">
                      {selectedExperience.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200"
                        >
                          <skill.icon className="h-3.5 w-3.5 text-cyan-200" />
                          {skill.name}
                        </div>
                      ))}
                    </div>
                    <h4 className="text-sm uppercase tracking-[0.24em] text-slate-500">Responsibilities</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {selectedExperience.details.map((detail, index) => (
                        <li key={index} className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  )
}

export default InteractiveTimelineExperience

