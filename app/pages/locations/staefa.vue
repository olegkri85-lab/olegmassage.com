<template>
  <LocationPage
    :subtitle="t('location.staefa.subtitle')"
    :title="t('location.staefa.title')"
    :description="t('location.staefa.description')"
    :why-title="t('location.staefa.why.title')"
    :benefits="benefits"
    :services-title="t('location.staefa.services.title')"
    location-key="staefa"
    location-slug="staefa"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.staefa.benefits.1"),
  t("location.staefa.benefits.2"),
  t("location.staefa.benefits.3"),
  t("location.staefa.benefits.4"),
  t("location.staefa.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("staefa");

useHead(() => ({
  title: t("location.staefa.meta.title"),
  meta: [
    { name: "description", content: t("location.staefa.meta.description") },
    { property: "og:title", content: t("location.staefa.meta.title") },
    { property: "og:description", content: t("location.staefa.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/staefa")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.staefa.title"),
        description: t("location.staefa.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Stäfa",
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
