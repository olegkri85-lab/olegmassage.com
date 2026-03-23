<template>
  <LocationPage
    :subtitle="t('location.wipkingen.subtitle')"
    :title="t('location.wipkingen.title')"
    :description="t('location.wipkingen.description')"
    :why-title="t('location.wipkingen.why.title')"
    :benefits="benefits"
    :services-title="t('location.wipkingen.services.title')"
    location-key="wipkingen"
    location-slug="wipkingen"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.wipkingen.benefits.1"),
  t("location.wipkingen.benefits.2"),
  t("location.wipkingen.benefits.3"),
  t("location.wipkingen.benefits.4"),
  t("location.wipkingen.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("wipkingen");

useHead(() => ({
  title: t("location.wipkingen.meta.title"),
  meta: [
    { name: "description", content: t("location.wipkingen.meta.description") },
    { property: "og:title", content: t("location.wipkingen.meta.title") },
    { property: "og:description", content: t("location.wipkingen.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/wipkingen")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.wipkingen.title"),
        description: t("location.wipkingen.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Wipkingen",
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
