<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("guide.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("guide.index.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("guide.index.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto space-y-8">
        <NuxtLink
          v-for="article in articles"
          :key="article.to"
          :to="localePath(article.to)"
          class="group block !no-underline"
        >
          <div
            class="bg-gray-50 rounded-2xl p-8 md:p-12 group-hover:shadow-lg transition-shadow"
          >
            <h2
              class="text-2xl md:text-3xl font-display text-gray-900 mb-4 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
            >
              {{ t(article.titleKey) }}
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ t(article.descKey) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const articles = [
  {
    to: "/guide/which-massage",
    titleKey: "guide.whichMassage.title",
    descKey: "guide.whichMassage.description",
  },
  {
    to: "/guide/first-massage",
    titleKey: "guide.firstMassage.title",
    descKey: "guide.firstMassage.description",
  },
  {
    to: "/guide/mobile-vs-studio",
    titleKey: "guide.mobileVsStudio.title",
    descKey: "guide.mobileVsStudio.description",
  },
  {
    to: "/guide/massage-frequency",
    titleKey: "guide.massageFrequency.title",
    descKey: "guide.massageFrequency.intro",
  },
  {
    to: "/guide/massage-for-back-pain",
    titleKey: "guide.backPain.title",
    descKey: "guide.backPain.intro",
  },
  {
    to: "/guide/swedish-vs-classical",
    titleKey: "guide.swedishVsClassical.title",
    descKey: "guide.swedishVsClassical.intro",
  },
  {
    to: "/guide/massage-during-pregnancy",
    titleKey: "guide.pregnancyMassage.title",
    descKey: "guide.pregnancyMassage.intro",
  },
  {
    to: "/guide/benefits-of-mobile-massage",
    titleKey: "guide.mobileBenefits.title",
    descKey: "guide.mobileBenefits.intro",
  },
];

useHead(() => ({
  title: t("guide.index.meta.title"),
  meta: [
    { name: "description", content: t("guide.index.meta.description") },
    { property: "og:title", content: t("guide.index.meta.title") },
    {
      property: "og:description",
      content: t("guide.index.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/championship-action.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/guide")}`,
    },
  ],
}));
</script>
