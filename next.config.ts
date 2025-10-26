import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your Pages repo is NOT username.github.io, set basePath to '/repo-name'
  // For example: basePath: '/portfolio'
  // If it IS username.github.io, leave as empty string
  basePath: '',
};

export default nextConfig;
