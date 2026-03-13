export interface Highlight {
  slug: string
  category: 'experience' | 'project' | 'education'
  title: string
  subtitle: string
  icon: string
  accentColor: string
  description: string[]
  technologies?: string[]
  date: string
  links?: { label: string; url: string }[]
  institution?: string
  position?: string
}

export const highlights: Highlight[] = [
  {
    slug: 'carina-ai',
    category: 'experience',
    title: 'CarinaAI',
    subtitle: 'Healthcare AI & RAG pipelines',
    icon: '🧬',
    accentColor: '#00FFD1',
    position: 'Data Science Intern',
    date: 'Oct 2025 – Dec 2025',
    description: [
      'Engineered an automated Chart Review RAG pipeline for the DeIdentifier product, boosting system accuracy from 69% to 82% through advanced post-processing and output flow validation.',
      'Optimized retrieval performance by benchmarking diverse embedding models, implementing query transformation, and refining reranking strategies to enhance context precision.',
      'Orchestrated the deployment cycle using the vLLM framework and KV caching to minimize memory footprint, while securing source code via Cythonization for client-side distribution.',
      'Diagnosed and resolved a critical "Yes/No" evaluation bias by validating model outputs against physician-curated ground truth, correcting the evaluation schema and improving reliability.',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Docker', 'MLOps', 'Git'],
    links: [],
  },
  {
    slug: 'thapovan',
    category: 'experience',
    title: 'Thapovan Info Systems',
    subtitle: 'LLM chatbots & guardrails',
    icon: '🤖',
    accentColor: '#7B61FF',
    position: 'Junior Machine Learning Engineer',
    date: 'Oct 2023 – Jun 2024',
    description: [
      'Designed and deployed end-to-end LLM-powered chatbot systems using HuggingFace Transformers and Python.',
      'Integrated Guardrails for LLMs by creating structured input/output validation pipelines and employing Retrieval-Augmented Generation (RAG), improving interaction accuracy by 30%.',
      'Enhanced model performance with advanced Retrieval Augmented Generation techniques, achieving accuracy improvements up to 96%.',
      'Collaborated with cross-functional teams using Agile methodologies to support the fine-tuning and deployment of AI models.',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Git', 'MLOps'],
    links: [],
  },
  {
    slug: 'brain-mri',
    category: 'project',
    title: 'Brain MRI Diffusion',
    subtitle: 'Pathology-controllable generation',
    icon: '🧠',
    accentColor: '#FF6B6B',
    date: '2024 – Present',
    description: [
      'Developing a diffusion-based model for generating healthy counterfactual brain MRI scans while preserving the patient\'s anatomy.',
      'Enables further analysis of pathological features by comparing real and generated scans.',
    ],
    technologies: ['Python', 'PyTorch', 'Diffusion Models', 'Medical Imaging', 'Deep Learning'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Anirud-Mohan/Seg_diffusion' },
    ],
  },
  {
    slug: 'code-reviewer',
    category: 'project',
    title: 'AI Code Reviewer',
    subtitle: 'Automated code review via fine-tuned LLM',
    icon: '🔍',
    accentColor: '#4ECDC4',
    date: '2024',
    description: [
      'Fine-tuned Microsoft CodeReviewer model on code refinement tasks and integrated it into GitHub Actions.',
      'Model metrics were logged on ClearML and the model was containerized and deployed on HuggingFace Spaces.',
    ],
    technologies: ['Python', 'Transformers', 'GitHub Actions', 'ClearML', 'HuggingFace', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Anirud-Mohan' },
    ],
  },
  {
    slug: 'finance-forecasting',
    category: 'project',
    title: 'Finance Forecasting',
    subtitle: 'Convex optimization for markets',
    icon: '📈',
    accentColor: '#FFD93D',
    date: '2024',
    description: [
      'Solved a convex optimization problem using mathematical solvers to predict future financial trends with directional accuracy.',
      'Introduced wrong trade penalty terms often overlooked in financial market prediction.',
    ],
    technologies: ['Python', 'CVX', 'NumPy', 'Pandas', 'Mathematical Optimization', 'Finance'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Anirud-Mohan' },
    ],
  },
  {
    slug: 'info-spread',
    category: 'project',
    title: 'Information Spread',
    subtitle: 'Graph simulation on 80k+ nodes',
    icon: '🌐',
    accentColor: '#45B7D1',
    date: '2024',
    description: [
      'Implemented custom Kruskal\'s algorithm to visualize information spread on Twitter dataset with 80k+ nodes.',
      'Used Graphistry for interactive visualization of graph-based information propagation.',
    ],
    technologies: ['Python', 'Graph Algorithms', 'Graphistry', 'Network Analysis', 'Data Visualization'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Anirud-Mohan/Information-Spread' },
    ],
  },
  {
    slug: 'alzheimers',
    category: 'project',
    title: "Alzheimer's Diagnosis",
    subtitle: 'Early detection from 3D MRI scans',
    icon: '🏥',
    accentColor: '#96CEB4',
    date: '2023',
    description: [
      'Developing a reliable and accurate method for diagnosing Alzheimer\'s disease at an early stage using 3D MRI scans.',
      'Improving patient outcomes through earlier intervention and treatment.',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Nibabel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Anirud-Mohan/AlzheimersDetection' },
    ],
  },
  {
    slug: 'umd',
    category: 'education',
    title: 'University of Maryland',
    subtitle: 'MS in Applied Machine Learning',
    icon: '🎓',
    accentColor: '#E63946',
    institution: 'University of Maryland, College Park',
    date: '2024 – Present',
    description: [
      'Pursuing a Master of Science in Applied Machine Learning with a 3.76 GPA.',
      'Key courses: Introduction to Optimization, Algorithms and Data Structures for ML, Computing Systems for ML, Principles of Machine Learning, Probability and Statistics.',
      'Member of UMD Soccer Club and working as Terp Host for the UMD Athletics Department.',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Optimization', 'Statistics'],
    links: [],
  },
]

export function getHighlightBySlug(slug: string): Highlight | undefined {
  return highlights.find((h) => h.slug === slug)
}
