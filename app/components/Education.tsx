'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    degree: "Master of Science in Applied Machine Learning",
    institution: "University of Maryland, College Park",
    year: "2024 - present",
    description: "Learning the intricacies and the core concepts of Machine Learning models"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    year: "2019- 2023",
    description: "Graduated with first class honors"
  }
]

const Education = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-8"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.year}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

