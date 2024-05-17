/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	images: {
		domains: ["tailwindui.com", "images.unsplash.com", "plus.unsplash.com"],
	},
};

export default withNextIntl(nextConfig);

