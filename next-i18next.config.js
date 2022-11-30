module.exports = {
  i18n: {
    locales: ["en", "tw"],
    defaultLocale: "en",
    localeDetection: true,
  },
  trailingSlash: true,
  // localePath:
  //   typeof window === "undefined"
  //     ? require("path").resolve("./public/locales")
  //     : "/locales",
};
