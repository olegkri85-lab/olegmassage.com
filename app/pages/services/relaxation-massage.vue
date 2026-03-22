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
          {{ t("services.relaxation.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("services.relaxation.description") }}
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <div class="text-white">
            <p class="text-sm uppercase tracking-wide mb-1">
              {{ t("services.pricing.title") }}
            </p>
            <p class="text-2xl md:text-3xl font-display font-bold">
              {{ t("services.duration.massage60") }} — 120 CHF<br />
              {{ t("services.duration.massage90") }} — 160 CHF
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
              src="/images/services/large/relaxation-massage.jpeg"
              :alt="t('services.relaxation.title')"
              :label="t('services.relaxation.title')"
            />
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-display text-gray-900">
              {{ t("servicePages.relaxation.benefits.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.relaxation.benefits.1") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.relaxation.benefits.2") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.relaxation.benefits.3") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.relaxation.benefits.4") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- What to Expect -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.relaxation.whatToExpect.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.relaxation.whatToExpect.description") }}
          </p>
        </div>

        <!-- Ideal For -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.relaxation.idealFor.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.relaxation.idealFor.description") }}
          </p>
        </div>

        <!-- Frequency -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.relaxation.frequency.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.relaxation.frequency.description") }}
          </p>
        </div>

        <!-- Preparation -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.relaxation.preparation.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.relaxation.preparation.description") }}
          </p>
        </div>

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
      { slug: 'swedish-massage', key: 'swedish', image: 'swedish-massage.jpeg' },
      { slug: 'classical-massage', key: 'classical', image: 'classical-massage.jpeg' },
      { slug: 'pregnancy-massage', key: 'pregnancy', image: 'pregnancy-massage.jpeg' },
    ]" />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("servicePages.relaxation.meta.title"),
  meta: [
    {
      name: "description",
      content: t("servicePages.relaxation.meta.description"),
    },
    { property: "og:title", content: t("servicePages.relaxation.meta.title") },
    {
      property: "og:description",
      content: t("servicePages.relaxation.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content:
        "https://olegmassage.com/images/og/relaxation-massage.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath(
        "/services/relaxation-massage"
      )}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("services.relaxation.title"),
        description: t("services.relaxation.description"),
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
            price: "120",
            priceCurrency: "CHF",
            description: `${t("services.relaxation.title")} - ${t(
              "services.duration.massage60"
            )}`,
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            price: "160",
            priceCurrency: "CHF",
            description: `${t("services.relaxation.title")} - ${t(
              "services.duration.massage90"
            )}`,
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
