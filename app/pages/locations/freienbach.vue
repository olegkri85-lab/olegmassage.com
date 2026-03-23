<template>
  <LocationPage
    :subtitle="t('location.freienbach.subtitle')"
    :title="t('location.freienbach.title')"
    :description="t('location.freienbach.description')"
    :why-title="t('location.freienbach.why.title')"
    :benefits="benefits"
    :services-title="t('location.freienbach.services.title')"
    location-key="freienbach"
    location-slug="freienbach"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.freienbach.benefits.1"),
  t("location.freienbach.benefits.2"),
  t("location.freienbach.benefits.3"),
  t("location.freienbach.benefits.4"),
  t("location.freienbach.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("freienbach");

useHead(() => ({
  title: t("location.freienbach.meta.title"),
  meta: [
    { name: "description", content: t("location.freienbach.meta.description") },
    { property: "og:title", content: t("location.freienbach.meta.title") },
    { property: "og:description", content: t("location.freienbach.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/freienbach")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.freienbach.title"),
        description: t("location.freienbach.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Freienbach",
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
