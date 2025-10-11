<template>
  <div class="bg-gray-50">
    <!-- Services Hero -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("services.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("services.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("services.description") }}
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12">
        <ServiceCard
          :title="t('services.classical.title')"
          :description="t('services.classical.description')"
          :duration="`${t('services.duration.massage60')} — 100 CHF • ${t(
            'services.duration.massage90'
          )} — 150 CHF`"
          image="/images/services/classical-massage.jpg"
          image-ratio="4/3"
          image-label="Professional therapist performing classical full-body massage with therapeutic techniques to relieve muscle tension and improve circulation"
        />
        <ServiceCard
          :title="t('services.sports.title')"
          :description="t('services.sports.description')"
          :duration="`${t('services.duration.massage60')} — 100 CHF • ${t(
            'services.duration.massage90'
          )} — 150 CHF`"
          image="/images/services/sports-massage.jpg"
          image-ratio="4/3"
          image-label="Athletic sports massage session focusing on muscle recovery, injury prevention, and flexibility improvement for active individuals and athletes"
        />
        <ServiceCard
          :title="t('services.relaxation.title')"
          :description="t('services.relaxation.description')"
          :duration="`${t('services.duration.massage60')} — 100 CHF • ${t(
            'services.duration.massage90'
          )} — 150 CHF`"
          image="/images/services/relaxation-massage.jpg"
          image-ratio="4/3"
          image-label="Soothing relaxation massage with gentle techniques and warm oils for stress relief and deep body-mind relaxation"
        />
        <ServiceCard
          :title="t('services.cupping.title')"
          :description="t('services.cupping.description')"
          :duration="`${t('services.duration.cupping')} — 30 CHF`"
          image="/images/services/cupping-therapy.png"
          image-ratio="4/3"
          image-label="Traditional cupping therapy treatment using suction cups to relieve muscle tension, promote blood circulation, and support body detoxification"
        />
      </div>

      <!-- Pricing Info -->
      <div class="mt-16 max-w-3xl mx-auto">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
            {{ t("services.pricing.title") }}
          </h3>
          <div class="space-y-4 text-base md:text-lg text-gray-700">
            <p>
              <strong>{{ t("services.pricing.minOrder") }}:</strong>
              {{ t("services.pricing.minOrderValue") }}
            </p>
            <p>
              <strong>{{ t("services.pricing.payment") }}:</strong>
              {{ t("services.pricing.paymentMethods") }}
            </p>
            <p class="text-gray-600 italic">{{ t("services.pricing.note") }}</p>
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
  title: t("meta.services.title"),
  meta: [
    { name: "description", content: t("meta.services.description") },
    { property: "og:title", content: t("meta.services.title") },
    { property: "og:description", content: t("meta.services.description") },
    { property: "og:type", content: "website" },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/services")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "Offer",
            name: t("services.classical.title"),
            description: t("services.classical.description"),
            price: "100",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "100",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "60",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: `${t("services.classical.title")} (90 min)`,
            description: t("services.classical.description"),
            price: "150",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "150",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "90",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: t("services.sports.title"),
            description: t("services.sports.description"),
            price: "100",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "100",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "60",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: `${t("services.sports.title")} (90 min)`,
            description: t("services.sports.description"),
            price: "150",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "150",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "90",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: t("services.relaxation.title"),
            description: t("services.relaxation.description"),
            price: "100",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "100",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "60",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: `${t("services.relaxation.title")} (90 min)`,
            description: t("services.relaxation.description"),
            price: "150",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "150",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "90",
                unitCode: "MIN",
              },
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
          {
            "@type": "Offer",
            name: t("services.cupping.title"),
            description: t("services.cupping.description"),
            price: "30",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "30",
              priceCurrency: "CHF",
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "olegmassage.com",
              url: "https://olegmassage.com",
            },
          },
        ],
      }),
    },
  ],
}));
</script>
