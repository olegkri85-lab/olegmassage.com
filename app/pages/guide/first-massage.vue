<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("guide.subtitle") }}
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ t("guide.firstMassage.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("guide.firstMassage.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto space-y-12">
        <div v-for="step in steps" :key="step" class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t(`guide.firstMassage.${step}.title`) }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t(`guide.firstMassage.${step}.description`) }}
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

const steps = ["booking", "preparation", "whatToWear", "arrival", "during", "after", "afterEffects", "commonQuestions"];

useHead(() => ({
  title: t("guide.firstMassage.meta.title"),
  meta: [
    { name: "description", content: t("guide.firstMassage.meta.description") },
    { property: "og:title", content: t("guide.firstMassage.meta.title") },
    { property: "og:description", content: t("guide.firstMassage.meta.description") },
    { property: "og:type", content: "article" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/guide/first-massage")}` },
  ],
}));
</script>
