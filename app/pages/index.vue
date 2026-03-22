<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="py-16 px-8 xl:py-24 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wide mb-6"
            >
              <span class="text-lg">🏆</span>
              {{ t("hero.award") }}
            </div>
            <h1
              class="text-4xl md:text-6xl lg:text-7xl mb-6 font-display font-medium text-white"
            >
              {{ t("hero.title") }}
            </h1>
            <p
              class="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              {{ t("hero.description") }}
            </p>
            <CtaButton variant="hero" size="lg" text-key="cta.hero" />
          </div>
          <div class="relative">
            <ImagePlaceholder
              ratio="4/3"
              src="/images/championship-action.jpeg"
              :alt="t('hero.award')"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
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
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/championship-action.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/")}`,
    },
  ],
}));
</script>
