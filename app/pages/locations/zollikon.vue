<template>
  <LocationPage
    :subtitle="t('location.zollikon.subtitle')"
    :title="t('location.zollikon.title')"
    :description="t('location.zollikon.description')"
    :why-title="t('location.zollikon.why.title')"
    :benefits="benefits"
    :services-title="t('location.zollikon.services.title')"
    location-key="zollikon"
    location-slug="zollikon"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.zollikon.benefits.1"),
  t("location.zollikon.benefits.2"),
  t("location.zollikon.benefits.3"),
  t("location.zollikon.benefits.4"),
  t("location.zollikon.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("zollikon");

useHead(() => ({
  title: t("location.zollikon.meta.title"),
  meta: [
    { name: "description", content: t("location.zollikon.meta.description") },
    { property: "og:title", content: t("location.zollikon.meta.title") },
    { property: "og:description", content: t("location.zollikon.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/zollikon")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.zollikon.title"),
        description: t("location.zollikon.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zollikon",
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
