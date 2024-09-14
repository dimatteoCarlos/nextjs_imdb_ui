/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'm.media-amazon.com'],
  },

  // images:{
  //   remotePatterns:[{
  //     protocol:'https',
  //     hostname:'m.media-amazon.com',
  //     pathname:'**'
  //     }
  //   ]
  // }
};

export default nextConfig;
