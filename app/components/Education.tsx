'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface EducationEntry {
  degree: string
  institution: string
  logo: string
  year: string
  description: string
  gpa: string
  coursework: string[]
  activities: string[]
}

const educationData: EducationEntry[] = [
  {
    degree: "Master of Science in Applied Machine Learning",
    institution: "University of Maryland, College Park",
    logo: "/umd-logo.jpeg",
    year: "2024 - present",
    description: "Learning the intricacies and the core concepts of Machine Learning techniques",
    gpa: "3.76/4.0",
    coursework: [
      "Principles of Machine Learning",
      "Principles of Data Science",
      "Probablity and Statistics",
      "Algorithms and Data Structures for ML", 
      "Model Optimization"
    ],
    activities: [
      "UMD Cricket Club",
      "AI Ethics Committee"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    logo: "/mnmjec_logo.png",
    year: "2019 - 2023",
    description: "Graduated with first class honors",
    gpa: "8.82/10",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Artificial Intelligence"
    ],
    activities: [
      "Cricket Team Captain",
      "Technical Quiz Event Organizer",
      "Rotaract Club Member"
    ]
  }
]

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationEntry | null>(null)

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}
              onClick={() => setSelectedEducation(edu)}
            >
              <div className="p-6 flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={edu.logo || `${process.env.basePath || ''}/placeholder.svg`}
                    alt={`${edu.institution} logo`}
                    width={80}
                    height={80}
                    className="rounded-lg bg-white p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">{edu.institution}</h3>
                  <p className="text-white text-lg mb-1">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEducation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEducation(null)}
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
                  <h2 className="text-2xl font-bold text-green-400">{selectedEducation.institution}</h2>
                  <h3 className="text-xl font-semibold text-white">{selectedEducation.degree}</h3>
                  <p className="text-sm text-gray-400 mt-1">{selectedEducation.year}</p>
                </div>
                <button
                  onClick={() => setSelectedEducation(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 mb-4">{selectedEducation.description}</p>
                <p className="text-white font-semibold mb-2">GPA: {selectedEducation.gpa}</p>
                <h4 className="text-lg font-semibold text-white mb-2">Key Coursework:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {selectedEducation.coursework.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-white mb-2">Activities and Clubs:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedEducation.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Education

