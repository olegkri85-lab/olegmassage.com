<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("certificates.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("certificates.title") }}
        </h1>
      </div>
    </section>

    <!-- Championship Awards -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-12">
          {{ t("certificates.championship.title") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            :to="localePath('/certificates/smc-1st-place')"
            class="group bg-gray-50 rounded-2xl p-4 !no-underline transition-shadow hover:shadow-lg"
          >
            <NuxtImg
              src="/certificates/smc-1st-place.jpeg"
              :alt="t('certificates.smc1stPlace.title')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
            <div class="p-4">
              <div
                class="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide mb-3"
              >
                <span>🏆</span>
                {{ t("certificates.championship.badge") }}
              </div>
              <h3
                class="text-xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
              >
                {{ t("certificates.smc1stPlace.title") }}
              </h3>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/certificates/smc-participation')"
            class="group bg-gray-50 rounded-2xl p-4 !no-underline transition-shadow hover:shadow-lg"
          >
            <NuxtImg
              src="/certificates/smc-participation.jpeg"
              :alt="t('certificates.smcParticipation.title')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
            <div class="p-4">
              <h3
                class="text-xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
              >
                {{ t("certificates.smcParticipation.title") }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Professional Training -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-12">
          {{ t("certificates.training.title") }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            :to="localePath('/certificates/profmed-classic-massage')"
            class="group bg-white rounded-2xl p-4 !no-underline transition-shadow hover:shadow-lg"
          >
            <NuxtImg
              src="/certificates/profmed-classic-massage.jpeg"
              :alt="t('certificates.profmedClassic.title')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
            <div class="p-4">
              <h3
                class="text-lg font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
              >
                {{ t("certificates.profmedClassic.title") }}
              </h3>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/certificates/profmed-anatomy')"
            class="group bg-white rounded-2xl p-4 !no-underline transition-shadow hover:shadow-lg"
          >
            <NuxtImg
              src="/certificates/profmed-anatomy.jpeg"
              :alt="t('certificates.profmedAnatomy.title')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
            <div class="p-4">
              <h3
                class="text-lg font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
              >
                {{ t("certificates.profmedAnatomy.title") }}
              </h3>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/certificates/smc-workshops')"
            class="group bg-white rounded-2xl p-4 !no-underline transition-shadow hover:shadow-lg"
          >
            <NuxtImg
              src="/certificates/smc-workshops.jpeg"
              :alt="t('certificates.smcWorkshops.title')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
            <div class="p-4">
              <h3
                class="text-lg font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
              >
                {{ t("certificates.smcWorkshops.title") }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("meta.certificates.title"),
  meta: [
    { name: "description", content: t("meta.certificates.description") },
    { property: "og:title", content: t("meta.certificates.title") },
    {
      property: "og:description",
      content: t("meta.certificates.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/smc-1st-place.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/certificates")}`,
    },
  ],
}));
</script>
