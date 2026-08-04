"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { FaPython, FaJava, FaDocker, FaGitAlt, FaDatabase, FaCloud, FaCogs } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiSpringboot, SiMongodb, SiD3Dotjs } from "react-icons/si"
import { createPortal } from "react-dom"
import { getToolStyle } from "../lib/toolColors"

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
    date: "Oct 2025 — Dec 2025",
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
    date: "Oct 2023 — Jun 2024",
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
    date: "Feb 2023 — Sept 2023",
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

const viewportReveal = { once: true, margin: "-80px" as const }

const InteractiveTimelineExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.3"],
  })
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["4%", "100%"])

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
    <div ref={timelineRef} className="relative">
      <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-border md:block" />
      <motion.div
        className="absolute left-[7px] top-4 hidden w-px origin-top bg-foreground md:block"
        style={{ height: timelineHeight }}
      />

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportReveal}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative border-t border-border py-10 md:pl-12"
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewportReveal}
              transition={{ duration: 0.35, delay: index * 0.08 + 0.1, type: "spring", stiffness: 260, damping: 18 }}
              className="absolute left-0 top-12 hidden h-[15px] w-[15px] items-center justify-center border border-foreground bg-background md:flex"
            >
              <div className="h-1.5 w-1.5 bg-foreground" />
            </motion.div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{exp.date}</p>
                <h3 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">{exp.company}</h3>
                <p className="mt-2 text-lg text-foreground/90">{exp.position}</p>
                <p className="mt-5 text-base leading-7 text-foreground/85">{exp.summary}</p>
                <button
                  onClick={() => setSelectedExperience(exp)}
                  className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:text-muted-foreground"
                >
                  View details
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </button>
              </div>

              <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
                {exp.skills.map((skill, skillIndex) => {
                  const style = getToolStyle(skill.name)
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportReveal}
                      transition={{ duration: 0.25, delay: index * 0.08 + 0.18 + skillIndex * 0.04 }}
                      className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
                      style={style}
                    >
                      <skill.icon className="h-3 w-3" style={{ color: style.color }} />
                      {skill.name}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedExperience && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] grid place-items-center bg-background/95 p-4"
                onClick={() => setSelectedExperience(null)}
              >
                <motion.div
                  className="relative my-auto max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-border bg-card p-8 sm:p-10"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="section-label">Experience detail</p>
                      <h2 className="mt-4 text-3xl font-medium text-foreground">{selectedExperience.company}</h2>
                      <p className="mt-2 text-lg text-foreground/90">{selectedExperience.position}</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {selectedExperience.date}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="border border-border p-2 text-muted-foreground hover:text-foreground"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill) => {
                      const style = getToolStyle(skill.name)
                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
                          style={style}
                        >
                          <skill.icon className="h-3 w-3" style={{ color: style.color }} />
                          {skill.name}
                        </div>
                      )
                    })}
                  </div>

                  <h4 className="mt-10 section-label">Responsibilities</h4>
                  <ul className="mt-4 space-y-3">
                    {selectedExperience.details.map((detail, index) => (
                      <li key={index} className="border border-border bg-muted/40 px-5 py-4 text-sm leading-7 text-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
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
