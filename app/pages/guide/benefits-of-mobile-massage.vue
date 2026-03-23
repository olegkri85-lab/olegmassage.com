<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <NuxtLink
          :to="localePath('/guide')"
          class="text-white/70 hover:text-white text-sm uppercase tracking-widest !no-underline mb-4 inline-block"
        >
          ← {{ t("guide.subtitle") }}
        </NuxtLink>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ t("guide.mobileBenefits.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("guide.mobileBenefits.intro") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl mx-auto space-y-12">
        <div v-for="section in sections" :key="section" class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t(`guide.mobileBenefits.${section}.title`) }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t(`guide.mobileBenefits.${section}.description`) }}
          </p>
        </div>

        <div class="text-center">
          <CtaButton variant="primary" size="lg">
            {{ t("cta.services") }}
          </CtaButton>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const sections = ["convenience", "comfort", "hygiene", "flexibility", "aftercare", "families", "elderly", "corporate", "zurich"];

useHead(() => ({
  title: t("guide.mobileBenefits.meta.title"),
  meta: [
    { name: "description", content: t("guide.mobileBenefits.meta.description") },
    { property: "og:title", content: t("guide.mobileBenefits.meta.title") },
    { property: "og:description", content: t("guide.mobileBenefits.meta.description") },
    { property: "og:type", content: "article" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/guide/benefits-of-mobile-massage")}` },
  ],
}));
</script>
