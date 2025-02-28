const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export', // Enables static export
  basePath: isGithubPages ? '/portfolio' : '', // Apply basePath only for GitHub Pages
  assetPrefix: isGithubPages ? '/portfolio/' : '', // Apply assetPrefix only for GitHub Pages
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;