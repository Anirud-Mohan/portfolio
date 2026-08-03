export const toolColors: Record<string, string> = {
  Python: '#3776AB',
  PyTorch: '#EE4C2C',
  TensorFlow: '#FF6F00',
  Docker: '#2496ED',
  MLOps: '#A78BFA',
  Git: '#F05032',
  Java: '#ED8B00',
  'Spring Boot': '#6DB33F',
  SQL: '#336791',
  MongoDB: '#47A248',
  'D3.js': '#F9A03C',
  Microservices: '#38BDF8',
  Transformers: '#FFD21E',
  'GitHub Actions': '#2088FF',
  ClearML: '#14B8A6',
  NumPy: '#4DABCF',
  Pandas: '#150458',
  'Scikit-learn': '#F7931E',
  Keras: '#D00000',
  OpenCV: '#5C3EE8',
  Matplotlib: '#11557C',
  CVX: '#22C55E',
  'Diffusion Models': '#E879F9',
  'Medical Imaging': '#2DD4BF',
  'Mathematical Optimization': '#84CC16',
  'Graph Algorithms': '#F472B6',
  Graphistry: '#FB923C',
  'Network Analysis': '#60A5FA',
}

export function getToolStyle(name: string): { color: string; backgroundColor: string; borderColor: string } {
  const color = toolColors[name] ?? '#A3A3A3'
  return {
    color,
    backgroundColor: `${color}18`,
    borderColor: `${color}55`,
  }
}
