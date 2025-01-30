'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'SVM implementation from Scratch',
    description: 'Training an SVM to accurately predict the next word from newsgroup dataset corpus. Implementing 5-fold cross-validation to increase model accuracy while preventing overfitting.',
    image: '/images/svm-project.jpeg',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    projectUrl: 'https://github.com/Anirud-Mohan/svm-implementation-from-scratch'
  },
  {
    id: 2,
    title: 'Early Diagnosis of Alzheimer\'s Disease',
    description: 'Developing a reliable and accurate method for diagnosing Alzheimer\'s disease at an early stage using 3D MRI scans. Improving patient outcomes through earlier intervention and treatment.',
    image: '/images/alzheimers-project.jpeg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Nibabel'],
    projectUrl: 'https://github.com/Anirud-Mohan/AlzheimersDetection'
  },
  {
    id: 3,
    title: 'University Admit Eligibility Predictor',
    description: 'Predicting students\' chances of admission to their dream university using a linear regression model. Collecting and analyzing various scores necessary for the application process.',
    image: '/images/university-predictor.jpeg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    projectUrl: 'https://github.com/Anirud-Mohan/UAEP'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Projects that I have worked on!
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={childVariants} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                projectUrl={project.projectUrl}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

