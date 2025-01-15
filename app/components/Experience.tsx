'use client'

import { motion } from 'framer-motion'
import InteractiveTimelineExperience from './InteractiveTimelineExperience'

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <InteractiveTimelineExperience />
      </div>
    </section>
  )
}

export default Experience

