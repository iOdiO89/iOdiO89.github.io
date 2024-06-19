/** @type {import('next').NextConfig} */

const prefix = process.env.NODE_ENV === 'production' ? 'https://iodio89.github.io/whoami/' : ''

const nextConfig = { output: 'export' }

export default nextConfig
