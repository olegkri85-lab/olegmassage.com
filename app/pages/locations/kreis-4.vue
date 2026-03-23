<template>
  <LocationPage
    :subtitle="t('location.kreis4.subtitle')"
    :title="t('location.kreis4.title')"
    :description="t('location.kreis4.description')"
    :why-title="t('location.kreis4.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis4.services.title')"
    location-key="kreis4"
    location-slug="kreis-4"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis4.benefits.1"),
  t("location.kreis4.benefits.2"),
  t("location.kreis4.benefits.3"),
  t("location.kreis4.benefits.4"),
  t("location.kreis4.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("kreis4");

useHead(() => ({
  title: t("location.kreis4.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis4.meta.description") },
    { property: "og:title", content: t("location.kreis4.meta.title") },
    { property: "og:description", content: t("location.kreis4.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-4")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis4.title"),
        description: t("location.kreis4.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 4 (Aussersihl)",
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
