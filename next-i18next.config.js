module.exports = {
  i18n: {
    locales: ["default", "en", "tw"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
  // localePath:
  //   typeof window === "undefined"
  //     ? require("path").resolve("./public/locales")
  //     : "/locales",
};
