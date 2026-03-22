<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("guide.subtitle") }}
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ t("guide.whichMassage.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("guide.whichMassage.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl mx-auto space-y-12">
        <div v-for="item in recommendations" :key="item.key" class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t(`guide.whichMassage.${item.key}.title`) }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            {{ t(`guide.whichMassage.${item.key}.description`) }}
          </p>
          <NuxtLink
            :to="localePath(item.link)"
            class="inline-flex items-center gap-2 text-[hsl(var(--accent-hsl))] hover:underline font-medium text-lg"
          >
            {{ t("services.learnMore") }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const recommendations = [
  { key: "stress", link: "/services/relaxation-massage" },
  { key: "backPain", link: "/services/classical-massage" },
  { key: "athlete", link: "/services/sports-massage" },
  { key: "skin", link: "/services/anticellulite-massage" },
  { key: "pregnant", link: "/services/pregnancy-massage" },
  { key: "child", link: "/services/children-massage" },
  { key: "chronic", link: "/services/cupping-massage" },
  { key: "premium", link: "/services/swedish-massage" },
];

useHead(() => ({
  title: t("guide.whichMassage.meta.title"),
  meta: [
    { name: "description", content: t("guide.whichMassage.meta.description") },
    { property: "og:title", content: t("guide.whichMassage.meta.title") },
    { property: "og:description", content: t("guide.whichMassage.meta.description") },
    { property: "og:type", content: "article" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/guide/which-massage")}` },
  ],
}));
</script>
