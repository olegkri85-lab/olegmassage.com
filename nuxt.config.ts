// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/scripts", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      { name: "Playfair Display", provider: "google" },
    ],
  },
  i18n: {
    defaultLocale: "de",
    strategy: "prefix",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
      { code: "ru", name: "Русский", file: "ru.json" },
      { code: "uk", name: "Українська", file: "uk.json" },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
