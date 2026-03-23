<template>
  <LocationPage
    :subtitle="t('location.kreis5.subtitle')"
    :title="t('location.kreis5.title')"
    :description="t('location.kreis5.description')"
    :why-title="t('location.kreis5.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis5.services.title')"
    location-key="kreis5"
    location-slug="kreis-5"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis5.benefits.1"),
  t("location.kreis5.benefits.2"),
  t("location.kreis5.benefits.3"),
  t("location.kreis5.benefits.4"),
  t("location.kreis5.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("kreis5");

useHead(() => ({
  title: t("location.kreis5.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis5.meta.description") },
    { property: "og:title", content: t("location.kreis5.meta.title") },
    { property: "og:description", content: t("location.kreis5.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-5")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis5.title"),
        description: t("location.kreis5.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 5 (Industriequartier)",
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
