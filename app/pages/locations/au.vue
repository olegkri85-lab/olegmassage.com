<template>
  <LocationPage
    :subtitle="t('location.au.subtitle')"
    :title="t('location.au.title')"
    :description="t('location.au.description')"
    :why-title="t('location.au.why.title')"
    :benefits="benefits"
    :services-title="t('location.au.services.title')"
    location-key="au"
    location-slug="au"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.au.benefits.1"),
  t("location.au.benefits.2"),
  t("location.au.benefits.3"),
  t("location.au.benefits.4"),
  t("location.au.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("au");

useHead(() => ({
  title: t("location.au.meta.title"),
  meta: [
    { name: "description", content: t("location.au.meta.description") },
    { property: "og:title", content: t("location.au.meta.title") },
    { property: "og:description", content: t("location.au.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/au")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.au.title"),
        description: t("location.au.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Au ZH",
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
