"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

const educationData = [
  {
    institution: "University of Maryland, College Park",
    degree: "Master of Science in Applied Machine Learning",
    period: "2024 - present",
    logo: "/umd-logo.jpeg",
    details: {
      courses: ["Introduction to Optimization ", "Algorithms and Data Structures for ML", "Computing Systems for ML", "Principles of Machine Learning", "Probability and Statistics"],
      achievements: ["3.76 GPA", "Member of UMD Soccer Club", "Working as Terp Host for the UMD Athletics Department"],
    },
  },
  {
    institution: "Misrimal Navajee Munoth Jain Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2019 - 2023",
    logo: "/mnmjec_logo.png",
    details: {
      courses: ["Artificial Intelligence", "Cloud Computing", "Database Management", "Software Engineering"],
      achievements: ["8.82 CGPA", "First Class with Distinction", "Technical Club Lead", "Captain of College Cricket Team"],
    },
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-5xl font-bold mb-16 text-[#66FFEE]">Education</h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <Dialog key={index}>
            <DialogTrigger className="w-full group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(74, 222, 128, 0.5)",
                  transition: { duration: 0.3 }
                }}
                className="w-full"
              >
                <Card className="bg-slate-900/60 border-2 border-transparent hover:border-green-400/50 text-white transition-all duration-300 cursor-pointer w-full h-full group-hover:bg-slate-800/70">
                  <CardContent className="p-8 flex flex-col items-center h-full justify-between min-h-[500px]">
                    <motion.div 
                      className="w-64 h-64 mb-6 bg-white rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${edu.logo || '/placeholder.svg'}`}
                        alt={`${edu.institution} logo`}
                        width={256}
                        height={256}
                        className="object-contain transition-transform duration-300"
                      />
                    </motion.div>
                    <div className="text-center flex-grow flex flex-col justify-center">
                      <h3 className="text-green-500 text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">{edu.institution}</h3>
                      <p className="text-xl mb-2 group-hover:text-white transition-colors duration-300">{edu.degree}</p>
                      <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">{edu.period}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="bg-slate-900/95 text-white border-slate-800 max-w-4xl max-h-[80vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="text-center"
              >
                <DialogHeader className="mb-6 flex flex-col items-center">
                  <DialogTitle className="text-3xl text-green-500 flex flex-col items-center gap-4">
                    <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${edu.logo || '/placeholder.svg'}`}
                        alt={`${edu.institution} logo`}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">{edu.institution}</div>
                      <div className="text-xl text-white font-normal mt-2">{edu.degree}</div>
                      <div className="text-lg text-gray-400 font-normal mt-1">{edu.period}</div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-8 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/50 rounded-lg p-6 text-center"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Key Courses</h4>
                    <ul className="list-none space-y-2 text-gray-300">
                      {edu.details.courses.map((course, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="hover:text-white transition-colors duration-200 bg-slate-700/30 rounded-md py-2 px-4 mx-auto max-w-md"
                        >
                          {course}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-slate-800/50 rounded-lg p-6 text-center"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Achievements</h4>
                    <ul className="list-none space-y-2 text-gray-300">
                      {edu.details.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="hover:text-white transition-colors duration-200 bg-slate-700/30 rounded-md py-2 px-4 mx-auto max-w-md"
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}

