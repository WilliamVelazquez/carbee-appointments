/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
  basePath: '/carbee-appointments',
	async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://backend.billowing-truth-38ad.workers.dev/api/:path*',
			},
		]
	},
}

module.exports = nextConfig
