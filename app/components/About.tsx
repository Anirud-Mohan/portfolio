'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Image
              src="/ani_animated.jpeg"
              alt="Anirud Mohan"
              width={250}
              height={250}
              className="rounded-full border-4 border-green-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 shadow-md rounded-lg p-6 flex-grow"
          >
            <p className="text-gray-300 mb-4">
              I'm a passionate and aspiring machine learning engineer with expertise in modern GenAI technologies. I love creating
              beautiful, responsive, and user-friendly chat-bots powered by Large Language Models that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-4">
              My skills include HTML, CSS, Machine Learning techniques such as XGBoost, AdaBoost, Linear Regression, Logistic Regression, SVM, Kernalization, 
              LLMs, RAG, Finetuning and more. I'm always eager to learn new technologies and improve my craft.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring nature, reading tech blogs, or contributing to
              open-source projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

