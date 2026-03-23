<template>
  <LocationPage
    :subtitle="t('location.zurich.subtitle')"
    :title="t('location.zurich.title')"
    :description="t('location.zurich.description')"
    :why-title="t('location.zurich.why.title')"
    :benefits="benefits"
    :services-title="t('location.zurich.services.title')"
    location-key="zurich"
    location-slug="zurich"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.zurich.benefits.1"),
  t("location.zurich.benefits.2"),
  t("location.zurich.benefits.3"),
  t("location.zurich.benefits.4"),
  t("location.zurich.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("zurich");

useHead(() => ({
  title: t("location.zurich.meta.title"),
  meta: [
    { name: "description", content: t("location.zurich.meta.description") },
    { property: "og:title", content: t("location.zurich.meta.title") },
    { property: "og:description", content: t("location.zurich.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/zurich")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.zurich.title"),
        description: t("location.zurich.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich",
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
