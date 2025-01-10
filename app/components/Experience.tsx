'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    position: "Junior Machine Learning Engineer",
    company: "Thapovan Info Systems",
    year: "Oct 2023 - Jun 2024",
    skills: ["LLMs", "NLP", "Model Optimization", "Team Leadership"]
  },
  {
    position: "Software Developer Intern",
    company: "Azentio",
    year: "Feb 2023 - Sept 2023",
    skills: ["Predictive Modeling", "Data Visualization", "Cross-functional Collaboration"]
  }
]

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900 bg-opacity-80 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-16"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
              <p className="text-gray-400">{experience.company} - {experience.year}</p>
              <ul className="mt-2 space-y-1">
                {experience.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300">- {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience