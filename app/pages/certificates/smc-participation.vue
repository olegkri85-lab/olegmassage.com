<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <NuxtLink
          :to="localePath('/certificates')"
          class="text-white/70 hover:text-white text-sm uppercase tracking-widest !no-underline mb-4 inline-block"
        >
          ← {{ t("certificates.title") }}
        </NuxtLink>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("certificates.smcParticipation.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("certificates.smcParticipation.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="bg-gray-50 rounded-2xl p-6 md:p-8 mb-16">
          <NuxtImg
            src="/certificates/smc-participation.jpeg"
            :alt="t('certificates.smcParticipation.title')"
            class="w-full h-auto rounded-xl"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>

        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8">
            {{ t("certificates.smcParticipation.detailsTitle") }}
          </h2>
          <ul class="space-y-4 text-lg text-gray-700">
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.smcParticipation.detail1") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.smcParticipation.detail2") }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t("certificates.smcParticipation.detail3") }}</span>
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
  title: t("certificates.smcParticipation.meta.title"),
  meta: [
    {
      name: "description",
      content: t("certificates.smcParticipation.meta.description"),
    },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/smc-1st-place.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/certificates/smc-participation")}`,
    },
  ],
}));
</script>
