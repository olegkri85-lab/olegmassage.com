<template>
  <div class="bg-gray-50">
    <!-- Product Hero: Image + Sticky Sidebar -->
    <section class="py-16 px-8 xl:py-24 xl:px-16 bg-white">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-4">
          {{ t("services.subtitle") }}
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <!-- Left: Image + Title -->
          <div class="lg:col-span-7">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 mb-6">
              {{ t("services.anticellulite.title") }}
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed mb-8 lg:hidden">
              {{ t("services.anticellulite.description") }}
            </p>
            <NuxtImg
              src="/images/services/large/anticellulite-massage.jpeg"
              :alt="t('services.anticellulite.altText')"
              loading="eager"
              quality="80"
              class="w-full rounded-2xl object-cover"
              style="aspect-ratio: 4/3"
            />
            <p class="text-lg text-gray-600 leading-relaxed mt-8 hidden lg:block">
              {{ t("services.anticellulite.description") }}
            </p>
          </div>

          <!-- Right: Sticky Purchase Card -->
          <div class="lg:col-span-5">
            <div class="lg:sticky lg:top-8 space-y-6">
              <!-- Single Session Prices -->
              <div class="bg-gray-50 rounded-2xl p-6">
                <h2 class="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  {{ t("services.pricing.title") }}
                </h2>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-700">{{ t("services.duration.massage45") }}</span>
                    <span class="text-2xl font-bold text-gray-900">100 CHF</span>
                  </div>
                </div>
              </div>

              <!-- 10-Session Deal -->
              <div class="bg-[hsl(var(--lightAccent-hsl))] rounded-2xl p-6">
                <div class="flex items-center gap-2 mb-4">
                  <h3 class="text-sm uppercase tracking-wider text-gray-500">
                    {{ t("pricing.packages.title") }}
                  </h3>
                  <span class="bg-[hsl(var(--accent-hsl))] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {{ t("pricing.packages.badge") }}
                  </span>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-base text-gray-700">10 x 45 Min</span>
                    <div class="text-right">
                      <span class="text-sm text-red-500 line-through">1000 CHF</span>
                      <span class="text-xl font-bold text-gray-900 ml-2">850 CHF</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- CTA Buttons -->
              <div class="space-y-3">
                <CtaButton variant="primary" size="md" text-key="cta.services" class="w-full" />
                <a
                  href="mailto:oleh.kryvorotko@icloud.com?subject=Anticellulite%20Massage"
                  class="!no-underline w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-4 px-8 text-base font-medium hover:bg-gray-200 transition-colors"
                >
                  {{ t("gutschein.orderEmail") }}
                </a>
              </div>

              <!-- Trust Signals -->
              <div class="flex flex-col gap-2 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                  <span class="text-[hsl(var(--accent-hsl))]">✓</span>
                  {{ t("pricing.mobile.text") }}
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[hsl(var(--accent-hsl))]">✓</span>
                  {{ t("services.pricing.paymentMethods") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-gray-50">
      <div class="container mx-auto max-w-4xl">
        <!-- Benefits -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.anticellulite.benefits.title") }}
          </h2>
          <ul class="space-y-4 text-lg text-gray-700">
            <li v-for="i in 4" :key="i" class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
              <span>{{ t(`servicePages.anticellulite.benefits.${i}`) }}</span>
            </li>
          </ul>
        </div>

        <!-- What to Expect -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.anticellulite.whatToExpect.title") }}
          </h2>
          <p
            v-for="(paragraph, i) in t('servicePages.anticellulite.whatToExpect.description').split('\n\n')"
            :key="i"
            class="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Ideal For -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.anticellulite.idealFor.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.anticellulite.idealFor.description") }}
          </p>
        </div>

        <!-- Frequency -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.anticellulite.frequency.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.anticellulite.frequency.description") }}
          </p>
        </div>

        <!-- Preparation -->
        <div class="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.anticellulite.preparation.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.anticellulite.preparation.description") }}
          </p>
        </div>

        <!-- Contraindications -->
        <ServiceContraindications service-key="anticellulite" />

        <!-- Testimonials -->
        <ServiceTestimonials service-key="anticellulite" />

        <!-- FAQ -->
        <ServiceFaq service-key="anticellulite" />
      </div>
    </section>

    <!-- Related Guides -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-8">
          {{ t("servicePages.relatedGuides") }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NuxtLink
            v-for="guide in relatedGuides"
            :key="guide.to"
            :to="localePath(guide.to)"
            class="group block !no-underline bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <h3 class="text-lg font-display text-gray-900 group-hover:text-[hsl(var(--accent-hsl))] transition-colors">
              {{ t(guide.titleKey) }}
            </h3>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <RelatedServices :services="[
      { slug: 'relaxation-massage', key: 'relaxation', image: 'relaxation-massage.jpeg' },
      { slug: 'classical-massage', key: 'classical', image: 'classical-massage.jpeg' },
      { slug: 'cupping-massage', key: 'cupping', image: 'cupping-therapy.jpeg' },
    ]" />

    <GiftVoucherBanner />

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const relatedGuides = [
  { to: "/guide/massage-frequency", titleKey: "guide.massageFrequency.title" },
  { to: "/guide/which-massage", titleKey: "guide.whichMassage.title" },
];

useHead(() => ({
  title: t("servicePages.anticellulite.meta.title"),
  meta: [
    {
      name: "description",
      content: t("servicePages.anticellulite.meta.description"),
    },
    { property: "og:title", content: t("servicePages.anticellulite.meta.title") },
    {
      property: "og:description",
      content: t("servicePages.anticellulite.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content:
        "https://olegmassage.com/images/og/anticellulite-massage.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath(
        "/services/anticellulite-massage"
      )}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("services.anticellulite.title"),
        description: t("services.anticellulite.description"),
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
            price: "100",
            priceCurrency: "CHF",
            description: `${t("services.anticellulite.title")} - ${t(
              "services.duration.massage45"
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
