<template>
  <LocationPage
    :subtitle="t('location.luzern.subtitle')"
    :title="t('location.luzern.title')"
    :description="t('location.luzern.description')"
    :why-title="t('location.luzern.why.title')"
    :benefits="benefits"
    :services-title="t('location.luzern.services.title')"
    location-key="luzern"
    location-slug="luzern"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.luzern.benefits.1"),
  t("location.luzern.benefits.2"),
  t("location.luzern.benefits.3"),
  t("location.luzern.benefits.4"),
  t("location.luzern.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("luzern");

useHead(() => ({
  title: t("location.luzern.meta.title"),
  meta: [
    { name: "description", content: t("location.luzern.meta.description") },
    { property: "og:title", content: t("location.luzern.meta.title") },
    { property: "og:description", content: t("location.luzern.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/luzern")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.luzern.title"),
        description: t("location.luzern.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Luzern",
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
