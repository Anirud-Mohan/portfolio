'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { getToolStyle } from '../lib/toolColors'
import { usePointerGlow } from '../hooks/usePointerGlow'

const projects = [
  {
    id: 1,
    title: 'Pathology-Controllable Diffusion for Brain MRI',
    description:
      "Developing a diffusion-based model for generating healthy counterfactual brain MRI scans while preserving the patient's anatomy. Enables further analysis of pathological features by comparing real and generated scans.",
    image: '/images/brain-mri-diffusion.png',
    technologies: ['Python', 'PyTorch', 'Diffusion Models', 'Medical Imaging'],
    projectUrl: 'https://github.com/Anirud-Mohan/Seg_diffusion',
  },
  {
    id: 2,
    title: 'AI Powered Code Reviewer',
    description:
      'Fine-tuned Microsoft CodeReviewer model on code refinement tasks and integrated it into GitHub Actions. Model metrics were logged on ClearML and the model was containerized and deployed on HuggingFace Spaces.',
    image: '/images/AI_code_reviewer.png',
    technologies: ['Python', 'Transformers', 'GitHub Actions', 'ClearML', 'Docker'],
    projectUrl: 'https://github.com/Anirud-Mohan',
  },
  {
    id: 3,
    title: 'Optimization for Finance Forecasting',
    description:
      'Solved a convex optimization problem using mathematical solvers to predict future financial trends with directional accuracy. Introduced wrong trade penalty terms often overlooked in financial market prediction.',
    image: '/images/fin_trade.png',
    technologies: ['Python', 'CVX', 'NumPy', 'Mathematical Optimization'],
    projectUrl: 'https://github.com/Anirud-Mohan',
  },
  {
    id: 4,
    title: 'Simulation of Information Spread',
    description:
      "Implemented custom Kruskal's algorithm to visualize information spread on Twitter dataset with 80k+ nodes. Used Graphistry for interactive visualization of graph-based information propagation.",
    image: '/images/graph_network.png',
    technologies: ['Python', 'Graph Algorithms', 'Graphistry', 'Network Analysis'],
    projectUrl: 'https://github.com/Anirud-Mohan/Information-Spread',
  },
  {
    id: 5,
    title: 'SVM implementation from Scratch',
    description:
      'Training an SVM to accurately predict the next word from newsgroup dataset corpus. Implementing 5-fold cross-validation to increase model accuracy while preventing overfitting.',
    image: '/images/svm-project.jpeg',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    projectUrl: 'https://github.com/Anirud-Mohan/svm-implementation-from-scratch',
  },
  {
    id: 6,
    title: "Early Diagnosis of Alzheimer's Disease",
    description:
      "Developing a reliable and accurate method for diagnosing Alzheimer's disease at an early stage using 3D MRI scans. Improving patient outcomes through earlier intervention and treatment.",
    image: '/images/alzheimers-project.jpeg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    projectUrl: 'https://github.com/Anirud-Mohan/AlzheimersDetection',
  },
  {
    id: 7,
    title: 'University Admit Eligibility Predictor',
    description:
      "Predicting students' chances of admission to their dream university using a linear regression model. Collecting and analyzing various scores necessary for the application process.",
    image: '/images/university-predictor.jpeg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    projectUrl: 'https://github.com/Anirud-Mohan/UAEP',
  },
]

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const glow = usePointerGlow()

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
      onPointerMove={glow.handlePointerMove}
      className="group relative grid items-center gap-6 border-t border-border py-8 sm:grid-cols-[140px_1fr] sm:gap-8 lg:grid-cols-[160px_1fr] lg:gap-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glow.pointer.x}% ${glow.pointer.y}%, rgba(242,242,242,0.05), transparent 42%)`,
        }}
      />

      <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden border border-border bg-muted sm:mx-0 sm:max-w-none">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.image}`}
          alt={project.title}
          fill
          sizes="160px"
          className="object-cover brightness-[0.75] transition duration-500 group-hover:scale-[1.04] group-hover:brightness-100"
        />
      </div>

      <div className="relative flex flex-col justify-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground sm:text-2xl">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const style = getToolStyle(tech)
            return (
              <span
                key={tech}
                className="border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={style}
              >
                {tech}
              </span>
            )
          })}
        </div>
        <Link
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:text-muted-foreground"
        >
          View project
          <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds."
          description="AI, optimization, and data systems — presented as compact work rows."
        />
        <div className="border-b border-border">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
