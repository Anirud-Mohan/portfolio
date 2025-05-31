'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani_animated.jpeg`}
              alt="Anirud Mohan"
              width={350}
              height={350}
              className="rounded-full border-4 border-green-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 shadow-md rounded-lg p-8 flex-grow w-full lg:w-auto"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate and aspiring machine learning engineer with expertise in modern GenAI technologies. I love creating
                beautiful, responsive, and user-friendly chat-bots powered by Large Language Models that solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My technical expertise spans across various domains including machine learning algorithms like XGBoost, AdaBoost, 
                Linear Regression, Logistic Regression, SVM, and Kernalization. I'm particularly passionate about working with 
                Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and fine-tuning techniques.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                On the development side, I'm proficient in HTML, CSS, JavaScript, Python, and modern frameworks. I enjoy building 
                full-stack applications that bridge the gap between cutting-edge AI capabilities and user-friendly interfaces.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always eager to learn new technologies, contribute to innovative projects, and stay at the forefront of 
                artificial intelligence and machine learning developments. My goal is to create impactful solutions that make 
                a real difference in people's lives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding or working on AI projects, you can find me exploring nature, reading tech blogs, 
                contributing to open-source projects, or diving deep into the latest research papers in machine learning and AI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

