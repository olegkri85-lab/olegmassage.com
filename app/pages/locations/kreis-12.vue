<template>
  <LocationPage
    :subtitle="t('location.kreis12.subtitle')"
    :title="t('location.kreis12.title')"
    :description="t('location.kreis12.description')"
    :why-title="t('location.kreis12.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis12.services.title')"
    location-key="kreis12"
    location-slug="kreis-12"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis12.benefits.1"),
  t("location.kreis12.benefits.2"),
  t("location.kreis12.benefits.3"),
  t("location.kreis12.benefits.4"),
  t("location.kreis12.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("kreis12");

useHead(() => ({
  title: t("location.kreis12.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis12.meta.description") },
    { property: "og:title", content: t("location.kreis12.meta.title") },
    { property: "og:description", content: t("location.kreis12.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-12")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis12.title"),
        description: t("location.kreis12.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 12 (Schwamendingen)",
        },
        serviceType: "Mobile Massage",
      }),
    },
    ...(faqSchema.value
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(faqSchema.value),
          },
        ]
      : []),
  ],
}));
</script>
