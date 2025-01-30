'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Calendar, X } from 'lucide-react'

interface ExperienceEntry {
  company: string
  position: string
  date: string
  summary: string
  details: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: "Thapovan Info Systems",
    position: "Junior Machine Learning Engineer",
    date: "Oct 2023 - Jun 2024",
    summary: "Involed in a Researh and Devlopement team with a main goal to develop state-of-the-art ML models. Implemented and deployed large language models for various NLP tasks.",
    details: [
      "Spearheaded the development of cutting-edge machine learning models, resulting in a 30% improvement in prediction accuracy.",
      "Implemented and fine-tuned large language models for NLP tasks, enhancing chatbot performance by 40%.",
      "Optimized model inference time, reducing latency by 40% and improving overall system efficiency.",
      "Collaborated with cross-functional teams to integrate ML solutions into existing products, driving innovation across the company."
    ]
  },
  {
    company: "Azentio",
    position: "Software Developer Intern",
    date: "Feb 2023 - Sept 2023",
    summary: "Tasked with the conversion of monolithic architecture into muti-server architecture and also did data extraction for a large scale project.",
    details: [
      "Designed and implemented predictive models for customer churn analysis, increasing customer retention by 15%.",
      "Created interactive data visualization dashboards using D3.js, providing executives with real-time insights.",
      "Collaborated with the product team to integrate machine learning solutions into the company's financial software suite.",
      "Participated in agile development processes, contributing to sprint planning and daily stand-ups."
    ]
  }
]

const InteractiveTimelineExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="relative min-h-[600px] overflow-hidden z-10" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzI3MjcyNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMzk1NzZCIj48L2NpcmNsZT4KPC9zdmc+')] opacity-10"></div>

      {/* Vertical timeline line */}
      <motion.div
        className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-green-400"
        initial={{ scaleY: 0 }}
        animate={controls}
        variants={{
          visible: { scaleY: 1, transition: { duration: 1 } }
        }}
      ></motion.div>

      {/* Experience boxes container */}
      <div className="flex flex-col items-center justify-center min-h-full py-20 relative z-20 pointer-events-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex w-full items-center mb-20 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } }
            }}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10"
              whileHover={{ scale: 1.5 }}
            ></motion.div>

            {/* Experience box */}
            <motion.div
              className={`w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer z-30 ${
                index % 2 === 0 ? 'mr-[calc(50%+2rem)]' : 'ml-[calc(50%+2rem)]'
              }`}
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
          </motion.div>
        ))}
      </div>

      {/* Modal for additional details */}
      {selectedExperience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExperience(null)}
        >
          <motion.div
            className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
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
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default InteractiveTimelineExperience

