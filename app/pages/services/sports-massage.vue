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
          {{ t("services.sports.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("services.sports.description") }}
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <div class="text-white">
            <p class="text-sm uppercase tracking-wide mb-1">
              {{ t("services.pricing.title") }}
            </p>
            <p class="text-2xl md:text-3xl font-display font-bold">
              {{ t("services.duration.massage60") }} — 140 CHF
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
              src="/images/services/large/sports-massage.jpeg"
              :alt="t('services.sports.title')"
              :label="t('services.sports.title')"
            />
          </div>
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-display text-gray-900">
              {{ t("servicePages.sports.benefits.title") }}
            </h2>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.sports.benefits.1") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.sports.benefits.2") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.sports.benefits.3") }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[hsl(var(--accent-hsl))] text-2xl">✓</span>
                <span>{{ t("servicePages.sports.benefits.4") }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
            {{ t("servicePages.sports.whatToExpect.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("servicePages.sports.whatToExpect.description") }}
          </p>
        </div>

        <div class="text-center">
          <CtaButton variant="primary" size="lg">
            {{ t("cta.services") }}
          </CtaButton>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center"
        >
          {{ t("servicePages.relatedServices") }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            :to="localePath('/services/classical-massage')"
            class="group"
          >
            <ServiceCard
              :title="t('services.classical.title')"
              :description="
                t('services.classical.description').substring(0, 150) + '...'
              "
              image="/images/services/large/classical-massage.jpeg"
              image-ratio="4/3"
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/services/relaxation-massage')"
            class="group"
          >
            <ServiceCard
              :title="t('services.relaxation.title')"
              :description="
                t('services.relaxation.description').substring(0, 150) + '...'
              "
              image="/images/services/large/relaxation-massage.jpeg"
              image-ratio="4/3"
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/services/anticellulite-massage')"
            class="group"
          >
            <ServiceCard
              :title="t('services.anticellulite.title')"
              :description="
                t('services.anticellulite.description').substring(0, 150) +
                '...'
              "
              image="/images/services/large/anticellulite-massage.jpeg"
              image-ratio="4/3"
            />
          </NuxtLink>
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
  title: t("servicePages.sports.meta.title"),
  meta: [
    { name: "description", content: t("servicePages.sports.meta.description") },
    { property: "og:title", content: t("servicePages.sports.meta.title") },
    {
      property: "og:description",
      content: t("servicePages.sports.meta.description"),
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content:
        "https://olegmassage.com/images/og/sports-massage.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/services/sports-massage")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("services.sports.title"),
        description: t("services.sports.description"),
        provider: {
          "@type": "LocalBusiness",
          name: "olegmassage.com",
          url: "https://olegmassage.com",
        },
        offers: [
          {
            "@type": "Offer",
            price: "140",
            priceCurrency: "CHF",
            description: `${t("services.sports.title")} - ${t(
              "services.duration.massage60"
            )}`,
            availability: "https://schema.org/InStock",
          },
        ],
      }),
    },
  ],
}));
</script>
