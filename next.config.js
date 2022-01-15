const nextConfig = {
  i18n: {
    locales: ["en-US", "zh-TW"],
    defaultLocale: "en-US",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
