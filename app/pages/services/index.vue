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
      <ServicesGrid />

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
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/services-index.jpeg",
    },
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
            name: t("services.swedish.title"),
            description: t("services.swedish.description"),
            price: "120",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "120",
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
            name: `${t("services.swedish.title")} (90 min)`,
            description: t("services.swedish.description"),
            price: "160",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "160",
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
            price: "140",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "140",
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
            name: t("services.relaxation.title"),
            description: t("services.relaxation.description"),
            price: "120",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "120",
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
            price: "160",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "160",
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
            name: t("services.anticellulite.title"),
            description: t("services.anticellulite.description"),
            price: "100",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "100",
              priceCurrency: "CHF",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "45",
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
            name: t("services.pregnancy.title"),
            description: t("services.pregnancy.description"),
            price: "120",
            priceCurrency: "CHF",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "120",
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
            name: t("services.children.title"),
            description: t("services.children.description"),
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
