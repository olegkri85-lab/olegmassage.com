<template>
  <LocationPage
    :subtitle="t('location.schwyz.subtitle')"
    :title="t('location.schwyz.title')"
    :description="t('location.schwyz.description')"
    :why-title="t('location.schwyz.why.title')"
    :benefits="benefits"
    :services-title="t('location.schwyz.services.title')"
    location-key="schwyz"
    location-slug="schwyz"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.schwyz.benefits.1"),
  t("location.schwyz.benefits.2"),
  t("location.schwyz.benefits.3"),
  t("location.schwyz.benefits.4"),
  t("location.schwyz.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("schwyz");

useHead(() => ({
  title: t("location.schwyz.meta.title"),
  meta: [
    { name: "description", content: t("location.schwyz.meta.description") },
    { property: "og:title", content: t("location.schwyz.meta.title") },
    { property: "og:description", content: t("location.schwyz.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/schwyz")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.schwyz.title"),
        description: t("location.schwyz.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Schwyz",
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
