/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["drive.google.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

export default nextConfig;
