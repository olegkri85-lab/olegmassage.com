<template>
  <div class="bg-gray-50">
    <!-- Video Hero Section -->
    <div class="py-16 px-8 xl:pt-16 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <h1
        class="text-4xl md:text-6xl lg:text-7xl mb-6 font-display font-medium text-white"
      >
        {{ t("hero.title") }}
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white/90 mb-16 max-w-3xl">
        {{ t("hero.description") }}
      </p>
      <VideoHero />
    </div>

    <!-- Services Section -->
    <ServicesSection />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("meta.home.title"),
  meta: [
    { name: "description", content: t("meta.home.description") },
    { property: "og:title", content: t("meta.home.title") },
    { property: "og:description", content: t("meta.home.description") },
    { property: "og:type", content: "website" },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://massazh.me${localePath('/')}`,
    },
  ],
}));
</script>
