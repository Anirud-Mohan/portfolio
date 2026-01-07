'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Pathology-Controllable Diffusion for Brain MRI',
    description: 'Developing a diffusion-based model for generating healthy counterfactual brain MRI scans while preserving the patient\'s anatomy. Enables further analysis of pathological features by comparing real and generated scans.',
    image: '/images/brain-mri-diffusion.png',
    technologies: ['Python', 'PyTorch', 'Diffusion Models', 'Medical Imaging', 'Deep Learning'],
    projectUrl: 'https://github.com/Anirud-Mohan/Seg_diffusion'
  },
  {
    id: 2,
    title: 'AI Powered Code Reviewer',
    description: 'Fine-tuned Microsoft CodeReviewer model on code refinement tasks and integrated it into GitHub Actions. Model metrics were logged on ClearML and the model was containerized and deployed on HuggingFace Spaces.',
    image: '/images/AI_code_reviewer.png',
    technologies: ['Python', 'Transformers', 'GitHub Actions', 'ClearML', 'HuggingFace', 'Docker'],
    projectUrl: 'https://github.com/Anirud-Mohan'
  },
  {
    id: 3,
    title: 'Optimization for Finance Forecasting',
    description: 'Solved a convex optimization problem using mathematical solvers to predict future financial trends with directional accuracy. Introduced wrong trade penalty terms often overlooked in financial market prediction.',
    image: '/images/fin_trade.png',
    technologies: ['Python', 'CVX', 'NumPy', 'Pandas', 'Mathematical Optimization', 'Finance'],
    projectUrl: 'https://github.com/Anirud-Mohan'
  },
  {
    id: 4,
    title: 'Simulation of Information Spread',
    description: 'Implemented custom Kruskal\'s algorithm to visualize information spread on Twitter dataset with 80k+ nodes. Used Graphistry for interactive visualization of graph-based information propagation.',
    image: '/images/graph_network.png',
    technologies: ['Python', 'Graph Algorithms', 'Graphistry', 'Network Analysis', 'Data Visualization'],
    projectUrl: 'https://github.com/Anirud-Mohan/Information-Spread'
  },
    {
    id: 5,
    title: 'SVM implementation from Scratch',
    description: 'Training an SVM to accurately predict the next word from newsgroup dataset corpus. Implementing 5-fold cross-validation to increase model accuracy while preventing overfitting.',
    image: '/images/svm-project.jpeg',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    projectUrl: 'https://github.com/Anirud-Mohan/svm-implementation-from-scratch'
  },
  {
    id: 6,
    title: 'Early Diagnosis of Alzheimer\'s Disease',
    description: 'Developing a reliable and accurate method for diagnosing Alzheimer\'s disease at an early stage using 3D MRI scans. Improving patient outcomes through earlier intervention and treatment.',
    image: '/images/alzheimers-project.jpeg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Nibabel'],
    projectUrl: 'https://github.com/Anirud-Mohan/AlzheimersDetection'
  },
  {
    id: 7,
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

