'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Education {
  logo: string
  institution: string
  degree: string
  dates: string
}

const educationData: Education[] = [
  {
    logo: "/umd-logo.jpeg",
    institution: "University of Maryland, College Park",
    degree: "Master of Science in Applied Machine Learning",
    dates: "2024 - Present"
  },
  {
    logo: "/mnmjec_logo.png",
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    dates: "2019 - 2023"
  }
]

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gray-900 bg-opacity-80">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-12"
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
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)" }}
            >
              <div className="p-6 flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">{edu.institution}</h3>
                  <p className="text-white text-lg mb-1">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.dates}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection

