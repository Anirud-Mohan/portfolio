'use client'

import { motion } from 'framer-motion'
import useTypingEffect from '../hooks/useTypingEffect'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const roles = [
    'Machine Learning Engineer',
    'Data Analyst',
    'Data Scientist',
    'Software Developer',
    'Sports Analyst',
  ]
  const currentRole = useTypingEffect(roles, 50, 25, 2000)

  return (
    <section id="hero" className="bg-opacity-80 min-h-screen flex flex-col items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 w-64 h-64 md:w-80 md:h-80 relative mx-auto"
        >
          {/* Outer glow - sun-like effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.2), 0 0 60px rgba(255, 215, 0, 0.1)",
                "0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.3), 0 0 90px rgba(255, 215, 0, 0.2)",
                "0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.2), 0 0 60px rgba(255, 215, 0, 0.1)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Middle glow layer */}
          <motion.div
            className="absolute inset-2 rounded-full"
            animate={{
              boxShadow: [
                "0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1)",
                "0 0 25px rgba(255, 255, 255, 0.3), inset 0 0 25px rgba(255, 215, 0, 0.2)",
                "0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Image container with subtle border */}
          <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-transparent">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ani_1.png`}
              alt="Anirud Mohan"
              fill
              style={{ 
                objectFit: 'contain', 
                objectPosition: 'center center'
              }}
              className=""
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
        >
          Hi, I'm Anirud Mohan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl text-gray-300"
        >
          A fervent <span className="text-green-400 font-mono">{currentRole}</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xl sm:text-2xl text-gray-300"
        >
          Engineering smart, trustworthy, and effective applications with the power of Artificial Intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300"
          >
            Take a look at my Resume!
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 text-white text-center"
      >
        <p className="text-lg">Scroll down to learn more about me</p>
        <svg
          className="w-6 h-6 mx-auto mt-2 animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero

