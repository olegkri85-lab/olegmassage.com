<template>
  <LocationPage
    :subtitle="t('location.rueschlikon.subtitle')"
    :title="t('location.rueschlikon.title')"
    :description="t('location.rueschlikon.description')"
    :why-title="t('location.rueschlikon.why.title')"
    :benefits="benefits"
    :services-title="t('location.rueschlikon.services.title')"
    location-key="rueschlikon"
    location-slug="rueschlikon"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.rueschlikon.benefits.1"),
  t("location.rueschlikon.benefits.2"),
  t("location.rueschlikon.benefits.3"),
  t("location.rueschlikon.benefits.4"),
  t("location.rueschlikon.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("rueschlikon");

useHead(() => ({
  title: t("location.rueschlikon.meta.title"),
  meta: [
    { name: "description", content: t("location.rueschlikon.meta.description") },
    { property: "og:title", content: t("location.rueschlikon.meta.title") },
    { property: "og:description", content: t("location.rueschlikon.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/rueschlikon")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.rueschlikon.title"),
        description: t("location.rueschlikon.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Rüschlikon",
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
