/** @type {import('next').NextConfig} */

const prefix = process.env.NODE_ENV === 'production' ? 'https://iodio89.github.io/whoami/' : ''

const nextConfig = {
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
}

export default nextConfig
