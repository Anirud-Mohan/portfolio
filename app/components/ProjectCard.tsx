'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  projectUrl: string
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, projectUrl, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  
  const imagePath = `${process.env.basePath || ''}${image}`;
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)",
        transition: { duration: 0.3 }
      }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image}`}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-green-400 text-sm rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              View Project
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

