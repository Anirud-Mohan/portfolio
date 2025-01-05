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
          Work Experience Tree
        </motion.h2>
        <div className="relative">
          {/* Tree trunk */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-4 bg-green-700 rounded-full"
            style={{ top: 0, bottom: 0 }}
          />
          
          {/* Experience branches */}
          <div className="space-y-32">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">{exp.position}</h3>
                    <p className="text-white mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.year}</p>
                    <div className="flex flex-wrap justify-end gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                          className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

