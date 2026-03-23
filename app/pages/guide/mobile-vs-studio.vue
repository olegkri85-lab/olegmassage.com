<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("guide.subtitle") }}
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ t("guide.mobileVsStudio.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("guide.mobileVsStudio.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-green-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
              {{ t("guide.mobileVsStudio.mobile.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li v-for="i in 6" :key="i" class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✓</span>
                <span>{{ t(`guide.mobileVsStudio.mobile.${i}`) }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
              {{ t("guide.mobileVsStudio.studio.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li v-for="i in 4" :key="i" class="flex items-start gap-3">
                <span class="text-gray-400 text-2xl">-</span>
                <span>{{ t(`guide.mobileVsStudio.studio.${i}`) }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div v-for="section in extraSections" :key="section" class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t(`guide.mobileVsStudio.${section}.title`) }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t(`guide.mobileVsStudio.${section}.description`) }}
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t("guide.mobileVsStudio.conclusion.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("guide.mobileVsStudio.conclusion.description") }}
          </p>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const extraSections = ["costComparison", "whoIsItFor", "quality"];

useHead(() => ({
  title: t("guide.mobileVsStudio.meta.title"),
  meta: [
    { name: "description", content: t("guide.mobileVsStudio.meta.description") },
    { property: "og:title", content: t("guide.mobileVsStudio.meta.title") },
    { property: "og:description", content: t("guide.mobileVsStudio.meta.description") },
    { property: "og:type", content: "article" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/guide/mobile-vs-studio")}` },
  ],
}));
</script>
