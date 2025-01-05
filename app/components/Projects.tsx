'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'SVM implementation from Scratch',
    description: 'Training an SVM to accurately predict the next word from newsgroup dataset corpus. Implementing 5-fold cross-validation to increase model accuracy while preventing overfitting. Performing data pre-processing and creating feature vectors using TF-IDF methodology from scratch.',
    image: '/images/svm-project.jpg',
  },
  {
    id: 2,
    title: 'Early Diagnosis of Alzheimer\'s Disease',
    description: 'Developing a reliable and accurate method for diagnosing Alzheimer\'s disease at an early stage using 3D MRI scans. The goal is to help clinicians make accurate diagnoses in early stages, improving patient outcomes through earlier intervention and treatment.',
    image: '/images/alzheimers-project.jpg',
  },
  {
    id: 3,
    title: 'University Admit Eligibility Predictor',
    description: 'The goal of this project is to help students in their application process by collecting all their respective scores necessary for application and using this data we predict the students chances of getting into their dream university with the help of a linear regression model.',
    image: '/images/university-predictor.jpg',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              {/*<Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />*/}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <a
                  href={`https://github.com/Anirud-Mohan/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="mt-4 inline-block text-green-400 hover:text-green-300 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

