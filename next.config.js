/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:" //books-api.nomadcoders.workers.dev",
        pathname:"/*"
      
      }
    ]
  }
}

module.exports = nextConfig
