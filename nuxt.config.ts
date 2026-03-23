import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 1337,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "nuxt-gtag",
    "@nuxt/image",
  ],
  gtag: {
    id: "G-5531K77FDF",
  },
  site: {
    url: "https://olegmassage.com",
  },
  sitemap: {
    autoLastmod: true,
    defaults: {
      changefreq: "monthly",
      priority: 0.7,
    },
  },
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [{ name: "Playfair Display", provider: "google" }],
  },
  i18n: {
    baseUrl: "https://olegmassage.com",
    defaultLocale: "de",
    strategy: "prefix",
    locales: [
      { code: "en", language: "en", name: "English", file: "en.json" },
      { code: "de", language: "de", name: "Deutsch", file: "de.json" },
      { code: "ru", language: "ru", name: "Русский", file: "ru.json" },
      { code: "uk", language: "uk", name: "Українська", file: "uk.json" },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});