/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Optional: If you want to make all SVGs icons
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
