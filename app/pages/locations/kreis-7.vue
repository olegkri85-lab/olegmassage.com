<template>
  <LocationPage
    :subtitle="t('location.kreis7.subtitle')"
    :title="t('location.kreis7.title')"
    :description="t('location.kreis7.description')"
    :why-title="t('location.kreis7.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis7.services.title')"
    location-key="kreis7"
    location-slug="kreis-7"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis7.benefits.1"),
  t("location.kreis7.benefits.2"),
  t("location.kreis7.benefits.3"),
  t("location.kreis7.benefits.4"),
  t("location.kreis7.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("kreis7");

useHead(() => ({
  title: t("location.kreis7.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis7.meta.description") },
    { property: "og:title", content: t("location.kreis7.meta.title") },
    { property: "og:description", content: t("location.kreis7.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-7")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis7.title"),
        description: t("location.kreis7.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 7 (Fluntern/Hottingen)",
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
