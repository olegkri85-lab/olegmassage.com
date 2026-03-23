<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("pricing.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("pricing.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("pricing.description") }}
        </p>
      </div>
    </section>

    <!-- Pricing Table -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <div class="space-y-6">
          <!-- Swedish -->
          <NuxtLink
            :to="localePath('/services/swedish-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <div class="flex items-center gap-3 mb-1">
                  <h2
                    class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors"
                  >
                    {{ t("services.swedish.title") }}
                  </h2>
                  <span
                    class="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 font-bold px-2 py-0.5 rounded-full text-xs uppercase"
                  >
                    🏆 {{ t("pricing.award") }}
                  </span>
                </div>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.swedish.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  120 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  160 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage90") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Classical -->
          <NuxtLink
            :to="localePath('/services/classical-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.classical.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.classical.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  100 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  150 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage90") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Sports -->
          <NuxtLink
            :to="localePath('/services/sports-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.sports.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.sports.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  140 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Relaxation -->
          <NuxtLink
            :to="localePath('/services/relaxation-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.relaxation.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.relaxation.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  120 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  160 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage90") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Anti-Cellulite -->
          <NuxtLink
            :to="localePath('/services/anticellulite-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.anticellulite.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.anticellulite.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  100 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage45") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Pregnancy -->
          <NuxtLink
            :to="localePath('/services/pregnancy-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.pregnancy.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.pregnancy.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  120 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Children -->
          <NuxtLink
            :to="localePath('/services/children-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.children.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.children.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  100 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.massage60") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Cupping -->
          <NuxtLink
            :to="localePath('/services/cupping-massage')"
            class="group block !no-underline"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-gray-50 rounded-2xl group-hover:shadow-md transition-shadow"
            >
              <div class="mb-4 sm:mb-0">
                <h2
                  class="text-xl md:text-2xl font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors mb-1"
                >
                  {{ t("services.cupping.title") }}
                </h2>
                <p class="text-gray-600 text-sm md:text-base">
                  {{ t("pricing.cupping.summary") }}
                </p>
              </div>
              <div class="text-right whitespace-nowrap">
                <p class="text-lg md:text-xl font-bold text-gray-900">
                  30 CHF
                  <span class="text-sm font-normal text-gray-500"
                    >/ {{ t("services.duration.cupping") }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 text-center">
            <h3 class="text-xl font-display text-gray-900 mb-2">
              {{ t("pricing.mobile.title") }}
            </h3>
            <p class="text-gray-600">{{ t("pricing.mobile.text") }}</p>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center">
            <h3 class="text-xl font-display text-gray-900 mb-2">
              {{ t("services.pricing.payment") }}
            </h3>
            <p class="text-gray-600">
              {{ t("services.pricing.paymentMethods") }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-8 text-center">
            <h3 class="text-xl font-display text-gray-900 mb-2">
              {{ t("pricing.addon.title") }}
            </h3>
            <p class="text-gray-600">{{ t("services.pricing.note") }}</p>
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

useHead(() => ({
  title: t("pricing.meta.title"),
  meta: [
    { name: "description", content: t("pricing.meta.description") },
    { property: "og:title", content: t("pricing.meta.title") },
    { property: "og:description", content: t("pricing.meta.description") },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/championship-action.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/prices")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: t("pricing.title"),
        itemListElement: [
          {
            "@type": "Offer",
            name: t("services.swedish.title"),
            price: "120",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.classical.title"),
            price: "100",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.sports.title"),
            price: "140",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.relaxation.title"),
            price: "120",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.anticellulite.title"),
            price: "100",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.pregnancy.title"),
            price: "120",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.children.title"),
            price: "100",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            name: t("services.cupping.title"),
            price: "30",
            priceCurrency: "CHF",
          },
        ],
      }),
    },
  ],
}));
</script>
