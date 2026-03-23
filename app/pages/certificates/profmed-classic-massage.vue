<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <NuxtLink
          :to="localePath('/certificates')"
          class="text-white/70 hover:text-white text-sm uppercase tracking-widest !no-underline mb-4 inline-block"
        >
          ← {{ t("certificates.title") }}
        </NuxtLink>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("certificates.profmedClassic.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("certificates.profmedClassic.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <div class="bg-gray-50 rounded-2xl p-6 md:p-8 mb-16">
          <NuxtImg
            src="/certificates/profmed-classic-massage.jpeg"
            :alt="t('certificates.profmedClassic.title')"
            class="w-full h-auto rounded-xl"
            quality="80"
            loading="lazy"
          />
        </div>

        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8">
            {{ t("certificates.profmedClassic.detailsTitle") }}
          </h2>
          <ul class="space-y-4 text-lg text-gray-700">
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.profmedClassic.detail1") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.profmedClassic.detail2") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.profmedClassic.detail3") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.profmedClassic.detail4") }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("certificates.profmedClassic.meta.title"),
  meta: [
    {
      name: "description",
      content: t("certificates.profmedClassic.meta.description"),
    },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/smc-1st-place.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/certificates/profmed-classic-massage")}`,
    },
  ],
}));
</script>
