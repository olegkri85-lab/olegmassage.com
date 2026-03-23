<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("services.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("services.children.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("services.children.description") }}
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <div class="text-white">
            <p class="text-sm uppercase tracking-wide mb-1">
              {{ t("services.pricing.title") }}
            </p>
            <p class="text-2xl md:text-3xl font-display font-bold">
              {{ t("services.duration.massage60") }}, 100 CHF
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <NuxtImg
              src="/images/services/large/children-massage.jpeg"
              :alt="t('services.children.altText')"
              loading="lazy"
              quality="80"
              class="w-full h-full object-cover"
              style="aspect-ratio: 4/3"
            />
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-display text-gray-900">
              {{ t("servicePages.children.benefits.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.children.benefits.1") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.children.benefits.2") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.children.benefits.3") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.children.benefits.4") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- What to Expect -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.children.whatToExpect.title") }}
          </h2>
          <p
            v-for="(paragraph, i) in t('servicePages.children.whatToExpect.description').split('\n\n')"
            :key="i"
            class="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Ideal For -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.children.idealFor.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.children.idealFor.description") }}
          </p>
        </div>

        <!-- Frequency -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.children.frequency.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.children.frequency.description") }}
          </p>
        </div>

        <!-- Preparation -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.children.preparation.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.children.preparation.description") }}
          </p>
        </div>

        <!-- Contraindications -->
        <ServiceContraindications service-key="children" />

        <!-- Testimonials -->
        <ServiceTestimonials service-key="children" />

        <!-- FAQ -->
        <ServiceFaq service-key="children" />

        <!-- Booking CTA -->
        <div class="text-center">
          <CtaButton variant="primary" size="lg">
            {{ t("cta.services") }}
          </CtaButton>
        </div>
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
      { slug: 'pregnancy-massage', key: 'pregnancy', image: 'pregnancy-massage.jpeg' },
      { slug: 'classical-massage', key: 'classical', image: 'classical-massage.jpeg' },
      { slug: 'relaxation-massage', key: 'relaxation', image: 'relaxation-massage.jpeg' },
    ]" />

    <!-- Gift Voucher Banner -->
    <GiftVoucherBanner />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const relatedGuides = [
  { to: "/guide/first-massage", titleKey: "guide.firstMassage.title" },
  { to: "/guide/massage-frequency", titleKey: "guide.massageFrequency.title" },
];

useHead(() => ({
  title: t("servicePages.children.meta.title"),
  meta: [
    {
      name: "description",
      content: t("servicePages.children.meta.description"),
    },
    { property: "og:title", content: t("servicePages.children.meta.title") },
    {
      property: "og:description",
      content: t("servicePages.children.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content:
        "https://olegmassage.com/images/og/children-massage.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath(
        "/services/children-massage"
      )}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("services.children.title"),
        description: t("services.children.description"),
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
            description: `${t("services.children.title")} - ${t(
              "services.duration.massage60"
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
