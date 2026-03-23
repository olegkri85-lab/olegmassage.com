<template>
  <LocationPage
    :subtitle="t('location.zug.subtitle')"
    :title="t('location.zug.title')"
    :description="t('location.zug.description')"
    :why-title="t('location.zug.why.title')"
    :benefits="benefits"
    :services-title="t('location.zug.services.title')"
    location-key="zug"
    location-slug="zug"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.zug.benefits.1"),
  t("location.zug.benefits.2"),
  t("location.zug.benefits.3"),
  t("location.zug.benefits.4"),
  t("location.zug.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("zug");

useHead(() => ({
  title: t("location.zug.meta.title"),
  meta: [
    { name: "description", content: t("location.zug.meta.description") },
    { property: "og:title", content: t("location.zug.meta.title") },
    { property: "og:description", content: t("location.zug.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/zug")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.zug.title"),
        description: t("location.zug.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zug",
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
