<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("services.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("services.cupping.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("services.cupping.description") }}
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <div class="text-white">
            <p class="text-sm uppercase tracking-wide mb-1">
              {{ t("services.pricing.title") }}
            </p>
            <p class="text-2xl md:text-3xl font-display font-bold">
              15 min — 30 CHF
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <ImagePlaceholder
              ratio="4/3"
              src="/images/services/large/cupping-therapy.jpeg"
              :alt="t('services.cupping.title')"
              :label="t('services.cupping.title')"
            />
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-display text-gray-900">
              {{ t("servicePages.cupping.benefits.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.cupping.benefits.1") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.cupping.benefits.2") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.cupping.benefits.3") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.cupping.benefits.4") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- What to Expect -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.cupping.whatToExpect.title") }}
          </h2>
          <p
            v-for="(paragraph, i) in t('servicePages.cupping.whatToExpect.description').split('\n\n')"
            :key="i"
            class="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Ideal For -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.cupping.idealFor.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.cupping.idealFor.description") }}
          </p>
        </div>

        <!-- Frequency -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.cupping.frequency.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.cupping.frequency.description") }}
          </p>
        </div>

        <!-- Preparation -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.cupping.preparation.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.cupping.preparation.description") }}
          </p>
        </div>

        <!-- Testimonials -->
        <ServiceTestimonials service-key="cupping" />

        <!-- Booking CTA -->
        <div class="text-center">
          <CtaButton variant="primary" size="lg">
            {{ t("cta.services") }}
          </CtaButton>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <RelatedServices :services="[
      { slug: 'sports-massage', key: 'sports', image: 'sports-massage.jpeg' },
      { slug: 'classical-massage', key: 'classical', image: 'classical-massage.jpeg' },
      { slug: 'anticellulite-massage', key: 'anticellulite', image: 'anticellulite-massage.jpeg' },
    ]" />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("servicePages.cupping.meta.title"),
  meta: [
    {
      name: "description",
      content: t("servicePages.cupping.meta.description"),
    },
    { property: "og:title", content: t("servicePages.cupping.meta.title") },
    {
      property: "og:description",
      content: t("servicePages.cupping.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content:
        "https://olegmassage.com/images/og/cupping-therapy.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/services/cupping-massage")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("services.cupping.title"),
        description: t("services.cupping.description"),
        provider: {
          "@type": "LocalBusiness",
          name: "olegmassage.com",
          url: "https://olegmassage.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Zürich",
            addressCountry: "CH",
          },
        },
        offers: [
          {
            "@type": "Offer",
            price: "30",
            priceCurrency: "CHF",
            description: `${t("services.cupping.title")} - 15 min`,
            availability: "https://schema.org/InStock",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Zürich" },
          { "@type": "City", name: "Schwyz" },
          { "@type": "City", name: "Luzern" },
          { "@type": "City", name: "Zug" },
        ],
      }),
    },
  ],
}));
</script>
