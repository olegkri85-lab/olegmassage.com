<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("location.zug.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("location.zug.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("location.zug.description") }}
        </p>
        <CtaButton variant="hero" />
      </div>
    </section>

    <!-- Service Areas -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="max-w-4xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
          {{ t("location.zug.areas.title") }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div
            v-for="area in zugAreas"
            :key="area"
            class="bg-white p-4 rounded-lg"
          >
            <p class="text-base md:text-lg">{{ area }}</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <h3 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
            {{ t("location.zug.why.title") }}
          </h3>
          <ul class="space-y-4 text-base md:text-lg text-gray-700">
            <li
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="text-[hsl(var(--accent-hsl))] text-xl">✓</span>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
          {{ t("location.zug.services.title") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              {{ t("services.classical.title") }}
            </h3>
            <p class="text-gray-700 mb-4">
              {{ t("services.classical.description") }}
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              {{ t("services.duration.massage60") }} — 100 CHF •
              {{ t("services.duration.massage90") }} — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              {{ t("services.sports.title") }}
            </h3>
            <p class="text-gray-700 mb-4">
              {{ t("services.sports.description") }}
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              {{ t("services.duration.massage60") }} — 100 CHF •
              {{ t("services.duration.massage90") }} — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              {{ t("services.relaxation.title") }}
            </h3>
            <p class="text-gray-700 mb-4">
              {{ t("services.relaxation.description") }}
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              {{ t("services.duration.massage60") }} — 100 CHF •
              {{ t("services.duration.massage90") }} — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              {{ t("services.cupping.title") }}
            </h3>
            <p class="text-gray-700 mb-4">
              {{ t("services.cupping.description") }}
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              {{ t("services.duration.cupping") }} — 30 CHF
            </p>
          </div>
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

const zugAreas = [
  "Zug",
  "Baar",
  "Cham",
  "Steinhausen",
  "Rotkreuz",
  "Hünenberg",
  "Unterägeri",
  "Oberägeri",
  "Menzingen",
];

const benefits = computed(() => [
  t("location.zug.benefits.1"),
  t("location.zug.benefits.2"),
  t("location.zug.benefits.3"),
  t("location.zug.benefits.4"),
  t("location.zug.benefits.5"),
]);

useHead(() => ({
  title: t("location.zug.meta.title"),
  meta: [
    { name: "description", content: t("location.zug.meta.description") },
    { property: "og:title", content: t("location.zug.meta.title") },
    {
      property: "og:description",
      content: t("location.zug.meta.description"),
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
      href: `https://olegmassage.com${localePath("/locations/zug")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.zug.title"),
        description: t("location.zug.description"),
        provider: {
          "@type": "LocalBusiness",
          name: "olegmassage.com",
          url: "https://olegmassage.com",
          telephone: "+41798499274",
          email: "oleh.kryvorotko@icloud.com",
          areaServed: {
            "@type": "City",
            name: "Zug",
          },
        },
        areaServed: {
          "@type": "City",
          name: "Zug",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://olegmassage.com",
          servicePhone: "+41798499274",
        },
      }),
    },
  ],
}));
</script>
