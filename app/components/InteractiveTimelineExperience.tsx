"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, X } from "lucide-react"
import { FaPython, FaJava, FaDocker, FaGitAlt, FaDatabase, FaCloud, FaCogs } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiSpringboot, SiMongodb, SiD3Dotjs } from "react-icons/si"

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
  const [hoveredSkillsCard, setHoveredSkillsCard] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3 })
  
  // Enhanced scroll-based timeline growth
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })
  
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="relative min-h-[600px] overflow-hidden z-10 max-w-6xl mx-auto px-4" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzI3MjcyNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMzk1NzZCIj48L2NpcmNsZT4KPC9zdmc+')] opacity-10"></div>

      {/* Timeline container with scroll reference */}
      <div ref={timelineRef} className="relative">
        {/* Background timeline line (full height) */}
        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-600 transform -translate-x-1/2"></div>
        
        {/* Progressive timeline line that grows with scroll */}
        <motion.div
          className="absolute left-1/2 top-10 w-0.5 bg-gradient-to-b from-green-400 to-green-500 transform -translate-x-1/2 origin-top"
          style={{ height: timelineHeight }}
        ></motion.div>

        {/* Experience boxes container */}
        <div className="flex flex-col items-center justify-center min-h-full py-20 relative z-20">
          {experiences.map((exp, index) => {
            // Calculate when each dot should appear based on scroll progress
            const dotThreshold = (index + 1) / experiences.length
            const dotScale = useTransform(
              scrollYProgress, 
              [dotThreshold - 0.1, dotThreshold], 
              [0, 1]
            )
            
            return (
              <div key={index} className="flex w-full items-center mb-20">
                {/* Enhanced Timeline dot with clean scroll-based appearance */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 border-2 border-white shadow-lg"
                  style={{ scale: dotScale }}
                  whileHover={{ 
                    scale: 1.5,
                    boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
                  }}
                  transition={{ duration: 0.2 }}
                ></motion.div>

            {/* Left side content (Work Experience) */}
            <motion.div
              className="w-[45%] p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.4 } },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}
              onClick={() => setSelectedExperience(exp)}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2">{exp.company}</h3>
              <h4 className="text-xl font-semibold text-white mb-2">{exp.position}</h4>
              <p className="text-sm text-gray-400 mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.date}
              </p>
              <p className="text-gray-300">{exp.summary}</p>
            </motion.div>

            {/* Right side content (Skills) with Simple Sequential Reveal */}
            <motion.div
              className="w-[45%] ml-auto p-6 bg-gray-800 rounded-lg shadow-lg z-30"
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.4 + 0.2 } },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}
              onMouseEnter={() => setHoveredSkillsCard(index)}
              onMouseLeave={() => setHoveredSkillsCard(null)}
            >
              <h4 className="text-xl font-semibold text-green-400 mb-4">Skills & Technologies</h4>
              <div className="grid grid-cols-3 gap-4">
                {exp.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: hoveredSkillsCard === index ? 1 : 0.7,
                      scale: hoveredSkillsCard === index ? 1 : 0.9
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: hoveredSkillsCard === index ? skillIndex * 0.08 : 0,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      transition: { duration: 0.2 }
                    }}
                  >
                    <skill.icon className="w-8 h-8 text-green-400 mb-2" />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
            )
          })}
        </div>
      </div>      {/* Modal for additional details */}
      {selectedExperience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExperience(null)}
        >
          <motion.div
            className="bg-gray-800 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-green-400">{selectedExperience.company}</h2>
                <h3 className="text-xl font-semibold text-white">{selectedExperience.position}</h3>
                <p className="text-sm text-gray-400 mt-1">{selectedExperience.date}</p>
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-white mb-2">Key Achievements and Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {selectedExperience.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">Skills & Technologies:</h4>
              <div className="flex flex-wrap gap-4">
                {selectedExperience.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <skill.icon className="w-6 h-6 text-green-400 mr-2" />
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default InteractiveTimelineExperience

