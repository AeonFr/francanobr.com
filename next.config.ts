import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    // The blog moved from /blog to /writing; keep old links working.
    return [
      { source: '/blog', destination: '/writing', permanent: true },
      { source: '/blog/articles', destination: '/writing/articles', permanent: true },
      { source: '/blog/articles/:slug*', destination: '/writing/articles/:slug*', permanent: true },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
